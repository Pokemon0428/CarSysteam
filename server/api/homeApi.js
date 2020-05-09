// homeApi.js
var models = require('../db') // 引入db配置
var express = require('express') // express框架
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap') // sql语句

// 连接数据库
var conn = mysql.createConnection(models.mysql)
conn.connect()

var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 查询列表接口，
// get接口，这里配置的/getlist,使用的时候就是 /getlist
// 回看index.js 中 app.use('/', homeApi) ，就懂了

router.get('/userinfo', (req, res) => {
  var sql = $sql.login.search
  var parms = req.query
  console.log(parms)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

router.get('/managerinfo', (req, res) => {
  var sql = $sql.login.manager
  var parms = req.query
  console.log(parms)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

router.get('/carinfo', (req, res) => {
  var sql = $sql.car.get
  var parms = req.query
  console.log(parms)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

router.get('/orderinfo', (req, res) => {
  var sql = $sql.order.get
  var parms = req.query
  console.log(parms)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

router.post('/adduser', (req, res) => {
  var sql = $sql.register.post
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms[0][0], parms[0][1], parms[0][2]], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/addcar', (req, res) => {
  var sql = $sql.car.post
  var parms = req.body
  console.log(parms)
  // [parms[0], parms[1], parms[2], parms[3], parms[4], parms[5]
  conn.query(sql, [parms[0][0], parms[0][1], parms[0][2], parms[0][3], parms[0][4], parms[0][5]], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/addorder', (req, res) => {
  var sql = $sql.order.post
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms[0][0], parms[0][1], parms[0][2], parms[0][3], parms[0][4], parms[0][5]], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router