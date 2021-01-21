import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MyStyle.css'
import { useParams } from "react-router";

function TodoList() {
  const [userInput, setUserInput] = useState("");
    const [itemList, setItemList] = useState([]);
   
  const {id} = useParams
  const userInputRef = useRef(null);

  useEffect(() => {
    userRef();
  });

  const userRef = () => {
    userInputRef.current.focus();
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
   
  };

  const addItemList = () => {
      setItemList([...itemList, {item : userInput}]);
    console.log("item list", itemList);
    setUserInput("");
  }; 

  const handleDelete = (id) => {
    let deleteItem = itemList.filter((item) => item.id !== id)
    setItemList(deleteItem)
  }

    
  return (
    <div className="todo-container">
      <input className="todo-input"
        value={userInput}
        type="text"
        ref={userInputRef}
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button type="submit" onClick={addItemList}>
              add
      </button>

          <div className="todo-item">
              {
                  itemList.map((list) => {
                      return (
                          <div key={list.id} className="todo-list">
                              <p>{list.item}</p>
                              <span>
                                  <FontAwesomeIcon icon="edit" />
                              </span>
                              <span onClick={() => handleDelete(id)}>
                                  <FontAwesomeIcon icon="trash" />
                              </span>
                          </div>
                      )
                  })
              }
          </div>                 
    </div>
  );
}

export default TodoList;
