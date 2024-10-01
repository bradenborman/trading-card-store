import React from 'react';
import { Link } from 'react-router-dom';

interface ItemProps {
    name: string;
    price: string;
    imgUrl: string;
    condition: string;
    grayScale: boolean; // Add grayScale prop
}

const Item: React.FC<ItemProps> = ({ name, price, imgUrl, condition, grayScale }) => {
    return (
        <div className={`item ${grayScale ? 'grayscale' : ''}`}> 
            <div className='img-wrapper'>
                <img src={imgUrl} alt={name} className="img-first" />
                <img src={"https://i.pinimg.com/originals/16/88/bc/1688bcd43697602edcae25bc667bf336.jpg"} alt={name} className="img-second" />
            </div>
            <div className='info'>
                <div>
                    <div className={`condition ${condition.toLowerCase()}`}></div>
                </div>
                <div>
                    <h3><Link to={"/pokemon/view/2345"}>{name}</Link></h3>
                    <p>{price}</p>
                </div>
                <div className='setNumber'>
                    <p>23/42</p> 
                    <img src={"../../images/pokemon/black-star-promo.png"} alt="Set icon" />
                </div>
            </div>
        </div>
    );
};

export default Item;