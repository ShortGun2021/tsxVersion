import React from "react";
import { HiShare } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import Dropzone from 'react-dropzone';
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  ButtonGroup,
  Button,
} from "reactstrap";

const ProfileTop = () => {
  return (
    <>
      <div>
        <Card style={{ position: "relative" }}>
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
      // <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
          <CardImg
            alt="Card image cap"
            src="https://images.unsplash.com/photo-1585314062604-1a357de8b000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
            top
            width="100%"
            height="300px"
          />
          </div>
    // {/* </section> */}
  )}
</Dropzone>
          <CardBody
            className="text-center"
            style={{ position: "absolute", top: "220px", left: "660px" }}
          >
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
      // <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
            <img
              src="https://avatars.githubusercontent.com/u/55938092?v=4"
              alt="profileImage"
              style={{
                borderRadius: "100px",
                height: "120px",
                width: "110px",
                border: "2px solid gold",
              }}
            />
               </div>
    // </section>
  )}
</Dropzone>
            <CardTitle tag="h2">Triyambaka Mishra</CardTitle>
            <CardText tag="h5">ID: 1929062</CardText>
            <CardText tag="h6" className="text-muted">
              Joined April 2022
            </CardText>
          </CardBody>
        </Card>
      </div>
      <div>
      <ButtonGroup style={{paddingTop:"20px", float:"right", marginRight:"30px"}}>
                <Button color="light" href="#" ><h3><HiShare/></h3></Button>
                <Button color="light" href="#"><h3><AiFillSetting/></h3></Button>
              </ButtonGroup>
      </div>
    </>
  );
};

export default ProfileTop;
