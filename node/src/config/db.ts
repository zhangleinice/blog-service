const env = process.env.NODE_ENV

let MYSQL_CONF
let REDIS_CONF


if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    port: '3306',
    database: 'blog'
  }
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
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
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}

export default {
  MYSQL_CONF,
  REDIS_CONF
}

