import React from "react";
import Card from "./Card";

const CardsList = () => {
    let cardList = [
        {
            "header": "Заголовок 1",
            "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
            "text": "какой-то текст 1 текст какой-то 1 какой-то"
        },
        {
            "header": "Заголовок 2",
            "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
            "text": "какой-то текст 1 текст какой-то 1 какой-то"
        },
        {
            "header": "Заголовок 3",
            "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
            "text": "какой-то текст 1 текст какой-то 1 какой-то"
        }
    ];

    const renderCards = () => {
        return cardList.map(card => {
            return <Card key={card.header} card={card}/>
        })
    }

    const cardCss = cardList.length > 0 ? 'g-3' : ''

    return (
        <div className={`row ${cardCss}`}>
            {cardList.length > 0 ? renderCards() : "there is no cards"}
        </div>
    )
}


export default CardsList;