import React from 'react';

interface ItemProps {
    name: string;
    price: string;
    imgUrl: string;
    condition: string;
}

const Item: React.FC<ItemProps> = ({ name, price, imgUrl, condition }) => {
    return (
        <div className="item">
            <div className='img-wrapper'>
                <img src={imgUrl} alt={name} className="img-first" />
                <img src={"https://i.pinimg.com/originals/16/88/bc/1688bcd43697602edcae25bc667bf336.jpg"} alt={name} className="img-second" />
            </div>
            <div className='info'>
                <div>
                    <div className={`condition ${condition.toLowerCase()}`}></div>
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
                <div className='setNumber'>
                    <p>23/42</p> 
                    <img src={"../../images/pokemon/black-star-promo.png"} />
                </div>
            </div>
        </div>
    );
};

export default Item;
