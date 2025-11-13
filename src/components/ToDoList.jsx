import { useState } from 'react'

export default function ToDoList() {

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
    const [error, setError] = useState(null)

    function handleChange(e) {
        setNewTask(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (newTask.length > 2) {
            setError(null)
            const nuovaArrayDiTasks = [newTask, ...tasks]
            setTasks(nuovaArrayDiTasks)
            setNewTask('')
            console.log(newTask);
        } else {
            setError('Amico devi inserire almeno due lettere')
        }
    }

    function handleTrash(index) {
        console.log(index);
        const filteredTasks = tasks.filter((task, taskIndex) => taskIndex != index)
        console.log(filteredTasks);
        setTasks(filteredTasks)
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
    Creare la funzione per prevenire il comportamento del form
    Alla funzione sopra si aggiunge una condizione "if" affinche se newTask (che è il value di input) è maggiore di 2, 
          allora si crea una nuova array (const nomeArray =[]) per clonare la vecchia array tasks ed aggiungere il nuovo elemento(newTask); fatto ciò si può passare questa nuova array al setTasks che aggiornerà il valore corrente tasks.
    Aggiungere la proprietà onclick sui bottoni per rimuovere dalla lista !!!!!!!!!!!!!!
    Creare una funzione per rimuovere gli elementi dalla lista con filter
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
                            {error && <small>{error}</small>}


                        </form>

                        <ul className="list-group">
                            {
                                tasks.map((task, index) => (
                                    <li className="list-group-item d-flex justify-content-between align-items-center" key={`${task.replace(' ', '-').toLowerCase()}-${index}`}>
                                        {task}
                                        <button className="btn btn-sm btn-danger" onClick={() => handleTrash(index)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </li>
                                ))
                            }





                        </ul>
                    </div>
                </div>
            </div>




        </>
    );
}

