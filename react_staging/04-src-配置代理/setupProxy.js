const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy.createProxyMiddleware('/api1',{//遇见/api前缀的请求就会触发该代理
            target:'http://localhost:5000',//请求转发给谁
            changeOrigin:true,//控制服务器收到请求的host
            pathRewrite:{'^/api1':''}//重新请求路径
        }),
        proxy.createProxyMiddleware('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        }),
    )
}