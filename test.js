// minimal test: ensure server file loads without crashing
try {
  require('./index.js');
  console.log('TEST PASS: index.js loaded');
  process.exit(0);
} catch (err) {
  console.error('TEST FAIL:', err);
  process.exit(1);
}
