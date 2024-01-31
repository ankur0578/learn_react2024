import React, { useEffect, useState } from 'react';

const ListBody = () => {
    const [todoItem , setTodoItems] = useState([])
    const [item, setItem] = useState("")

    const handleOnChange = (e) => {
      setItem(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(item.trim() != ""){
            setTodoItems([...todoItem, item]);
        }
        setItem("")
        console.log(e)
    }
   
    return (
        <div className='listBody'>
           <form onSubmit={handleSubmit}>
            <input type="text" name="item" id="item" value={item} onChange={handleOnChange}/>
            <button type='submit'>+</button>
           </form>
            {
            todoItem.map((item, index) =>(
                <div key={index}>
                    <h3>{item}</h3>
                </div>
            ))
          }
          <div>
            <button>Clear</button>
        </div>
        </div>
    );
}

export default ListBody;
