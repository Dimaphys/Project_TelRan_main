import React from 'react';
import Modal from 'react-modal';
import s from "./style.module.css"

const ErrorModalPhone = ({ isOpen, onRequestClose, errorMessage }) => {
    const customStyles = {
        content: {
            height:"500px",
            width:"500px",
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: "linear-gradient(223deg, #393 0%, #006300 100%)",
        },
    }
      
  return (
    <Modal
      style={customStyles}
      className={s.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ошибка"
    >
      <h2>Ошибка</h2>
      <p>{errorMessage}</p>
      <button onClick={onRequestClose}>Закрыть</button>
    </Modal>
  );
};

export default ErrorModalPhone;