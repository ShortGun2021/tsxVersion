import React from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Modal, ButtonToolbar, Button } from "rsuite";
import {FiLogOut, FiRefreshCcw} from 'react-icons/fi';

const WalletModal = () => {
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
            style={{ backgroundColor: "#007BFF", color: "white" }}
          >
            <h2>
              <MdOutlineAccountBalanceWallet />
            </h2>
          </Button>
          {/* <Button onClick={handleOpen}> Open</Button> */}
        </ButtonToolbar>

        <Modal overflow={overflow} open={open} onClose={handleClose}>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* body begins */}
            <div>
              <div className="dropdown show">
              <img src="https://avatars.githubusercontent.com/u/55938092?v=4" alt="prof" style={{height:"30px", width:"30px", borderRadius:"10px"}}/>
                <a
                  className="btn btn-light dropdown-toggle"
                  href="#a"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{backgroundColor:"white", textDecoration:"none", color:"black"}}
                >
                  My Wallet
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="#a">
                    <img src="https://phantom.app/img/phantom-logo.svg" alt="Phantom" /> Phantom
                  </a>
                  <a className="dropdown-item" href="#a">
                    <div className="row">
                      <div className="col-1"><h5><FiLogOut/></h5></div>
                      <div className="col-1">Log Out</div>
                     </div>
                  </a>
                  <a className="dropdown-item" href="#a">
                  <div className="row">
                      <div className="col-1"><h5><FiRefreshCcw/></h5></div>
                      <div className="col-1">Refresh Funds</div>
                     </div>
                  </a>
                </div>
              </div>
              {/* card starts */}
              <div className="card text-center mt-3">
  <div className="card-body">
    <h5 className="card-title">Total balance</h5>
    <h6 className="card-text">$0.00 USD</h6>
    <a href="#a" className="btn btn-primary mt-2">Add Funds</a>
  </div>
</div>
            {/* card ends */}
            </div>
            {/* body ends */}
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
  );
};

export default WalletModal;