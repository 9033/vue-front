export class Timeout {
  constructor() {
    this.timeout = null
  }
  clear(){
    if(this.timeout){
      clearTimeout(this.timeout)
      this.timeout = null
    }
  }
  set(fn, t){
    this.clear()
    this.timeout = setTimeout(fn, t)
  }
}

export class Interval {
  constructor() {
    this.interval = null
  }
  clear(){
    if(this.interval){
      clearInterval(this.interval)
      this.interval = null
    }
  }
  set(fn, t){
    this.clear()
    this.interval = setInterval(fn, t)
  }
}

Function.prototype.wait = function(ms, ...args){
  const _this = this
  return new Promise((resolve) => {
    setTimeout(function(){
      resolve(_this(...args))
    }, ms, ...args);
  });
}
