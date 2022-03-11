//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'A a n e m arie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, curr) =>
       acc + curr.split('').reduce((acumulator, current) => {
           console.log(acc, curr);
          if (current === 'a' || current === 'A') return acumulator + 1;
          return acumulator;
       }, 0), 0);
  }

  console.log(containsA());