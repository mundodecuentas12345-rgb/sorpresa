const fullText = `No existen palabras suficientes para describir lo que siento por ti.

Desde que llegaste a mi vida, todo tiene más color, más sentido, más magia.

Tu mirada me da paz, tu voz me da fuerza y tu sonrisa me da esperanza.

Eres el sueño que nunca quiero despertar, el abrazo que siempre busco y el amor que siempre esperé.

Gracias por ser mi refugio, mi alegría y mi razón de ser.

Te amo con cada parte de mi alma, y cada día que pasa, mi amor por ti solo crece. Eres infinito.`;

const typingTextElement = document.getElementById('typing-text');
// Selecciona el nuevo contenedor del GIF
const gifContainerElement = document.getElementById('gif-container'); 
let index = 0;

// Oculta el contenedor del GIF al cargar la página
gifContainerElement.classList.add('hidden-element');

function typeWriter() {
    if (index < fullText.length) {
        const char = fullText.charAt(index);
        
        if (char === '\n') {
            typingTextElement.innerHTML += '<br><br>';
        } else {
            typingTextElement.textContent += char;
        }
        
        index++;
        generateHeart(); 
        setTimeout(typeWriter, 40); 
    } else {
        typingTextElement.innerHTML += '<span class="cursor"></span>';

        // Muestra el contenedor del GIF al terminar de escribir
        setTimeout(() => {
            gifContainerElement.classList.remove('hidden-element');
        }, 500); 
    }
}

function generateHeart() {
    if (Math.random() > 0.85) { 
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️'; 
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's'; 
        
        document.body.appendChild(heart);
        
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Inicia el efecto de escritura cuando la página carga
typeWriter();
