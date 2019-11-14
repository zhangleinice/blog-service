import { SuccessModel, ErrorModel } from '../model/resModel'
import { login } from '../controller/user'

const handleUserRouter = (req, res) => {
  // 登录
  if (req.method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    // const { username, password } = req.query
    return login(username, password).then((data: any) => {
      if(data.username){
        // 设置session
        req.session.username = data.username
        req.session.realname = data.realname
        return new SuccessModel('登陆成功！')
      }
      return new ErrorModel('登录失败！')
    })
  }
  // 登录测试
  if(req.method === 'GET' && req.path === '/api/user/login-test') {
    if(req.session.username) {
      return Promise.resolve(new SuccessModel({
        username: req.session.username,
        realname: req.session.realname
      }, '已登录！'))
    }
    return Promise.resolve(new ErrorModel('尚未登录'))
  }
}

export default handleUserRouter
