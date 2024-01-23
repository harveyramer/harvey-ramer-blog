"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.handler = void 0;
var cloudinary = require('cloudinary').v2;
var path = require('path');
// path to the custom font (TTF or OTF only), relative to this file
var PATH_TO_FILE = path.resolve(__dirname, '../dist/img/social_template.png');
var handler = function (event, context) { return __awaiter(void 0, void 0, void 0, function () {
    var params, quote, name, title, text, titleText, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = event.queryStringParameters;
                quote = params.quote;
                name = params.name;
                title = params.title;
                if (!quote || !quote.length || !name || !name.length) {
                    return [2 /*return*/, { "message": "Invalid.", statusCode: 404 }];
                }
                text = encodeURIComponent(quote).replace(/%2C/g, '%E2%80%9A');
                console.log(text);
                titleText = encodeURIComponent(title).replace(/%2F/g, '%E2%88%95');
                console.log(titleText);
                cloudinary.config({
                    cloud_name: "harveyramer",
                    api_key: "884773469499134",
                    api_secret: "bh0xBlttzCb9CL0nKTlC35IKrQg"
                });
                return [4 /*yield*/, cloudinary.uploader.upload(PATH_TO_FILE, {
                        alt: text,
                        public_id: name,
                        transformation: [
                            { width: 1200, crop: "scale" },
                            {
                                overlay: {
                                    font_family: "Alegreya",
                                    font_size: 40,
                                    font_color: "#383838",
                                    text: "\u201C" + text + "\u201D"
                                },
                                width: 1100,
                                crop: "fit"
                            },
                            {
                                flags: "layer_apply"
                            },
                            {
                                overlay: {
                                    font_family: "Roboto",
                                    font_weight: "100",
                                    font_size: 20,
                                    font_color: "#383838",
                                    text: "" + titleText
                                },
                                width: 1100,
                                crop: "fit"
                            },
                            {
                                flags: "layer_apply",
                                gravity: "north_west",
                                y: 70,
                                x: 70
                            }
                        ]
                    })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, {
                        statusCode: 200,
                        body: JSON.stringify(result)
                    }];
        }
    });
}); };
exports.handler = handler;
