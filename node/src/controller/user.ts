import { excu } from '../db/mysql';

export const login = (username, password) => {
  let sql = `select * from users where username='${username}' and password='${password}';`
  // 返回一个peomise
  return excu(sql).then((rows: any) => rows[0] || {})
}
