// Random symbol picker for guard
const symbols = ['🔺', '⬜', '⭕'];
const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
document.getElementById("guard-symbol").textContent = randomSymbol;
