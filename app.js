import querystring from 'querystring';
import handleBlogRouter from './src/router/blog';
import handleUserRouter from './src/router/user';

const serverHandle = (req, res) => {
    // 设置返回格式
    res.setHeader('Content-type', 'application/json')

    const url = req.url;
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])
    req.query = query
    req.path = path

    // 处理blog路由
    const blogData = handleBlogRouter(req, res)
    if(blogdata) {
        res.end(JSON.stringify(blogData))
        return
    }

    // 处理user路由
    const userData = handleUserRouter(req, res)
    if(userData) {
        res.end(JSON.stringify(userData))
        return
    }

    // 未命中路由
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.write('404 Not Found\n')
    res.end()
}

export default serverHandle