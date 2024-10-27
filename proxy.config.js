const PROXY_CONFIG = [{
        "context": ["/api-sevenheads"],
        "target": 'https://api.sevenheads.com.br/v1/api',
        "secure": false,
        "changeOrigin": true,
        "pathRewrite": { '^/api-sevenheads': '' }
    }
];

module.exports = PROXY_CONFIG