console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 1000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 2000);

console.log('Finishing up');
