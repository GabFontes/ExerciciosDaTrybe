const fs = require('fs').promises;

Promise.all([
  fs.readFile('meu-arquivo.txt'),
  fs.readFile('aaaa.txt'),
  fs.readFile('bbbb.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

// Método para rodar promessas simultâneamente.