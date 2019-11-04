const env = process.env.NODE_ENV

let MYSQL_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    port: '3306',
    database: 'blog'
  }
}

// 线上的服务器地址
if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    port: '3306',
    database: 'blog'
  }
}

export default MYSQL_CONF
