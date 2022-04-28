import React from 'react'
import { Modal } from 'rsuite';
import { Button, ButtonToolbar} from 'rsuite';
import { BsPlusSquare } from 'react-icons/bs'

const PropModal = () => {
    const [open, setOpen] = React.useState(false);
    const [overflow, setOverflow] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="modal-container">
            <ButtonToolbar>
          <Button
            onClick={handleOpen}
            style={{backgroundColor:"white"}}
          >
            <h1><BsPlusSquare size={"1.5em"}/></h1>
          </Button>
        </ButtonToolbar>

                <Modal overflow={overflow} open={open} onClose={handleClose} style={{marginTop:"10%"}}>
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <Paragraph /> */}
                        <p>This is kaustav</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose} appearance="primary">
                            Ok
                        </Button>
                        <Button onClick={handleClose} appearance="subtle">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default PropModal