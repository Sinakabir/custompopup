import React, { useState } from "react";
import Modal from "./Modal";
import './Modal.css'
const Modaltest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false)
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>open Modal Popup</button>
      {
        showModalPopup && <Modal 
        id={"custom-id"}
        header={<h1>Customized Header</h1>}
        footer={<h1>Customized footer</h1>}
        onClose={onClose}
        body={<div>Customized body</div>}/>
      }
    </div>
  );
};

export default Modaltest;
