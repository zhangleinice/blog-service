use myblog;
-- show tables;

select * from users;

select * from users where username='lisi';

select * from users order by id desc;

select * from users where username like '%zhang%';

select * from users where username='zhangsan' and `password`='123';

insert into users(username, `password`, realname) values ('wangwu', '12345', '王五');

delete from users where username='wangwu';



select * from blogs;

insert into blogs (title, content, createTime, author) values ('标题B', '内容B', 1564669842027, '李四');

update blogs set author='lisi' where author='李四';

-- SET SQL_SAFE_UPDATES=0;

select version();
