import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selected} 
        ariaHideApp={false}
        onRequestClose={props.onClose}
        contentLabel={'Selected Option'}
        closeTimeoutMS={200}
        className="modal">
        <h3>Selected Option</h3>
        <p>{props.selected}</p>
        <button className="button" onClick={props.onClose}>Close</button>
    </Modal>
);

export default OptionModal;