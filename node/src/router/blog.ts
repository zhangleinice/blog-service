import { getList, getDetail, newBlog } from '../controller/blog'
import { SuccessModel } from '../model/resModel'

export interface Idetail {
  author: string
  content: string
  createtime: number
  id?: number
  title: string
}

const handleBlogRouter = (req, res) => {
  if (req.method === 'GET' && req.path === '/api/blog/list') {
    const { author, keyword } = req.query
    return getList(author, keyword).then(listData => new SuccessModel(listData))
  }

  if (req.method === 'GET' && req.path === '/api/blog/detail') {
    const { id = 1 } = req.query
    return getDetail(id).then((data: any) => new SuccessModel(data[0]))
  }

  if (req.method === 'POST' && req.path === '/api/blog/newBlog') {
    return newBlog(req.body).then(data => new SuccessModel(data))
  }
}

export default handleBlogRouter
