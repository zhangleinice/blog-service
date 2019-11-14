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
6. httpOnly：允许后端改cookie，不允许前端改cookie（保证安全性）;前端能设置上去，但是不生效

### session
1. cookie存username，会暴露，很危险
2. 如何解决：cookie存userid，在server端对应username
3. 解决方案：session：即server端存储用户信息


### redis
1. session的问题
   - 目前session是js变量，放在nodejs进程内存中
   - 第一，进程内存有限，访问量过大，内存暴增怎么办？
   - 第二，正式线上是多进程，进程之间无法共享内存

### nginx
1. cookie跨域不共享，前端和server端必须同域
2. 需要ngnix代理，让前后端同域
3. nginx代理配置
```conf
    # 将 / 代理到8001端口
    # 将 /api/ 代理到8000端口
    # 统一在8080端口访问
    server {
        listen       8080;
        server_name  localhost;

        location / {
            proxy_pass http://localhost:8001;
        }
        location /api/ {
            proxy_pass http://localhost:8000;
            proxy_set_header Host $host;
        }
```
