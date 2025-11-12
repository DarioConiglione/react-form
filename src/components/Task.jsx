export default function Task({ task }) {


    return (

        <li className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button className="btn btn-sm bg-danger">
                <i className="bi bi-trash"></i>
            </button>
        </li>

    );
}