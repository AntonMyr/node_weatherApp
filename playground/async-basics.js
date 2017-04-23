console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 5000);

setTimeout(() => {
  console.log('Inside of callback number 2');
}, 0);
console.log('Finishing up');
