import React from "react";
import '../../Assets/css/NftPage.css'
// import {styles} from 'bootstrap'
import { Panel, Button, ButtonGroup, IconButton, Input, styles } from "rsuite";
import { GoKebabHorizontal } from "react-icons/go";
import { BsFillInfoCircleFill } from "react-icons/bs";
import NftPagecard from "./NftPagecard";
import {
  UncontrolledCollapse,
  Collapse,
  Card,
  CardSubtitle,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { BsFillShareFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { SiBlockchaindotcom } from "react-icons/si";
import { MdRefresh } from "react-icons/md";
const NftPage = () => {
  return (
    <>
      <div style={{ marginRight: "15%", marginLeft: "15%", marginTop: "5%" }}>
        <div className="row">
        <div className="left">
          <section>
            <Card>
              <CardBody>
                <CardTitle style={{ alignItem: "left" }}>
                  <Button style={{ alignItems: "left" }}>
                    <IconButton
                      icon={<SiBlockchaindotcom />}
                      circle
                      size="md"
                    />
                  </Button>

                  <Button>
                    <IconButton icon={<AiOutlineHeart />} circle size="md" />
                  </Button>
                </CardTitle>
              </CardBody>
              <CardImg
                alt="Card image cap"
                bottom
                src="https://lh3.googleusercontent.com/KhHIVlusXfzP1Ns65IsT6hpngYMLJzHQWj1BbvPHsxToWLWsmzrgQXB95flYTuve8xynAQW2X69YKsUKXEns30YOfGu9DcbR-XL_nH0=w600"
                width="100%"
              />
            </Card>
          </section>

          <section>
            <div>
              <Panel header="Panel title">
                Created by resibhaskoro A non binary textile designer from
                Osaka, Japan. They're obsessed with mix-matching patterns --
                4000 x 4000 px (300dpi) Hand Drawn in Procreate
              </Panel>
            </div>
          </section>

          <section>
            <Button
              color="primary"
              id="toggler1"
              style={{
                width: "100%",
                height: "50px",
                textAlign: "left",
                marginBottom: "1rem",
              }}
            >
              About MISS THING
            </Button>
            <UncontrolledCollapse toggler="#toggler1">
              <Card>
                <CardBody>
                  A human being, an alien, a monster, a ghost, they are any
                  creature you can think of 💎✨ Hand drawn non generative 1/1
                  collectibles by Resibhaskoro. Inspired by women, fashion,
                  queer culture and drag artistry 🌈💫
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            <br />
            <Button
              color="primary"
              id="toggler2"
              style={{
                width: "100%",
                height: "50px",
                textAlign: "left",
                marginBottom: "1rem",
              }}
            >
              DETAILS
            </Button>
            <UncontrolledCollapse toggler="#toggler2">
              <Card>
                <CardBody>
                  consequuntur earum odio officiis natus, amet hic, iste sed
                  dignissimos esse fuga! Minus, alias.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </section>
        </div>

        <div className="right">
          <section>
            <div style={{ float: "right" }}>
              <ButtonGroup size="lg" style={{ textAlign: "right" }}>
                <Button>
                  <IconButton icon={<MdRefresh />} circle size="lg" />
                </Button>

                <Button>
                  <IconButton icon={<BsFillShareFill />} circle size="lg" />
                </Button>

                <Button>
                  <IconButton icon={<BsThreeDotsVertical />} circle size="lg" />
                </Button>
              </ButtonGroup>
            </div>
            <h5 style={{ textAlign: "left" }}>Miss Thing</h5>
            <h1 style={{ textAlign: "left" }}>Miss Thing #014</h1>
            <h5 style={{ textAlign: "left" }}>Owned By: Cow</h5>
          </section>
          <section>
            <div
              style={{
                alignItems: "left",
                textAlign: "left",
                marginBottom: "1rem",
              }}
            >
              {/* <Panel header="Panel title">
              
            </Panel> */}
              Highest offer:
              <h2 style={{ textAlign: "left" }}>
                $40 <small>($953.85)</small>
              </h2>
              <Button
                color="primary"
                style={{
                  textAlign: "left",
                  //   marginBottom: "1rem",
                }}
              >
                Make Offer
              </Button>
            </div>
          </section>
          <section>
            <Button
              color="primary"
              id="toggler3"
              style={{
                width: "100%",
                height: "50px",
                textAlign: "left",
                //   marginBottom: "1rem",
              }}
            >
              Price History
            </Button>
            <UncontrolledCollapse toggler="#toggler3">
              <Card>
                <CardBody>
                  A human being, an alien, a monster, a ghost, they are any
                  creature you can think of 💎✨ Hand drawn non generative 1/1
                  collectibles by Resibhaskoro. Inspired by women, fashion,
                  queer culture and drag artistry 🌈💫
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </section>
          <section>
            <Button
              color="primary"
              id="toggler4"
              style={{
                width: "100%",
                height: "50px",
                textAlign: "left",
                //   marginBottom: "1rem",
              }}
            >
              Listing
            </Button>
            <UncontrolledCollapse toggler="#toggler4">
              <Card>
                <CardBody>
                  A human being, an alien, a monster, a ghost, they are any
                  creature you can think of 💎✨ Hand drawn non generative 1/1
                  collectibles by Resibhaskoro. Inspired by women, fashion,
                  queer culture and drag artistry 🌈💫
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </section>

          <section>
            <Button
              color="primary"
              id="toggler5"
              style={{
                width: "100%",

                height: "50px",
                textAlign: "left",
                //   marginBottom: "1rem",
              }}
            >
              Offers
            </Button>
            <UncontrolledCollapse toggler="#toggler5">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Price</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Floor Difference</th>
                    <th scope="col">Expiration</th>
                    <th scope="col">From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </UncontrolledCollapse>
          </section>
        </div>

        {/* item activity */}
        <section>
          <Button
            color="primary"
            id="toggler6"
            style={{
              width: "100%",
              textAlign: "left",
              //   marginBottom: "1rem",
            }}
          >
            Item Activity
          </Button>
          <UncontrolledCollapse toggler="#toggler6">
          <Card>
          <table className="table table-hover" style={{width:"1300px"}}>
                <thead>
                  <tr>
                    <th scope="col">Event</th>
                    <th scope="col">Price</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              </Card>
          </UncontrolledCollapse>
        </section>
        <section>
          <Button
            color="primary"
            id="toggler7"
            style={{
              width: "100%",
              textAlign: "left",
              //   marginBottom: "1rem",
            }}
          >
            More From This Collection:
          </Button>
          <UncontrolledCollapse toggler="#toggler7">
            <div>
              {/* style */}
              {/* className="row" style={{width: "100em",overFlowX: "scroll",whiteSpace: "nowrap"}} */}
              {/* <div className="col-2">
                <SideNav />
              </div> */}
              <div
                className="col-10 mt-2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <NftPagecard
                  nftName="Srijan Verma"
                  nftSrc="https://strugend.com/assets/images/team/team4.png"
                />
                <NftPagecard
                  nftName="Srijan Verma"
                  nftSrc="https://strugend.com/assets/images/team/team4.png"
                />
                <NftPagecard
                  nftName="Srijan Verma"
                  nftSrc="https://strugend.com/assets/images/team/team4.png"
                />
                <NftPagecard
                  nftName="Srijan Verma"
                  nftSrc="https://strugend.com/assets/images/team/team4.png"
                />
                <NftPagecard
                  nftName="Srijan Verma"
                  nftSrc="https://strugend.com/assets/images/team/team4.png"
                />
                
              </div>
            </div>
          </UncontrolledCollapse>
        </section>
        </div>
      </div>
      
      
    </>
  );
};

export default NftPage;
