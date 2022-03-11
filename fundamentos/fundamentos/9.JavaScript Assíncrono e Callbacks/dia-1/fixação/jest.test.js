test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
    }, 500);
  });// Copie o código acima em um arquivo .test.js e execute o comando npm test na sua máquina para ver! Como o setTimeout é uma função assíncrona, o teste retorna um resultado falso-positivo quando executado dessa forma — note, inclusive, que a frase "Deveria falhar!" sequer aparece no console.


  test('Não deveria passar!', (done) => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    }, 500);
  });// Apesar do código acima parecer estar correto, irá falhar com uma mensagem de timeout. O motivo é que quando uma asserção falha a exceção é lançada, logo o fluxo é interrompido antes que a instrução done() seja executada. Para resolver este problema podemos colocar um bloco try/catch em volta da nossa asserção. Enquanto o try tenta executar a função no seu escopo com sucesso, o catch "captura" o erro caso ele ocorra, chamando a callback done :

  test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
        console.log('Deveria falhar!');
        done();
      } catch (error) {
        done();
      }
    }, 500);
  }); // Estamos quase lá, o código acima irá gerar um falso-positivo, o motivo é que, ao chamar a callback dentro do catch, será necessário passar como argumento o erro capturado:

  test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
        console.log('Deveria falhar!');
        done();
      } catch (error) {
        done(error); // Alteramos esta linha
      }
    }, 500);
  });