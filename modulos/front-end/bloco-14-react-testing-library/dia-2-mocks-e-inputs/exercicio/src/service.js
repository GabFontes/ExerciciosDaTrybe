const randomNumber = () => Math.floor(Math.random() * 101);
const stringToUpperCase = (str) => str.toUpperCase();
const firstCaracterOfStr = (str) => str[0];
const concactenateStr = (a, b) => `${a}${b}`
module.exports = {
    randomNumber,
    stringToUpperCase,
    firstCaracterOfStr,
    concactenateStr,
};