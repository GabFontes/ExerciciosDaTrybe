let salarioBruto = 5120;
let INSS;
let aliquotaINSS;
let salarioBase;
let IR;
let aliquotaIR;
let salarioLiquido;
let parcelaDoIR;


if (salarioBruto < 1556.94) {
    aliquotaINSS = 8
    INSS = salarioBruto * aliquotaINSS / 100
    console.log("Imposto do INSS: R$",INSS), "\n\n";
}
else if (salarioBruto > 1556.94 && salarioBruto <2594.92) {
    aliquotaINSS = 9
    INSS = salarioBruto * aliquotaINSS / 100
    console.log("Imposto do INSS: R$",INSS, "\n\n");
}
else if (salarioBruto > 2594.92 && salarioBruto <5189.82) {
    aliquotaINSS = 11
    INSS = salarioBruto * aliquotaINSS / 100
    console.log("Imposto do INSS: R$",INSS, "\n\n");
}
else if (salarioBruto > 5189.82) {
    aliquotaINSS = 570.88
    INSS = 570.88
    console.log("Imposto do INSS: R$",INSS, "\n\n"); 
}

salarioBase = salarioBruto - INSS;
console.log("Salário Base: R$",salarioBase, "\n\n");

if (salarioBase <1903.98) {
    console.log("Isento de imposto de renda.");
}
else if (salarioBase > 1903.98 && salarioBase < 2826.65) {
    console.log("Alíquota de 7,5% e parcela de 142.80 a deduzir do imposto");
    aliquotaIR = 7.5
    parcelaDoIR = 142.80
    IR = salarioBase * aliquotaIR / 100 - parcelaDoIR
    salarioLiquido = salarioBase - IR 
    console.log("O seu imposto de renda é de:",IR);
    console.log("O seu salário líquido é de:", salarioLiquido);

}
else if (salarioBase > 2826.66 && salarioBase < 3751.05) {
    console.log("Alíquota de 15% e parcela de 354.80 a deduzir do imposto");
    aliquotaIR = 15
    parcelaDoIR = 354.80
    IR = salarioBase * aliquotaIR / 100 - parcelaDoIR
    salarioLiquido = salarioBase - IR 
    console.log("O seu imposto de renda é de:", IR);
    console.log("O seu salário líquido é de:", salarioLiquido);
}
else if (salarioBase > 3751.06 && salarioBase < 4664.68) {
    console.log("Alíquota de 22,5% e parcela de 636.13 a deduzir do imposto");
    aliquotaIR = 22.5
    parcelaDoIR = 636.13
    IR = salarioBase * aliquotaIR / 100 - parcelaDoIR
    salarioLiquido = salarioBase - IR 
    console.log("O seu imposto de renda é de:", IR);
    console.log("O seu salário líquido é de:", salarioLiquido);
}

else if (salarioBase > 4664.68) {
    console.log("Alíquota de 27.5% e parcela de 869.36 a deduzir do imposto");
    aliquotaIR = 27.5
    parcelaDoIR = 869.36
    IR = salarioBase * aliquotaIR / 100 - parcelaDoIR
    salarioLiquido = salarioBase - IR 
    console.log("O seu imposto de renda é de:", IR);
    console.log("O seu salário líquido é de:", salarioLiquido);
}






