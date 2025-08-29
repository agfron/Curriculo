const frases = [
  "Desenvolvedor Frontend",
  "Foco em React e JavaScript",
  "Em busca de oportunidades de trabalho Frontend ou Full Stack",
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById("typing-text");
   
  function type() {
    const current = frases[index];
    const visibleText = current.substring(0, charIndex);
  
    el.textContent = visibleText;
  
    if (!isDeleting) {
      if (charIndex < current.length) {
        charIndex++;
        setTimeout(type, 100);
      } else {
        isDeleting = true;
        setTimeout(type, 1500); // espera antes de apagar
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = false;
        index = (index + 1) % frases.length;
        setTimeout(type, 300); // pequena pausa antes de começar a nova
      }
    }
  }
  
  type();
  