import { useState } from 'react'
import ToDoList from './components/ToDoList'

function App() {

  const articoli = [
    { id: 1, titolo: "Come migliorare la produttività quotidiana" },
    { id: 2, titolo: "Le tendenze tecnologiche del 2025" },
    { id: 3, titolo: "Guida completa alla sicurezza online" },
    { id: 4, titolo: "10 strategie per gestire lo stress" },
    { id: 5, titolo: "L’impatto dell’intelligenza artificiale sul lavoro" },
    { id: 6, titolo: "Come creare un portfolio digitale efficace" },
    { id: 7, titolo: "Sostenibilità e innovazione: il futuro delle imprese" },
    { id: 8, titolo: "I migliori strumenti per il lavoro da remoto" },
    { id: 9, titolo: "Come scrivere articoli SEO-friendly" },
    { id: 10, titolo: "Le abitudini dei leader di successo" }
  ];

  const [listaArticoli, setListaArticoli] = useState(articoli)
  const [nuovoArticolo, setNuovoArticolo] = useState([])

  function handleChange(e) {
    setNuovoArticolo(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nuovoArticolo.length > 10) {
      const nuovoTitolo = [...listaArticoli, { id: index++, title: nuovoArticolo }]
      setNuovoArticolo(nuovoTitolo)
      setArticoloCorrente(articoli)
    }


  }



  return (
    <>
      {/* Creazione layout */}
      <div className='container'>
        <div className='col-6 mx-auto'>
          <div className='card'>

            {/* inserimento form e importazione input group da bootstrap */}

            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  onChange={handleChange}
                  value={nuovoArticolo}
                  type="text"
                  className="form-control"
                  placeholder="new-article"
                  aria-label="new-article"
                  aria-describedby="add-article" />
                <button className="btn btn-outline-secondary" type="submit" id="add-article">Add task</button>
              </div>
            </form>




            <h3>Lista di articoli</h3>

            <ul className="list-group">

              {/* stampare lista in DOM */}

              {
                articoli.map((articolo) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {articolo.titolo}
                    <button className="btn btn-sm btn-danger">
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

export default App
