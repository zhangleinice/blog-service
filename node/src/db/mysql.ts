import * as mysql from 'mysql'
import dbConfig from '../config/db'

// 创建连接对象
const con = mysql.createConnection(dbConfig.MYSQL_CONF)

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

// 不需要关闭，类似一个单例模式，只创建一次
// 关闭连接
// con.end()
