import { useState } from 'react'
import Task from './components/Task'

function App() {

  const ToDOList =
    [
      "Impare bene javascript",
      "Studiare gli argomenti",
      "Esercitarsi sugli argomenti",
      "Prendere seriamente il corso",
      "Provare a divertirsi",
      "Non abbattersi"
    ]

  const [tasks, setTasks] = useState(ToDOList)
  const [newTask, setNewTask] = useState('')

  function handleChange(e) {
    setNewTask(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>

      {/* 
    Inserire un titolo
    Creare una array di stringhe
    Importare da bootstrap un tamplate di lista con <bs-5
    Creare un container
    Creare una colonna dentro il container
    Inserire la lista dentro una card
    Serve una variabile di stato dove conservare la lista iniziale (toDoList)
    Ciclare il list item dentro ul tramite .map, inserendo tutto il tag <li>...</li>
    Occorre una key nei campi li
    Rendiamo componente la singola task li e passiamo dei props !!!!!!!!!!!!!
    Inserire un form per aggiungere nuove tasks tramite input group con bottone
    Aggiungere un value a input per lagarlo da una variabile di stato 
    Creare quindi una variabile di stato - const [newTask, setNewTask] = useState('')
    Impostare il value = {newTask}
    Rendere l'elemento controllabile con onChange ed una funzione al suo interno.
    Creare la funzione per aggiornare la variabile di stato setNewTask




    */}

      <div className='container'>

        <div className='col-6 mx-auto'>

          <h2>To Do List</h2>

          <div className='card p-3'>

            <form onSubmit={handleSubmit}>

              <div className="input-group mb-3">
                <input
                  onChange={handleChange}
                  value={newTask}
                  type="text"
                  className="form-control"
                  placeholder="new-task"
                  aria-label="new-task"
                  aria-describedby="add-task" />
                <button className="btn btn-outline-secondary" type="submit" id="add-task">Add task</button>
              </div>


            </form>

            <ul className="list-group">
              {
                tasks.map((task, index) => (
                  <Task task={task} key={`${task.replace(' ', '-').toLowerCase()}-${index}`} />
                ))
              }





            </ul>
          </div>
        </div>
      </div>




    </>
  );
}

export default App
