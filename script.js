// function mostrar(){
//     document.getElementById("texto").innerHTML= Date();
// }

// let string = 'Let\' do it'; 


let promesa1 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
        response: 200,
        description : 'Primer promesa'
    }
    response(resp);
    }, 3000);
});

let promesa2 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
        response: 200,
        description : 'Segunda promesa'
    }
    response(resp);
    }, 5000);
});

async function ejecutarPromesas(){
    let respP1 = await promesa1;
    console.log(respP1);
    let respP2 = await promesa2;
    console.log(respP2);
}

ejecutarPromesas();