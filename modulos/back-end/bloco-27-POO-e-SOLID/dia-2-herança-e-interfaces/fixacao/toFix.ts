class Superclass {
	public isSuper: boolean = true;
	// protected teste: string; // subclasses podem ler e escrever atributos do tipo protected
	sayHello(): void {
		console.log("Olá mundo!!")
	}
}

class Subclass extends Superclass { }

const myFunc = (obj: Superclass): void => {
	obj.sayHello();
}

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);

