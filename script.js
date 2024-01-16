// // function mostrar(){
// //     document.getElementById("texto").innerHTML= Date();
// // }

// // let string = 'Let\' do it'; 


// let promesa1 = new Promise((response) => {
//     setTimeout(() => {
//         let resp = {
//         response: 200,
//         description : 'Primer promesa'
//     }
//     response(resp);
//     }, 3000);
// });

// let promesa2 = new Promise((response) => {
//     setTimeout(() => {
//         let resp = {
//         response: 200,
//         description : 'Segunda promesa'
//     }
//     response(resp);
//     }, 5000);
// });

// async function ejecutarPromesas(){
//     let respP1 = await promesa1;
//     console.log(respP1);
//     let respP2 = await promesa2;
//     console.log(respP2);
// }

// ejecutarPromesas();

//GET
let urlBase = 'https://jsonplaceholder.typicode.com';
// let query = 'posts/1';

// fetch(`${urlBase}/${query}`)
//       .then(response => response.json())
//       .then(json => console.log(json))

//POST

// let requestBody = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   };

// fetch(`${urlBase}/posts`, {
//   method: 'POST',
//   body: JSON.stringify(requestBody),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//PUT
// let posteo = 3;
// let requestBody2 = {
//       id: posteo,
//       title: 'foo',
//       body: 'bar',
//       userId: 5,
//         };

// fetch(`${urlBase}/posts/${posteo}`, {
//   method: 'PUT',
//   body: JSON.stringify(requestBody2),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//PATCH

// let post = 3;
// let modificacion = {
//       title: 'aaa',
// };

// fetch(`${urlBase}/posts/${post}`, {
//       method: 'PATCH',
//       body: JSON.stringify(modificacion),
//       headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//       },
//       })
//       .then((response) => response.json())
//       .then((json) => console.log(json));

//DELETE

let elem_eliminar = 3;

fetch(`${urlBase}/posts/${elem_eliminar}`, {
      method: 'DELETE',
      });