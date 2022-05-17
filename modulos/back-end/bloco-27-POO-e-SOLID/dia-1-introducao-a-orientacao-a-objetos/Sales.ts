class Client {
  private _nome: string

  constructor(nome: string) {
    this._nome = nome;
  }

  get cliente(): string {
    return this._nome
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._nome = value;
  }
}

class OrderItem {
  private _nome: string;
  private _preço: number;

  constructor(nome: string, preço: number) {
    this._nome = nome;
    this._preço = preço;
  }

  get name(): string {
    return this._nome;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._nome = value;
  }

  get price(): number {
    return this._preço;
  }

  set price(value: number) {
    if (value < 0) throw new Error('O preço deve ser positivo.');

    this._preço = value;
  }
}

class Order {
  private _cliente: Client;
  private _items: OrderItem[] = [];
  private _formaDePagamento: string;
  private _desconto: number = 0;

  constructor(cliente: Client, items: OrderItem[], formaDePagamento: string, desconto: number) {
    this._cliente = cliente;
    this._items = items;
    this._formaDePagamento = formaDePagamento;
    this._desconto = desconto;
  }

  get client(): Client {
    return this._cliente;
  }

  set client(value: Client) {
    this._cliente = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item.');
    }

    this._items = value;
  }

  get formaDePagamento(): string {
    return this._formaDePagamento;
  }

  set formaDePagamento(value: string) {
    this._formaDePagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._desconto = value;
  }

  calculateTotal(): number {
    return this._items.
      reduce((previousValue, item) => {
        const total = previousValue += item.price;

        return total;
      }, 0)
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this._desconto);
  }

}

const client = new Client('João');

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());