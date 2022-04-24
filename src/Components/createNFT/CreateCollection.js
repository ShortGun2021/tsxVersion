import React from 'react'
import { Dropdown, DropdownToggle, Button, Table } from 'reactstrap'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrStar } from 'react-icons/gr'
import { IoIosStats, IoMdAdd } from 'react-icons/io'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiLockOpenAlt } from 'react-icons/bi'
import { BsExclamationTriangleFill, BsPlusSquare } from 'react-icons/bs'
import ToggleSwitch from './ToggleSwitch'
import { Form, FormText, FormGroup, Label, Input } from 'reactstrap'
import Solana from '../../Assets/icon/solana2.svg'
import { Modal } from 'rsuite';

const CreateCollection = () => {
    return (
        <>
            <div>
                <h4>Collection</h4>
                <p>This is the collection where your item will appear. <AiOutlineInfoCircle /></p>

                <div className="d-flex">
                    <Dropdown toggle={function noRefCheck() { }}>
                        <DropdownToggle caret>
                            Select Collection
                        </DropdownToggle>
                    </Dropdown>
                </div>
            </div>
            <div>
                <Table style={{alignContent:"center"}}>
                    {/* alignContent:"center" not working */}
                    <tbody>
                        <tr>
                            <td>
                                <h4><GiHamburgerMenu /></h4>
                            </td>
                            <td>
                                <h4>Properties</h4>
                                <p>Textual traits that show up as rectangles</p>
                            </td>
                            <td>
                                <Button
                                    color='white'
                                    // onClick={}
                                >
                                    <h1><BsPlusSquare size={"1.5em"} /></h1>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4><GrStar /></h4>
                            </td>
                            <td>
                                <h4>Levels</h4>
                                <p>Numerical traits that show as a progress bar</p>
                            </td>
                            <td>
                                <Button
                                    color='white'
                                    // onClick={}
                                >
                                    <h1><BsPlusSquare size={"1.5em"} /></h1>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4><IoIosStats /></h4>
                            </td>
                            <td>
                                <h4>Stats</h4>
                                <p>Numerical traits that just show as numbers</p>
                            </td>
                            <td>
                                <Button color='white'>
                                    <h1><BsPlusSquare size={"1.5em"} /></h1>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4><BiLockOpenAlt /></h4>
                            </td>
                            <td>
                                <h4>Unlockable Content</h4>
                                <p>Include unlockable content that can only be revealed by the owner of the item.</p>
                            </td>
                            <td>
                                <ToggleSwitch />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4><BsExclamationTriangleFill /></h4>
                            </td>
                            <td>
                                <h4>Explicit & Sensitive Content</h4>
                                <p>Set this item as explicit and sensitive content <AiOutlineInfoCircle /></p>
                            </td>
                            <td>
                                <ToggleSwitch />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <h3>Supply</h3>
                <p>The number of items that can be minted. No gas cost to you! <AiOutlineInfoCircle /> </p>
                <Form>
                    <FormGroup>
                        <Input
                            placeholder="1"
                            type="text"
                            readOnly='readOnly'

                        />
                    </FormGroup>
                </Form>

                <h3>Blockchain</h3>
                <div className='row'>
                    <div className='col-1'>
                        <img src={Solana} style={{ height: "40px", width: "80px", marginRight: "10px" }} className="rounded float-left" alt="logo" />
                    </div>
                    <div className='col-11'>
                        <Input
                            placeholder='Solana'
                            contentEditable='false'
                            readOnly='readOnly'
                        />
                    </div>
                </div>



                <h3>Freeze metadata <AiOutlineInfoCircle /></h3>
                <p>Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.
                </p>
                <div>
                    <p>To freeze your metadata, you must create your item first.</p>
                </div>
                <hr />

                <Button
                    color='primary'
                    size='50px'
                >
                    <h2>Create</h2>
                </Button>
            </div>
        </>
    )
}

export default CreateCollection