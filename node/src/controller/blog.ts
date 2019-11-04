import { excu } from '../db/mysql'

export interface Idetail {
  author: string
  content: string
  createtime: number
  id: number
  title: string
}

export const getList = (author?: string, keyword?: string) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}' `
  }
  sql += `order by id desc;`
  // 返回一个peomise
  return excu(sql)
}

export const getDetail = (id: number) => {
  let sql = `select * from blogs where id=${id};`
  return excu(sql)
}

export const newBlog = (blogData: Idetail) => {
  const { title, content, createtime, author } = blogData
  let sql = `insert into blogs (title, content, createtime, author) values ('${title}', '${content}', '${createtime}', '${author}');`
  return excu(sql)
}
