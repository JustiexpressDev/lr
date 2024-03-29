import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import WhatsappButton from "../WhatsappButton";

export const VentanaModal2 = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} onClick={handleClose}>
        <Modal.Header>
          <Modal.Title>
            Nunca había sido tan fácil crear documentos legales
          </Modal.Title>
        </Modal.Header>
        <div className="row">
          <div className="col-sm-6 ">
            <Modal.Body>
              <WhatsappButton />
            </Modal.Body>
          </div>
          <div className="col-sm-6 ">
            <Modal.Body>
              <a
                target="_blank"
                rel="noreferrer"
                type="button"
                className="modal-button"
                href="https://justiexpress.web.app/register"
                onClick={handleClose}
              >
                Genera aquí tu documento en nuestra aplicación
              </a>
            </Modal.Body>
          </div>
        </div>
        <Modal.Footer>
          <Button className="closeButton" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
