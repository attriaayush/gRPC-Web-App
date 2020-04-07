# gRPC-Web-App

Example web-application using the gRPC and ditching the REST. 

[Explore Protocol Buffers](https://developers.google.com/protocol-buffers/docs/gotutorial) 

Using: 

* Protocol Buffers 3.X.X
* Envoy Proxy 1.X 
* Server side: GoLang
* Client side: Html and NodeJS
* Docker

## Usage:
1. Run `docker build -t my-envoy:1.0 .` at the root level
1. Within the `client` app, run `npm install` to install all the dependencies
1. Build the client app, `npx webpack index.js`
1. Then proxy all the traffic using Envoy proxy to the client app, `docker run -d -p 8080:8080 -p 9901:9901 my-envoy:1.0` 