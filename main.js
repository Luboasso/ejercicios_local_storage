const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('msg');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const clear = document.getElementById('clear');

function onSubmit(e) {
    e.preventDefault()
    const person = {
        name: inputName.value,
        email: inputEmail.value,
        message: inputMessage.value,
    }
    localStorage.setItem('person', JSON.stringify(person));

    const personSaved = JSON.parse(localStorage.getItem('person'));

    console.log(personSaved);

    text.innerHTML = `nombre: ${personSaved.name}, email:${personSaved.email}, message: ${personSaved.message}`;
}

btn.addEventListener('click',onSubmit);

// extra

const users = JSON.parse(localStorage.getItem('users')) || [
    
];

function onSubmit(e) {
    e.preventDefault()
    const person = {
        name: inputName.value,
        email: inputEmail.value,
        message: inputMessage.value,
    };
    users.push(person);
    console.log(users);

        localStorage.setItem('users', JSON.stringify(person));

    const personSaved = JSON.parse(localStorage.getItem('users'));

    console.log(personSaved);
 for(let i = 0; i < users.length; i++) {
    text.innerHTML += `name: ${users[i].name}, email:${users[i].email}, message: ${users[i].message}`;
}
 }
    



