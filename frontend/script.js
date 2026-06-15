document.addEventListener('DOMContentLoaded', () => {

    const btnSaudacao = document.getElementById('btn-saudacao');
    
    btnSaudacao.addEventListener('click', () => {
        alert('esse é um alerta pra você! Bem-vindo à nossa página hospedada na máquina 01.');
    });


    const btnTema = document.getElementById('btn-tema');
    
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            btnTema.textContent = 'Desativar Modo Escuro';
            btnTema.style.backgroundColor = '#e74c3c'; 
        } else {
            btnTema.textContent = 'Ativar Modo Escuro';
            btnTema.style.backgroundColor = '#27ae60';
        }
    });

});