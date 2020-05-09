// sqlmap.js
var sqlMap = {
  // home
  // home: {
  //   search: 'select * from instructor',
  //   add: 'insert into instructor(name) values (?)'
  // },
  register: {
    post: "insert into mydata.userinfo(username, phone, pw) values (?,?,?)"
  },
  login: {
    search: 'select * from mydata.userinfo',
    manager: 'select * from mydata.administrators',
  },
  order: {
    post: "insert into mydata.order(carid, phone, usercode, place, starttime, endtime) values (?,?,?,?,?,?)",
    get: "select * from mydata.order"
  },
  car: {
    post: "insert into mydata.car(brand, seat, type, power, img, price) values (?,?,?,?,?,?)",
    get: "select * from mydata.car"
  }
}
module.exports = sqlMap