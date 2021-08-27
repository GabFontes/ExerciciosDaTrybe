const n = 5
 let symbol = '*';
 let line = '';
 let spaceBar = '';

for (let index = n; index > 0; index-= 1) {
    line = line + symbol;
    for (let index = 0; index < n; index+= 1) {
    spaceBar+= ' '
    
}
console.log(spaceBar + line);
}
