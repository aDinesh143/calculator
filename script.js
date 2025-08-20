const screen = document.getElementById('screen');

function appendNumber(num) {
  screen.value += num;
}

function appendOperator(op) {
  const lastChar = screen.value.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    screen.value = screen.value.slice(0, -1) + op;
  } else {
    screen.value += op;
  }
}

function clearScreen() {
  screen.value = '';
}

function deleteLast() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = 'Error';
  }
}
