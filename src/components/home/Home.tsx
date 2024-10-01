import React from 'react';
import Item from '../item/Item';
import cardData from '../../data/data.json';

interface Card {
    name: string;
    price: string;
    imgUrl: string;
    condition: string;
}

const Home: React.FC = () => {

    const spotLight = () => {
        return (
            <div className="spotlight">
                <div className="spotlight-grid">
                    <div className="context">
                        <h2>Condition</h2>
                        <p>is evaluated by 3 guys who don't really know but try their best, okay.</p>
                    </div>
                    <div className='condition-helper'>
                        <div className='label mint'>Mint</div>
                    </div>
                    <div className='condition-helper'>
                        <div className='label excellent'>Excellent</div>
                    </div>
                    <div className='condition-helper'>
                        <div className='label good'>Good</div>
                    </div>
                    <div className='condition-helper'>
                        <div className='label fair'>Fair</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="trading-cards-grid">
            {cardData.map((card: Card, index: number) => (
                <React.Fragment key={index}>
                    <Item name={card.name} price={card.price} imgUrl={card.imgUrl} condition={card.condition} />
                    {index === 1 && spotLight()}
                </React.Fragment>
            ))}
        </section>
    );
};

export default Home;
