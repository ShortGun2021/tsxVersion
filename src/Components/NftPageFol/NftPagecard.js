import React from 'react'
import { GoKebabHorizontal } from 'react-icons/go';
import { AiOutlineHeart } from 'react-icons/ai';
const Card = (props) => {
    return (
        <>
            <div className="card p-3 m-3 col-3" style={{width:"200px"}}>
                <img className="card-img-top img-fluid" src={props.nftSrc} alt="CardImageCap" />
                <div className="card-body">
                    <h4 className="card-title text-center">{props.nftName}</h4>
                    <h6 className="card-text text-center">Coder-Programmer-Developer Most important of all "A LEARNER"</h6>
                    <div style={{ display: "flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                        <a href="/"><h3 style={{color:"black"}}><GoKebabHorizontal /></h3></a>
                        <a href="/"><h3 style={{color:"black"}}><AiOutlineHeart /></h3></a>
                    </div>

                </div>
            </div>
        </>
  )
}

export default Card