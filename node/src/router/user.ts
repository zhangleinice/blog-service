import { SuccessModel, ErrorModel } from '../model/resModel'
import { login } from '../controller/user'

const getCookieExpires = (day = 2) => {
  const d = new Date();
  d.setTime(d.getTime() + day * 24 * 60 * 60)
  return d.toUTCString()
}

const handleUserRouter = (req, res) => {
  // 登录
  if (req.method === 'GET' && req.path === '/api/user/login') {
    // const { username, password } = req.body
    const { username, password } = req.query
    return login(username, password).then((data: any) => {
      if(data.username){
        // 操作cookie
        res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()};`)
        return new SuccessModel()
      }
      return new ErrorModel('登录失败！')
    })
  }
  // 登录测试
  if(req.method === 'GET' && req.path === '/api/user/login-test') {
    if(req.cookie.username) {
      return Promise.resolve(new SuccessModel())
    }
    return Promise.resolve(new ErrorModel('尚未登录'))
  }
}

export default handleUserRouter
