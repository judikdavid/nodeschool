function loadUsers(userIds, load, done) {
  var users = [],
      queueStatus = userIds.map(function() {return false;});

  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user;
      queueStatus[index] = true;

      if (queueStatus.every(Boolean)) {
        return done(users);
      }
    });
  });
}

module.exports = loadUsers;
