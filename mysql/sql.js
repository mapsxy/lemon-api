module.exports = {
    //添加用户
    ADD_MEMEBER: 'insert into userlist(uid,o_name) values(?,?)',
    //查询用户名是否存在
    SELECT_ISHAS: 'select * from userlist where o_name=?'
}