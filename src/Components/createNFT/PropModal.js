import React from 'react'
import { Modal } from 'rsuite';
import { Button, ButtonToolbar} from 'rsuite';

const PropModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="modal-container">
                <ButtonToolbar>
                    <Button onClick={handleOpen}> Open</Button>
                </ButtonToolbar>

                <Modal open={open} onClose={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <Paragraph /> */}
                        <p>Fuck you kaustav</p>
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