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

  const [articoloCorrente, setArticoloCorrente] = useState(articoli)



  return (
    <>
      <div className='container'>
        <div className='col-6 mx-auto'>
          <div className='card'>
            <h3>Lista di articoli</h3>

            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <button className="btn btn-sm btn-danger">
                  <i className="bi bi-trash"></i>
                </button>

              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default App
