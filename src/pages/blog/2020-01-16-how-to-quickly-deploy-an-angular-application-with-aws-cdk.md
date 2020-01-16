---
templateKey: blog-post
title: How To Quickly Deploy an Angular Application with AWS CDK
date: 2020-01-16T03:27:29.527Z
description: >-
  Amazon's Cloud Development Kit (CDK) has taken much of the pain out of
  deploying resources to the AWS cloud. After hearing about it at re:Invent
  2019, I decided to experiment with the CDK using TypeScript. 
featuredpost: false
featuredimage: /img/img_0675.jpg
tags:
  - software
  - AWS
---
My goal was simple: to deploy a static site on AWS. But I wanted to make it a bit more interesting by including an Angular application. I bootstrapped a vanilla Angular install any developer could use and deploy.

## Why Not Use Native CloudFormation?

CloudFormation is a powerful way to manage infrastructure as code. But it is not designed for human writers. Large teams use powerful enterprise tools to manage AWS infrastructure. But smaller teams sometimes do not have the expertise or resources to use those tools. For such teams, Amazon CDK brings a familiar feel to infrastructure as code. 

In short, there is nothing wrong with CloudFormation. But maintaining CloudFormation templates is unwieldy for small development teams. CDK for the win!

## A CDK Overview

At the heart of CDK is a [library of Constructs](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html). These structural building blocks represent cloud components. Constructs contain all the information needed to generate a valid CloudFormation template. Developers compose constructs to define higher level components, much like application code.

## Trying It Out for Yourself

If you want test CDK for your own Angular projects, I have simplified the process with a [Github repo.](https://github.com/harveyramer/deploy-angular-with-cdk) 

1. Clone the repo
2. Follow the instructions in the Readme file
3. Enjoy your static site hosted on S3 with CloudFront and Route53 DNS.

Using this project, you will have an Angular application hosted on S3 in an hour or two. The initial deployment takes about 30 minutes to provision AWS infrastructure.

If you find bugs or have questions, please [contact me](http://localhost:8000/contact).
