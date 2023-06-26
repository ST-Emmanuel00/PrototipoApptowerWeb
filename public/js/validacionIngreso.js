window.addEventListener('DOMContentLoaded',()=>{
    const fechaInput = document.getElementById('fechaI');
    const fechaActual = new Date().toISOString().split('T')[0];
    fechaInput.value = fechaActual;
})