import React from 'react'
import { Modal } from 'rsuite';
import { Button, ButtonToolbar,Grid,Row,Col,Input} from 'rsuite';
import { BsPlusSquare } from 'react-icons/bs'

const PropModal = () => {
    const [open, setOpen] = React.useState(false);
    const [overflow, setOverflow] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const CustomInput = ({ ...props }) => <Input {...props} style={styles} />;
    const styles = {
        marginBottom: 10
      };
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
                        <Modal.Title>Add Properties</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <Paragraph /> */}
                        <p>Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar.</p>
                        <Grid fluid>
                            <Row class="d-flex justify-content-around mt-5">
                            <Col xs={12} md={6}>
                                
                                <h4>Type</h4>
                                <h4>Name</h4>
                            
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                                
                                <CustomInput  class="grid-child" size="lg" placeholder="Character" />
                                <CustomInput  class="grid-child" size="lg" placeholder="Male" />
                                
                            </Col>
                            </Row>
                        </Grid>

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