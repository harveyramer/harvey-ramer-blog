import { Router } from '@tsndr/cloudflare-worker-router'
import { hello } from './hello'

// Env Types
export type Var<T = string> = T
export type Secret<T = string> = T

export type Env = {
    // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
    // MY_KV_NAMESPACE: KVNamespace
    //
    // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
    // MY_DURABLE_OBJECT: DurableObjectNamespace
    //
    // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
    // MY_BUCKET: R2Bucket

    ENVIRONMENT: Var<'dev' | 'prod'>

    SECRET_TOKEN: Secret
}

// Request Extension
export type ExtReq = {
    userId?: number
}

// Context Extension
export type ExtCtx = {
    //sentry?: Toucan
}

// Initialize Router
const router = new Router<Env, ExtCtx, ExtReq>()

// Enabling build in CORS support
router.cors()

// Register global middleware
// router.use(({ env, req }) => {
//     // Intercept if token doesn't match
//     if (req.headers.get('authorization') !== env.SECRET_TOKEN)
//         return new Response(null, { status: 401 })
// })

// Simple get
router.get('/user', () => {
    return Response.json({
        id: 1,
        name: 'John Doe'
    })
})
router.get('/hello', () => {
    return hello();
})

// Post route with url parameter
router.post('/user/:id', ({ req }) => {

    const userId = req.params.id

    // Do stuff

    if (!true) {
        return Response.json({
            error: 'Error doing stuff!'
        }, { status: 400 })
    }

    return Response.json({ userId }, { status: 204 })
})

// Delete route using a middleware
router.delete('/user/:id', ({ env, req }) => {
    if (req.headers.get('authorization') === env.SECRET_TOKEN)
        return new Response(null, { status: 401 })

}, ({ req }) => {

  const userId = req.params.id

  // Do stuff...

  return Response.json({ userId })
})

// Listen Cloudflare Workers Fetch Event
export default <ExportedHandler> {
    async fetch(request: Request, env: Env, ctx: ExecutionContext) {
        return router.handle(request, env, ctx)
    }
}