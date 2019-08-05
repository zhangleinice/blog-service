// import * as mysql from 'mysql'
const mysql = require('mysql')

// 创建连接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1234',
  port: '3306',
  database: 'blog'
})
console.log(con)

// 连接
con.connect()

// 统一执行sql语句
const sql = `select * from blogs;`
// const sql = `insert into blogs (title, content, createtime, author) values ('标题c', '内容c', 1564669842234, '李四');`
con.query(sql, (err, result) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(result)
})

con.end()

// export const excu = sql => {
//   const promise = new Promise((resolve, reject) => {
//     console.log(con.query)
//     con.query((err, result) => {
//       console.log(con.query)
//       if (err) {
//         reject(err)
//         return
//       }
//       resolve(result)
//     })
//   })
//   return promise
// }
