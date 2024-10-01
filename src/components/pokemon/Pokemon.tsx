import React, { useState } from 'react';
import Item from './item/Item';
import cardData from '../../data/data.json';

interface Card {
    name: string;
    price: string;
    imgUrl: string;
    condition: string;
}

const Pokemon: React.FC = () => {
    const [activeHoveredCondition, setActiveHoveredCondition] = useState<string | undefined>(undefined);

    // Handlers to update the hovered condition state
    const handleMouseEnter = (condition: string) => {
        setActiveHoveredCondition(condition);
    };

    const handleMouseLeave = () => {
        setActiveHoveredCondition(undefined);
    };

    const spotLight = () => {
        return (
            <div className="spotlight">
                <div className="spotlight-grid">
                    <div className="context">
                        <h2>Condition</h2>
                        <p>is evaluated by 3 guys who don't really know but try their best, okay.</p>
                    </div>
                    <div 
                        className='condition-helper' 
                        onMouseEnter={() => handleMouseEnter('Mint')} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='label mint'>Mint</div>
                    </div>
                    <div 
                        className='condition-helper' 
                        onMouseEnter={() => handleMouseEnter('Excellent')} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='label excellent'>Excellent</div>
                    </div>
                    <div 
                        className='condition-helper' 
                        onMouseEnter={() => handleMouseEnter('Good')} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='label good'>Good</div>
                    </div>
                    <div 
                        className='condition-helper' 
                        onMouseEnter={() => handleMouseEnter('Fair')} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='label fair'>Fair</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="trading-cards-grid">
            {cardData.map((card: Card, index: number) => (
                <React.Fragment key={index}>
                    <Item 
                        name={card.name} 
                        price={card.price} 
                        imgUrl={card.imgUrl} 
                        condition={card.condition}
                        grayScale={activeHoveredCondition !== undefined && card.condition !== activeHoveredCondition}
                    />
                    {index === 1 && spotLight()}
                </React.Fragment>
            ))}
        </section>
    );
};

export default Pokemon;