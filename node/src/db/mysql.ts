import * as mysql from 'mysql'
import MYSQL_CONF from '../config/db'

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 连接
con.connect()

// 统一执行sql语句
export const excu = (sql: string) => {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}
