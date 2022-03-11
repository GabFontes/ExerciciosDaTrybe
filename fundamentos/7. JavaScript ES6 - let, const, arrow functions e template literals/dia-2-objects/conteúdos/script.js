const profile = {
    age: 18,
    name: 'Gabriel',
}

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };



const objectParam = (obj, chave, valuee) => {
    obj[chave] = valuee;

    return profile;
}

console.log(objectParam(profile, 'lastName', 'Fontes'));

const studentObj = (stdnt) => {

    const key = Object.keys(stdnt);

    for (i in key) {
        let result = `${key[i]}, Nível: ${stdnt[key[i]]}`;
        console.log(result);
    }
}
studentObj(student1);

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

  console.log(países['França']);