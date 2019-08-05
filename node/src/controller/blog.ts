import { excu } from '../db/mysql'

export const getList = (author?: string, keyword?: string) => {
  let sql = `select * from blogs;`
  // if (author) {
  //   sql += `and author=${author} `
  // }
  // if (keyword) {
  //   sql += `and keyword=${keyword} `
  // }
  // sql += `order by createtime desc;`
  // console.log(excu(sql))
  // excu(sql).then(data => {
  //   console.log(data)
  // })
  return excu(sql)
  // return [
  //   {
  //     id: 1,
  //     title: '标题1',
  //     content: '这是blog内容1',
  //     createTime: 1564442710479
  //   },
  //   {
  //     id: 2,
  //     title: '标题2',
  //     content: '这是blog内容2',
  //     createTime: 1564442712344
  //   }
  // ]
}
