import React from 'react';

interface ItemProps {
    name: string;
    price: string;
    imgUrl: string;
}

const Item: React.FC<ItemProps> = ({ name, price, imgUrl }) => {
    return (
        <div className="item">
            <div className='img-wrapper'>
                <img src={"https://den-cards.pokellector.com/119/Charizard.BS.4.png"} alt={name} className="img-first" />
                <img src={"https://i.pinimg.com/originals/16/88/bc/1688bcd43697602edcae25bc667bf336.jpg"} alt={name} className="img-second" />
            </div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
};

export default Item;
