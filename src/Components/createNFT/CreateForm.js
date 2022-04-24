import React from "react";
import { Form, FormText, FormGroup, Label, Input } from "reactstrap";

const CreateForm = () => {
    return (
        <>
            <div style={{alignContent:"left"}}>
                {/* Form starts here */}
                <Form inline>
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                        <Label className="me-sm-2" for="name">
                            <h4>Name</h4>
                        </Label>
                        <Input
                            id="name"
                            name="email"
                            placeholder="Item Name"
                            type="email"
                            required="required"
                        />
                    </FormGroup>
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                        <Label className="me-sm-2" for="link">
                            <h4>External link</h4>
                            <p>
                                OpenSea will include a link to this URL on this item's detail
                                page, so that users can click to learn more about it. You are
                                welcome to link to your own webpage with more details.
                            </p>
                        </Label>

                        <Input
                            id="link"
                            name="password"
                            placeholder="https://www.youtube.com/"
                            type="link"
                            style={{width:"100%"}}
                        />
                    </FormGroup>
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                        <Label className="me-sm-2" for="text">
                            <h4>Description</h4>
                            <p>
                                The description will be included on the item's detail page
                                underneath its image. Markdown syntax is supported.
                            </p>
                        </Label>
                        <Input
                            id="text"
                            name="desription"
                            placeholder="Provide your Decreption here"
                            type="textarea"
                            style={{width:"100%",marginBottom:"10px"}}
                        />
                    </FormGroup>
                </Form>
            </div>
        </>
    );
};

export default CreateForm;
