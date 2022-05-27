const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware(["../backend/proxy.js"], { target: "http://localhost: 4000" })
    );
};