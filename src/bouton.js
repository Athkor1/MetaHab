const button = document.querySelector('#myButton');

button.addEventListener('mouseover', function() {
  button.style.backgroundColor = 'blue';
  button.style.boxShadow = 'none';
});

button.addEventListener('mouseout', function() {
  button.style.backgroundColor = 'transparent';
  button.style.boxShadow = '0 0 10px blue';
});

