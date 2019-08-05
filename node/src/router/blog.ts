import { getList } from '../controller/blog'
import { SuccessModel } from '../model/resModel'

const handleBlogRouter = (req, res) => {
  if (req.method === 'GET' && req.path === '/api/blog/list') {
    // const { author, keyword } = req.query || {}
    // const listData = getList()
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)
    // return getList().then(listData => {
    //   // console.log(listData)
    //   return listData
    // })
    return getList().then(listData => new SuccessModel(listData))
  }

  if (req.method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '博客详情接口'
    }
  }
}

export default handleBlogRouter
