import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import modalogo from "C:/Users/guall/OneDrive/Escritorio/lr/src/assets/img/modalimg.png";

export const VentanaModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <div id="Ventanamodal">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static" //sirve para que no se pueda cerrar con clic afuera del modal
          keyboard={true}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Header className="modal-header">
            <a
              target="_blank"
              rel="noreferrer"
              type="button"
              className="modal-button"
              href="https://justiexpress.web.app/register"
              onClick={handleClose}
            >
              Clic Aquí
            </a>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Para crear y descargar tus documentos</p>
            <div className="container-fluid"></div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://justiexpress.web.app/register"
            >
              <img
                src={modalogo}
                className="img-fluid"
                alt="ModalImg"
                onClick={handleClose}
              />
            </a>
          </Modal.Body>
          <div>
            <Button className="closeButton" onClick={handleClose}>
              Cerrar
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
};
