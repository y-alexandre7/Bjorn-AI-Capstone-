
document.getElementById('registerLink').addEventListener('click', ()=>{

    document.getElementById('displayWrapper').classList.add('toRegister');
});

document.getElementById('logInLink').addEventListener('click', ()=>{
    document.getElementById('displayWrapper').classList.remove('toRegister');
});