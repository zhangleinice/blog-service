import { SuccessModel, ErrorModel } from '../model/resModel'
import { loginCheck } from '../controller/user'
const handleUserRouter = (req, res) => {
  if (req.method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    const result = loginCheck(username, password)
    if (result) {
      return new SuccessModel(result)
    } else {
      return new ErrorModel('登录失败！')
    }
  }
}

export default handleUserRouter
