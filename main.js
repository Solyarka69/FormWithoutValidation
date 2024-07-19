
const inputs = [
    {id: 'input-firstName', pId: 'p-firstName', label: 'Имя'},
    {id: 'input-secondName', pId: 'p-secondName', label: 'Фамилия'},
    {id: 'input-fatherName', pId: 'p-fatherName', label: 'Отчество'},
    {id: 'input-phone', pId: 'p-phone', label: 'Телефон'},
    {id: 'input-dateBorn', pId: 'p-dateBorn', label: 'Дата рождения'},
    {id: 'input-mail', pId: 'p-mail', label: 'Почта'},
];

const sendButton = document.getElementById('send-btn');
const resetButton = document.getElementById('reset-btn');

sendButton.addEventListener('click', SendUserInfo);
resetButton.addEventListener('click', ResetUserInfo);

function SendUserInfo(){
    for (let i = 0; i < inputs.length; i++){
        const input = inputs[i];
        const inputValue = document.getElementById(input.id).value;
        const paragraph = document.getElementById(input.pId);
        paragraph.textContent = inputValue ? `${inputValue}` : 'Не указали';
    }
}

function ResetUserInfo(){
    for (let i = 0; i < inputs.length; i++){
        const input = inputs[i];
        document.getElementById(input.id).value = '';
        const paragraph = document.getElementById(input.pId);
        paragraph.textContent = '';
    }
}
