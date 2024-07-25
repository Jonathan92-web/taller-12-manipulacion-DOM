const inputTarea = document.getElementById("tarea");
const botonAgregar = document.getElementById("agregar");
const listaTareas = document.getElementById("lista-tareas");

botonAgregar.addEventListener("click", () => {
  const nuevaTarea = inputTarea.value;
  if (nuevaTarea !== "") {
    const elementoLi = document.createElement("li");
    elementoLi.textContent = nuevaTarea;
    listaTareas.appendChild(elementoLi);
    inputTarea.value = "";
  }
});
