export default function Test() {

    const [newTask, setNewTask] = useState("")

    function gestisciCambiamento(e) {
        console.log(e);
        setNewTask(e.target.value)
    }

    function gestisciSubmit(e) {
        e.preventDefault();
        console.log(e);
    }

    const addTask = e => {
        e.preventDefault();
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
    }


    return (

        <>

            {/*  
            Inserire un titolo e un input
            Inserire una variabile di stato
            Ad input si associa il valore newTask (cosi si collega la variabile di stato ad input)
            Ad input si associa onChange con funzione setNewTask (cosi da collegare input alla variabile di stato e renderlo quindi un controlled element)
            Si può creare una funzione apposita "gestisciCambiamento" e invocarla dove necessario
            Inseriamo un form
            inseriamo la proprietà onSubmit ed associamo una funzione per prevenire l'invio del form
            inseriamo un paragrafo dove mostrare newTask create tramite input
            inseriamo un bottone con proprietà submit
            
            */}

            <h1>Tentativo di form: questo è un tentativo</h1>

            <form onSubmit={gestisciSubmit}>
                <input type="text" value={newTask} onChange={gestisciCambiamento} />
                <button type="submit">Invia!</button>
            </form>

            <p>{newTask}</p>

        </>
    );
}