document.addEventListener('DOMContentLoaded', function() {
    function typeWrite(elemento) {
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
      });
    }
    
    const titulo = document.querySelector('h1');
    if (titulo) {
      typeWrite(titulo);
    } else {
      console.error('Elemento h1 não encontrado');
    }
  });

