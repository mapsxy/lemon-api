var sql = require('../../mysql/sql'); //sql语句

var query = require('../../mysql/index');

function addUser(req, res, next) {
    var name = req.body.name;
    var uid = req.body.uid;
    if (!name) {
        res.json({ code: 2, msg: '用户名不存在' });
        return;
    } else if (!uid) {
        isHas();
    }


    //是否存在用户名
    function isHas() {
        query(sql.SELECT_ISHAS, [name], function(err, results) {
            if (!err) {
                if (results.length) {
                    res.json({ code: 3, msg: '用户名已存在' })
                } else {
                    add();
                }
            } else {
                res.json({ code: 0, msg: '服务器错误' });
            }
        })
    }

    function add() {
        query(sql.ADD_MEMEBER, [])
    }
}
module.exports = {
    addUser: addUser
}