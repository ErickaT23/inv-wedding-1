document.querySelectorAll('.imagen-galeria').forEach(imagen => {
    imagen.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.style.cursor = 'pointer';

        const imgModal = document.createElement('img');
        imgModal.src = imagen.src;
        imgModal.style.maxWidth = '90%';
        imgModal.style.maxHeight = '90%';
        modal.appendChild(imgModal);

        // Crear el botón de cierre
        const cerrarBtn = document.createElement('div');
        cerrarBtn.innerText = 'X'; // Puedes usar un icono aquí
        cerrarBtn.style.position = 'absolute';
        cerrarBtn.style.top = '20px';
        cerrarBtn.style.right = '30px';
        cerrarBtn.style.fontSize = '30px';
        cerrarBtn.style.color = 'white';
        cerrarBtn.style.fontWeight = 'bold';
        cerrarBtn.style.cursor = 'pointer';

        // Función para cerrar el modal
        cerrarBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Previene que el click se propague al modal
            modal.remove();
        });

        modal.appendChild(cerrarBtn);

        // Cerrar modal al hacer clic fuera de la imagen
        modal.addEventListener('click', () => {
            modal.remove();
        });

        document.body.appendChild(modal);
    });
});

