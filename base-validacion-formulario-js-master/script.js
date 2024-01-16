

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDnuhAJ473owMqiuVwbmLUctteiDZ5eZaI",
    authDomain: "datosdelform.firebaseapp.com",
    projectId: "datosdelform",
    storageBucket: "datosdelform.appspot.com",
    messagingSenderId: "880172585859",
    appId: "1:880172585859:web:299a0325f28cc022cd1cb6",
    measurementId: "G-L1TZY3GMEG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    //validar nombres
    let nombreEntrada = document.getElementById('name');
    let nombreError = document.getElementById('nameError');

    if(nombreEntrada.value.trim() === '') {
        nombreError.textContent = 'El campo nombre es obligatorio';
        nombreError.classList.add('error-message');
    }else {
        nombreError.textContent = ''
        nombreError.classList.remove('error-message');
    }

    //validar correo
    let correoEntrada = document.getElementById('email');
    let correoError = document.getElementById('emailError');
    let emailParttern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailParttern.test(correoEntrada.value)) {
        correoError.textContent = 'Por favor ingrese un correo valido';
        correoError.classList.add('error-message');
    }else{
        correoError.textContent = '';
        correoError.classList.remove('error-message');        
    }

    //validar contraseña

    let contraseniaEntrada = document.getElementById('password');
    let contraseniaError = document.getElementById('passwordError');

    if(contraseniaEntrada.value.length < 8) {
        contraseniaError.textContent = 'La contraseña debe tener al menos 8 caracteres';
        contraseniaError.classList.add('error-message');
    }else{
        contraseniaError.textContent = '';
        contraseniaError.classList.remove('error-message');        
    }

    //si tooos los campos estan bien

    if(!nombreError.textContent && !correoError.textContent && !contraseniaError.textContent) {

        //backend

        db.collection("users").add({
            nombre: nombreEntrada.value,
            email: correoEntrada.value,
            password: contraseniaEntrada.value,
        })
        .then((docRef) => {
            alert('Formulario enviado correctamente' , docRef.id);
            document.getElementById('formulario').reset();

        })
        .catch((error) => {
            alert('Error al enviar el formulario');
        });

        
    }

});