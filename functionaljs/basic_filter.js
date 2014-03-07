module.exports = function getShortMessages(messages) {
  return messages.filter(function(m) {
      return m.message.length < 50;
    }).map(function(m) {
      return m.message;
    });
};
