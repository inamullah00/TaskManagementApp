import { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Modelmap from "./Modelmap";

const Todo = () => {
  const [Item, setItem] = useState("");
  const [noteItem, setNoteItem] = useState(["Wellcome "]);
  const [message, setMessage] = useState("");

  const add = () => {
    let inputData = Item;
    if (inputData && inputData !== "") {
      setNoteItem([...noteItem, Item]);
      setItem("");
      setMessage("");
    } else {
      setMessage("Sorry , ADD ITEM MUST");
    }
  };
  const deleteItem = (e) => {
    let item = e.target.value;
    let record = noteItem.filter((data) => {
      return data !== item;
    });
    setNoteItem(record);
  };

  const editItem = (e) => {
    setItem(e.target.value);
  };
  const saveItem = (e) => {
    let index = e.target.value;
    if (Item === "") {
      return;
    } else {
      for (let i = 0; i < noteItem.length; i++) {
        noteItem[index] = Item;
      }
      setNoteItem([...noteItem]);
      setItem("");
    }
  };

  return (
    <>
      <div className="container-fluid" style={{ paddingTop: "50px" }}>
        <div className="row">
          <div className="col-md-6">
            <img id="logo" src="/Images/TaskLogo.jpg" alt="Logo" />
          </div>

          <div className="col-md-6">
            <div className="TodoApp">
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Add Item"
                  value={Item}
                  onChange={(e) => {
                    setItem(e.target.value);
                  }}
                />
                <Buttons type={"submit"} func={add} text={"Add Item"} />
              </div>
              <span>{message}</span>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="model-div">
          {noteItem.map((item, index) => {
            return (
              <>
                <Modelmap
                  item={item}
                  index={index}
                  editItem={editItem}
                  deleteItem={deleteItem}
                  saveItem={saveItem}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Todo;
