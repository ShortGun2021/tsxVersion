import React from 'react'
import { GoKebabHorizontal } from 'react-icons/go';
import { AiOutlineHeart } from 'react-icons/ai';
import {
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardText,
    ButtonGroup,
    Button,
  } from "reactstrap";
const Cards = (props) => {
    return (
        <>
            <div className="card p-12" style={{ width: "26rem" }}>
                {/* <img className="card-img-top" src={props.nftSrc} alt="CardImageCap" /> */}
                <div style={{ display: "flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                <div className="card-body">
                    {/* <h4 className="card-title text-center">{props.nftName}</h4>
                    <h6 className="card-text text-center">Coder-Programmer-Developer Most important of all "A LEARNER"</h6>
                    <div style={{ display: "flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                        <a href="/"><h3><GoKebabHorizontal /></h3></a>
                        <a href="/"><h3><AiOutlineHeart /></h3></a>
                    </div> */}
                    <div>
                    <Card style={{ position: "relative" }}>
                      <div>
                      <CardImg
                        src="https://lh3.googleusercontent.com/76Ew5Jv50vTGEMRDdvWRp7RTDeUPboOanHWwnQ0Gck-mYOZXwolZ3fatpnTfR-73FFErAbLC-n8tFl4j0TO6UcCXVKVZcCOBarOX=h200"
                        alt="Card image cap"
                        top
                        width="10%"
                        height="150px"
                      />
                      </div>
                      <CardBody
                        className="text-center"
                        style={{ position: "relative"}}
                      >
                        <div>
                        <img
                          src="https://avatars.githubusercontent.com/u/55938092?v=4"
                          alt="profileImage"
                          style={{
                            marginTop: "5px",
                            borderRadius: "100px",
                            height: "50px",
                            width: "50px",
                            border: "2px solid gold",
                          }}
                          />
                        </div>
                        
                        <CardTitle style={{fontSize:'16px'}}tag="h2">Triyambaka Mishra</CardTitle>
                        <CardText tag="h5"style={{color:'Blue'}}> By: Elon Musk</CardText>
                        <CardText tag="h6" className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Lorem ipsum dolor sit amet, consectetur.
                        </CardText>
                      </CardBody>
                    </Card>
                    </div>
                  </div>

                </div>
            </div>
        </>
  )
}

export default Cards