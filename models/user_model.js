const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  getAll: function(callback) {
    return db.query('select * from user', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from user where id_user=?', [id], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('insert into user (username, password) values(?,?)',
      [user.username, hash], callback);
    });
  },
  delete: function(id, callback) {
    return db.query('delete from user where id_user=?', [id], callback);
  },
  update: function(id, user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('update user set username=?, password=? where id_user=?',
      [user.username, hash, id], callback);
    });
  }

}
          
module.exports = user;