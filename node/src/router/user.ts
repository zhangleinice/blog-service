import { SuccessModel, ErrorModel } from '../model/resModel'
import { loginCheck } from '../controller/user'
const handleUserRouter = (req, res) => {
  if (req.method === 'POST' && req.path === '/api/user/login') {
    //   解构ts报错
    // const { username, password } = req.body
    const username = req.body.username || ''
    const password = req.body.password || ''
    const result = loginCheck(username, password)
    if (result) {
      return new SuccessModel(result)
    } else {
      return new ErrorModel('登录失败！')
    }
  }
}

export default handleUserRouter
