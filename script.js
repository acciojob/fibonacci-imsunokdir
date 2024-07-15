
function fibonacci(n) {
// your code here
  if (n <= 0) return 0;
  if (n === 1) return 0; 
  if (n === 2) return 1; 
  return fibonacci(n - 1) + fibonacci(n - 2);
}
document.getElementById("fiboForm").addEventListener('submit', function(e){
	e.preventDefault();
	const n = document.getElementById("nInput").value;
	const res = document.getElementById("res");
	res.textContent = `${fibonacci(n)}`
})

