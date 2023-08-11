import React from "react";

const Pictures = ({pics = []}) => {
    return (
        <div className="row">
            {pics.map((item, index) => (
                    <div key={index} className="col mb-3">
                        <div className="card" style={{minWidth:"200px"}}>
                            <img src={item.src.medium} alt={item.alt}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.alt}</h5>
                                <hr />
                                <p>Photographer: {item.photographer}</p>
                                <p>Species: {item.photographer_url}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Pictures;