function memoize(fn) {
 const cache = new Map();
 return function( ...args) {
  const key = args.toString();
  console.log('fn called with ' + key);
  console.log(cache);
  if (cache.has(key)) {
   return cache.get(key);
  }
  cache.set(key, fn( ...args));
  return cache.get(key);
 };
}

function square(n){
 return n*n;
}
function time(fn) {
 console.time();
 fn();
 console.timeEnd();
}
const squarem = memoize(square)
time(() => squarem(10));
time(() => squarem(10));
time(() => squarem(20));
time(() => squarem(20));
time(() => squarem(30));
time(() => squarem(30));