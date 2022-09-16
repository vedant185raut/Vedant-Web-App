HelloWorld();

function HelloWorld() {
  element = document.getElementById('hello_env');
  greeting = document.createElement('h3');
  greeting.setAttribute('id', 'hello');
  greeting.style.display = "none";
  greeting.innerHTML = "Hello World!";

  element.appendChild(greeting);

  appear();
}

function appear() {
  document.getElementById('hello').style.display = "grid";
}