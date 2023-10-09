import React from "react";
import Buttons from "./Buttons";

const Modelmap = ({ item, index, editItem, deleteItem, saveItem }) => {
  return (
    <>
      <div className="model">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Notice</h5>

              <Buttons
                type={"button"}
                value={item}
                func={deleteItem}
                text={"Delete"}
              />
            </div>
            <div className="modal-body">
              <p>{item}</p>
            </div>
            <div className="modal-footer">
              <Buttons
                type={"button"}
                value={item}
                func={editItem}
                text={"Edit"}
              />
              <Buttons
                type={"button"}
                value={index}
                func={saveItem}
                text={"Save"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modelmap;
