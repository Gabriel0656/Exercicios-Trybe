// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Insira o retorno da função `getUser`
//   return param(userToReturn)
// };

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

const sum = array => {
  return array.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;

  });
}
console.log(sum([1, 2, 3]))