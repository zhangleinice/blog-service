### node

### mysql
<!-- mysql连接报错 -->
1. 连接 mysql 出现Client does not support authentication protocol requested by server解决方案
```shell
mysql -uroot -p
USE mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '831015';
FLUSH PRIVILEGES;
```