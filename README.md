# HTTPS Proxy Server

This repository contains a simple HTTPS proxy server built using Node.js, Express, and the `http-proxy-middleware` library. 
The server is designed to forward traffic from an HTTPS endpoint to a specified target URL. 
It's useful for scenarios where you need to serve traffic over HTTPS while the target service is running over HTTP. Typically in dev environments where clear text traffic might not be permitted.

## Details

- **HTTPS Support**: Allows serving traffic using SSL/TLS.
- **Logging**: Uses Morgan for request logging.
- **CORS**: Enabled to allow cross-origin requests.
- **Proxying**: Proxies requests to a specified target URL.

## Prerequisites

Before running this server, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

You will also need a pair of SSL certificate files (`server.key` and `server.cert`). These can be self-signed certificates for development purposes.
Self-signed certificates are bundled with this repository as well.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/dev-kasibhatla/local-https-proxy
   cd local-https-proxy
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Place your SSL certificate files in the project directory:

   ```
   .
   ├── server.cert
   └── server.key
   ```

## Configuration

Update the `TARGET_URL` constant in `main.js` to the URL of the target service you want to proxy requests to. By default, it is set to `http://localhost:3000`.

```js
const TARGET_URL = 'http://localhost:3000';
```

## Running the Server

To start the HTTPS proxy server, run the following command:

```sh
node main.js
```

The server will start and listen for incoming HTTPS requests on `https://localhost:3001`.

## Usage

Once the server is running, any request made to `https://localhost:3001` will be proxied to the target URL specified in the configuration. This is particularly useful for development and testing purposes when you need to serve your application over HTTPS.

## Logging

The server uses Morgan for logging incoming requests in the following format:

```
[date] method url status
```

This will help you monitor and debug the traffic passing through your proxy.

## Security

This server was only designed for development purposes. For production environments, make appropriate changes.

## License

This project is licensed under the MIT License.
