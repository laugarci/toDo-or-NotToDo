// Obtener todos los cuadros de tareas
const tasks = document.querySelectorAll('.task');
// Agregar un evento de clic a cada cuadro de tarea
tasks.forEach(task => {
	task.addEventListener('click', () => {
		// Crear un cuadro de texto para editar la tarea
		const textBox = document.createElement('input');
		textBox.type = 'text';
		//Obtener el texto actual de la tarea
		const currentText = task.textContent;
		// Establecer el valor del cuadro de texto como el texto actual de la tarea
		textBox.value = currentText;
		// Reemplazar el contenido del cuadro de tarea con el cuadro de texto
		task.innerHTML = '';
		task.appendChild(textBox);
		// Enfocar el cuadro de texto
		textBox.focus();
		// Cuando el usuario presione Enter o haga clic fuera del cuadro de texto, guardar el texto editado en la tarea
		textBox.addEventListener('keydown', (event) => {
			if (event.key === 'Enter' || event.key === 'Escape') {
				task.innerHTML = textBox.value;
			}
		});
		textBox.addEventListener('blur', () => {
			task.innerHTML = textBox.value;
		});
	});
}); 
