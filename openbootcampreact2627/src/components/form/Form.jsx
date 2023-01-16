import "./form.css";
import { useReducer, useRef } from "react";

const Forms = () => {

  const inputRef = useRef();
  const serchInput = useRef()

  const [tasks, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "add_task": {
        return [...state, { id: state.length, title: action.title }];
      }
      case "remove_task": {
        return state.filter((task, index) => index !== action.index);
      }
      case "filter_task": {
        return [ state.filter( (action) => {
            if(serchInput === action.title){
              
              return (<div className="searchlist-box">   
              {handleSerch && tasks &&
              tasks.map((task, index) => (
                <div className="task card-body card-container mb-3" key={index}>
                  <br />
                  <p className="card-text text-content  mb-3">{task.title}</p>
                  <button className="btn btn-outline-danger mb-3" onClick={() => dispatch({ type: "remove_task", index })}>
                    Borrar
                  </button>
                </div>
              ))}
              </div>);
            }
          } )];
      }
      default: {
        return state;
      }
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "add_task",
      title: inputRef.current.value,
    });
  };

  const handleSerch = (event) => {
    event.preventDefault();
    dispatch({
      type : 'filter_task',
      title: serchInput.current.value,
    })
  }

  return (
    <div className="">
      <h1 className="tittle-form">Lista de tareas</h1>
      <form onSubmit={handleSubmit} className=' container form-container'>
        <label className="form-label mb-3">Tarea</label>
        <input type="text" name="title" ref={inputRef} className='form-control mb-3'/>
        <input type="submit" value="Enviar" className="btn btn-outline-info"/>
      </form>
      <div className="tasks cards-container">

        <div className="form-search" onSubmit={handleSerch}>
          <input type="text" placeholder="Search..." ref={serchInput} className=' mb-3'/>
          <button  className="btn btn-outline-success mb-3" onClick={(type, index)=> dispatch({type:'filter_task', index: index })} >Search</button>
        </div>

      <div className="list-cards">
      <div className="tasklist-box ">
        {tasks &&
          tasks.map((task, index) => (
            <div className="task card-body card-container mb-3" key={index}>
              <br />
              <p className="card-text text-content  mb-3">{task.title}</p>
              <button className="btn btn-outline-danger mb-3" onClick={() => dispatch({ type: "remove_task", index })}>
                Borrar
              </button>
            </div>
          ))}
          </div>

        </div> 

      </div>
    </div>
  );
};

export default Forms;
