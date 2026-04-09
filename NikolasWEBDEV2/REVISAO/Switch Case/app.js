let Hamburger = 1;
let Pizza = 2;
let HotDog = 3;
let BatataFrita = 4;
let Refrigerante = 5;

let Pedido = 2;

console.log( Pedido );

switch( Pedido )
{
   case 1:
    console.log("R$ 15,00");
    break;

   case 2:
    console.log("R$ 20,00");
    break;
   
   case 3:
    console.log("R$ 10,00");
    break;

   case 4:
    console.log("R$ 8,00");
    break;

   case 5:
    console.log("R$ 5,00"); 
    break;
   
   default:
    console.log("Produto não encontrado"); 
}