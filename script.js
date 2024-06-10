let coins = parseInt(localStorage.getItem('coins')) || 0;
let clickRate = parseInt(localStorage.getItem('clickRate')) || 1;
let clickLimit = parseInt(localStorage.getItem('clickLimit')) || 5;
let clickValue = parseInt(localStorage.getItem('clickValue')) || 1;
let upgradeCost = parseInt(localStorage.getItem('upgradeCost')) || 100;
let upgradeValueCost = parseInt(localStorage.getItem('upgradeValueCost')) || 100;
let clicks = parseInt(localStorage.getItem('clicks')) || 0;
let lastClickTime = Date.now();
let upgradeClickLevel = parseInt(localStorage.getItem('upgradeClickLevel')) || 1;
let upgradeValueLevel = parseInt(localStorage.getItem('upgradeValueLevel')) || 1;
const maxUpgradeLevel = 50;

document.getElementById('coins').innerText = coins;
document.getElementById('clicks').innerText = clicks;
document.getElementById('clickRate').innerText = clickRate;
document.getElementById('click')