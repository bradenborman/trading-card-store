import React from 'react';
import Item from '../item/Item';

const Home: React.FC = () => {
    return (
        <section className="trading-cards-grid">
            <Item name="Base Set Charizard" price="$10" imgUrl="path/to/image1.jpg" />
            <Item name="Item 2" price="$20" imgUrl="path/to/image2.jpg" />
            <div className="spotlight">
                <div className="spotlight-grid">
                    <div className="context">
                        <h2>Condition</h2>
                        <p>is evaluated by 3 guys who dont really know but try their best, okay.</p>
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
            <Item name="Item 3" price="$30" imgUrl="path/to/image3.jpg" />
            <Item name="Item 4" price="$40" imgUrl="path/to/image4.jpg" />
            <Item name="Item 1" price="$10" imgUrl="path/to/image1.jpg" />
            <Item name="Item 2" price="$20" imgUrl="path/to/image2.jpg" />
            <Item name="Item 3" price="$30" imgUrl="path/to/image3.jpg" />
            <Item name="Item 4" price="$40" imgUrl="path/to/image4.jpg" />
            <Item name="Item 1" price="$10" imgUrl="path/to/image1.jpg" />
            <Item name="Item 2" price="$20" imgUrl="path/to/image2.jpg" />
            <Item name="Item 3" price="$30" imgUrl="path/to/image3.jpg" />
            <Item name="Item 4" price="$40" imgUrl="path/to/image4.jpg" />
            <Item name="Item 1" price="$10" imgUrl="path/to/image1.jpg" />
            <Item name="Item 2" price="$20" imgUrl="path/to/image2.jpg" />
            <Item name="Item 3" price="$30" imgUrl="path/to/image3.jpg" />
            <Item name="Item 4" price="$40" imgUrl="path/to/image4.jpg" />
        </section>
    );
};

export default Home;
