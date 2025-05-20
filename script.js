document.addEventListener('DOMContentLoaded', () => {
  // Reemplaza 'YOUR_PUBLIC_KEY' con tu Public Key de EmailJS
  emailjs.init('YOUR_PUBLIC_KEY');

  const audio = document.getElementById('background-music');
  const audioControl = document.getElementById('audio-control');
  audio.volume = 0.3;

  // Manejo de botón de música
  if (audioControl) {
    audioControl.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        audioControl.textContent = 'Pausar Música';
      } else {
        audio.pause();
        audioControl.textContent = 'Reanudar Música';
      }
    });
  }
});

function handleResponse(opcion) {
  const invitationCard = document.getElementById('invitation-card');
  const yesCard = document.getElementById('yes-card');
  const noCard = document.getElementById('no-card');

  invitationCard.classList.add('hidden');

  if (opcion === 'Sí') {
    yesCard.classList.remove('hidden');
    yesCard.classList.add('fade-in');
  } else {
    noCard.classList.remove('hidden');
    noCard.classList.add('fade-in');
  }

  // Enviar correo con EmailJS
  emailjs.send(
    'service_imn0b36', // Reemplaza con tu Service ID
    'template_f8jnvpb', // Reemplaza con tu Template ID
    { opcion: opcion }
  ).then(
    () => console.log('Correo enviado con éxito'),
    (error) => console.error('Error al enviar correo:', error)
  );
}
