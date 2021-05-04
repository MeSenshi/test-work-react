import React from "react";

const Card = ({card}) => {
    return (
        <div className="col-md-3 col-sm-3 col-xs-3">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{card.header}</h3>
                    <ul className="list-group list-group-numbered">
                        {card.options.map(li => <li key={li} className="list-group-item">{li}</li>)}
                    </ul>
                    <p className="card-text">{card.text}</p>
                </div>
            </div>
        </div>
    )
}


export default Card;