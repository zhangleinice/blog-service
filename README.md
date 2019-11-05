### node

### mysql
1. 建立连接，执行sql，关闭
2. sql语句
```sql
    insert into users(username, `password`, realname) values ('wangwu', '12345', '王五');
    delete from users where username='wangwu';  -- 强删除，不可恢复
    update blogs set author='lisi' where author='李四';
    select * from users where 1=1 and state=1; -- 软删除，保证数据的可恢复性
```
3. mysql软删除和硬删除
    - 软删除：保证数据的可恢复性。但是同时带来弊端。导致 查数据时 慢 尤其是一些特殊场景下。
    - 硬删除：数据不可恢复。
4. mysql数据类型

### 框架分层设计
1. httpServer
2. app.js入口
3. router
4. controller
5. servers
6. api

### cookie
1. 最大存储5kb
2. 跨域不共享
3. 发送http请求会携带cookie
4. 浏览器可修改cookie，追加的方式（有限制）
5. server端可修改cookie返给浏览器（set-cookie）
6. httpOnly：允许后端改cookie，不允许前端改cookie（保证安全性）

