document.getElementById("fiboForm").addEventListener('submit', function(e){
  e.preventDefault(); // Prevent default form submission behavior

  // Get the input value from the form
  const n = document.getElementById("nInput").value;

  // Calculate the Fibonacci number
  const result = fibonacci(n);

  // Update the result element with the calculated value
  document.getElementById("res").textContent = result;
});
function fibonacci(n) {
// your code here
  if (n <= 0) return 0;
  if (n === 1) return 0; 
  if (n === 2) return 1; 
  return fibonacci(n - 1) + fibonacci(n - 2);
}

