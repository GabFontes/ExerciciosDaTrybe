function biggestName(words){
    maiorPalavra = words[0];
    for (let index in words){
        if (maiorPalavra.length < words[index].length ) {
            maiorPalavra = words[index] 
            
        }
          

    }
    return maiorPalavra  
    
}
console.log(biggestName(['cuscuz', 'livro', 'paralelepípedo']));