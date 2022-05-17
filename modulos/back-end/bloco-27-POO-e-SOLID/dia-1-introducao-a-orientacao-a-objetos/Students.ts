class Students {
  private _matricula: string;
  private _nome: string;
  private _notasDeProva: number[];
  private _notasDeTrabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasDeProva = [];
    this._notasDeTrabalho = [];
  }

  get estudante(): string {
    return this._nome
  }

  get matricula(): string {
    return this._matricula
  }

  get notasDeProva(): number[] {
    return this._notasDeProva
  }

  get notasDeTrabalho(): number[] {
    return this._notasDeTrabalho
  }

  set notasDeProva(values: number[]) {
    if (values.length > 4) throw new Error('O estudante só pode ter 4 notas de provas.')
    this._notasDeProva = values;
  }

  set notasDeTrabalho(values: number[]) {
    if (values.length > 2) throw new Error('O estudante só pode ter 2 notas de trabalhos.')
    this._notasDeTrabalho = values;
  }

  soma(): number {
    return [...this._notasDeProva, ...this._notasDeTrabalho]
      .reduce((acc, nota) => (acc + nota), 0);
  }
}

const studant1 = new Students('Matemática', 'Gab');
studant1.notasDeProva = [1, 2, 3, 4]
studant1.notasDeTrabalho = [1, 2]

console.log({
  provas: studant1.notasDeProva,
  trabalhos: studant1.notasDeTrabalho,
  estudante: studant1.estudante,
  matricula: studant1.matricula,
  somaDasNotas: studant1.soma()
});
