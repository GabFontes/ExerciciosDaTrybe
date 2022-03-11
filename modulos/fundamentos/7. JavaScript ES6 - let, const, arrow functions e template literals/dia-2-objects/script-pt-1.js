const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
//   const customerInfo = (order) => {
//     // Adicione abaixo as informações necessárias.
//     let result = `Olá Ana Silveira, entrega para: ${order.name}, Telefone:${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`
    
//     return result

  
//   }
//   console.log(customerInfo(order));

  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const name = order.name = 'Gabriel Fontes';
    const pizza = Object.keys(order.order.pizza);
    const coke = Object.values(order.order.drinks.coke);
    const paymentPrice = order.order.payment = 50;
    let result = `Olá ${name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${coke[0]} é R$ ${paymentPrice}.00.`;
    
    return result;
  }
  
 console.log(orderModifier(order));