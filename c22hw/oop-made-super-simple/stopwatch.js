
function Stopwatch() {
  let started = false;
  let startTime;
  let duration = 0;

  this.start = function() {
    if(started) {
      throw new Error("Stopwatch has already started.");
    }

    startTime = Date.now();
    started = true;
  }

  this.stop = function() {
    if(!started) {
      throw new Error("Stopwatch is not started.");
    }

    duration = (Date.now() - startTime)/1000;
    started = false;
  }

  this.reset = function() {
    startTime = null;
    started = false;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function() { return duration }
  })

}

const sw = new Stopwatch();
sw.duration;
sw.start();
sw.start();
sw.stop();
sw.stop();
sw.duration;