const inputFilterContacts = document.querySelector('.input__search');
const inputName = document.querySelector('.input__name');
const inputPhone = document.querySelector('.input__phone');
const btnAddContact = document.querySelector('.btn__add-contact');
const contacstList = document.querySelector('.contacts-list');
// const listItem = document.querySelectorAll('.list__item');

const minLengthInputName = 1;
const maxLengthInputName = 50;
const numberLengthInputPhone = 11;

let arrayContacts = [];
let arrayContactsAux = [];

const verifyInputs = () => {
    if (verifyLengthInputName() ||
        verifyLengthInputPhone()) {
        alert('preencha todos os campos corretamente');
    } else {
        insertContactInArray();
        createContactsList();
        clearInputs();
        alert('contato adicionado com suceso!');
    }
}

const verifyLengthInputName = () => {
    if (inputName.value.length < minLengthInputName || inputName.value.length > maxLengthInputName) {
        return true;
    } else {
        return false;
    }


}
const verifyLengthInputPhone = () => {
    if (inputPhone.value.length !== numberLengthInputPhone) {
        return true;
    } else {
        return false;
    }
}

const insertContactInArray = () => {
    arrayContacts.push(
        {
            name: inputName.value,
            phone: inputPhone.value
        })
    // console.log(arrayContacts);
    arrayContactsAux = arrayContacts;
}

const createContactsList = () => {
    contacstList.innerHTML = '';
    arrayContacts.forEach(contact => {
        contacstList.innerHTML +=
            `<li class="list__item">
            <span>${contact.name}</span>
            <span>${contact.phone}</span>
            <button class="btn__delete" onclick="removeContact('${contact.name}')">-</button>
</li>`
    })
}
const clearInputs = () => {
    inputName.value = '';
    inputPhone.value = '';
    arrayContactsAux = arrayContacts;
}

const removeContact = (contactName) => {
    arrayContacts = arrayContacts.filter(contact => contact.name !== contactName)
    createContactsList();
    alert('contato removido com suceso!');
    arrayContactsAux = arrayContacts;
}

const filterContacts = () => {

    arrayContacts.forEach(item => {
        if (inputFilterContacts.value.includes(item.name)) {

            arrayContacts = arrayContacts.filter(contact => contact.name == item.name)
            createContactsList();
        }
    })
    arrayContacts.forEach(item => {
        if (inputFilterContacts.value.includes(item.phone)) {

            arrayContacts = arrayContacts.filter(contact => contact.phone == item.phone)
            createContactsList();
        }
    })
    
    if (inputFilterContacts.value == '') {

            arrayContacts = arrayContactsAux;
            createContactsList();
        }

}

btnAddContact.addEventListener('click', verifyInputs);

inputFilterContacts.addEventListener('keyup', filterContacts);


