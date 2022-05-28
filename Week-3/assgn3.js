function createIncrement() {
 let count=0;
 function increment() {
  count++;
 }
 let message=`Count is ${count}`;
  function log() {
  console.log(message);
 }
  return[increment,log];
 }
  const[increment,log] = createIncrement();
  increment();
  increment();
  increment();
  log();

  //Output is 'count is 0' because when the 'createIncrement()' is called, 'let message=`Count is ${count)'
  // is outside the function increment where the value of count is declared 0, 
  // now with executing increment(); 3 times, the count definitely increases to 3 but in the log();
  // the message is stored and printed as 'count is 0' firstly and increment(); has no relation with message and log()