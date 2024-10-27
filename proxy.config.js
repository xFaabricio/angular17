const PROXY_CONFIG = [{
        "context": ["/api-sevenheads"],
        "target": 'https://msv-sevenheads-c4c1b4c14d87.herokuapp.com/v1/api',
        "secure": false,
        "changeOrigin": true,
        "pathRewrite": { '^/api-sevenheads': '' }
    }
];

module.exports = PROXY_CONFIG