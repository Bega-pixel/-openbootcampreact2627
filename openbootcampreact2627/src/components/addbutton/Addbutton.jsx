import React from 'react'


const Addbutton = ({cards, handleSubmit}) => {
  
  return (
    <div>
        <button
                onClick={handleSubmit}
                type="submit"
                value={cards} 
                className="btn btn-outline-info m-3">
            Add Task
            </button>
    </div>
  )
}

export default Addbutton
