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
    Inserire un form per aggiungere nuove tasks 



    */}

      <div className='container'>

        <div className='col-6 mx-auto'>

          <h2>To Do List</h2>

          <div className='card p-3'>

            <form>
              <div class="mb-3">
                <label for="task" class="form-label">New Task</label>
                <input
                  type="text"
                  class="form-control"
                  name="task"
                  id="task"
                  aria-describedby="taskHelper"
                  placeholder="Type your new task"
                />

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
  )
}

export default App
