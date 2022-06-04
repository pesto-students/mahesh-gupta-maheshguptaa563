function makeRequest(location) {
 return new Promise((resolve, reject) => {
  console.log(`Making request to ${location}`)
  if (location === 'Google') {
   resolve('Google says hi')
  } else {
   reject('We can only talk to Google')
  }
 })
}

function processRequest(response) {
 return new Promise((resolve, reject) => {
  console.log('Processing Response')
  resolve(`Extra Information + ${response}`)
 })
}

async function doWork() {
 try {
   const response = await makeRequest('Google')
   console.log('Response received')
   const processedResponse = await processRequest(response)
   console.log(processedResponse)
 } catch(err) {
   console.log(err)
 }

}

// doWork()

function* useCaseGen(location) {
 console.log(`Making request to ${location}`)
 if (location === 'Google') {
  yield 'Response received';
  yield 'Processing Response'
  yield 'Extra Information + Google Says Hi'
 } else {
  yield 'We can only talk to Google'
 }
}

let i = useCaseGen('Google');
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

doWork()