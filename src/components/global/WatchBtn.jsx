import { useState } from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import classes from "./WatchBtn.module.css"
import Modal from 'react-bootstrap/Modal';


const WatchBtn = () => {

      const [show, setShow] = useState(false);


    return(
        <>
        <a onClick={() => setShow(true)}>
            <button className={classes.btn}>
            <FaRegCirclePlay />
            Watch Video
            </button>
        </a>

        <Modal
        show={show}
        onHide={() => setShow(false)}
        // dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className='widthModal'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="350px" src="https://www.youtube.com/embed/Y7f98aduVJ8?si=3oPH13MLo78aV9hV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

        </>
    )
}

export default WatchBtn