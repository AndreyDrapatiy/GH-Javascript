var prevValue;

document
    .querySelector('input[type="search"]')
    .addEventListener('input', debounce(function (event) {
        var eventValue = event.target.value;
        if (prevValue === eventValue) {
          return;
        }
        console.log(eventValue);
        prevValue = eventValue;
    }, 250), false);

function debounce (callback, time) {
  var timer;

  return function () {
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback(args[0])
    }, time)
  }
}

function value() {

  var input = document.querySelector('input[type="search"]')
  var text = " this your length"
  var resultId = document.getElementById('result')
  
  var getNumberOfSymbvol = function() {
   this.res = input // this.res - is diferent 
      return this.res.value.length         
  }

 var apendRes = function () {
    input.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
        this.res = resultId
        this.input = input

        this.number = getNumberOfSymbvol()
        this.text = text
        this.res.innerHTML = this.number + this.text 
        this.input.value = ''
      }
    }, false)
  }
  apendRes()
}

value()