function repeat(operation, num) {
  if (num <= 0) {
    return;
  }
        
  operation();
            
  if (num % 100 === 0) {
    setTimeout(repeat.bind(this, operation, num--), 1);
  }
  else {
    repeat(operation, num--);
  }
}

module.exports = repeat;
