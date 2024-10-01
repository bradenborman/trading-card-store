import React from 'react';
import { useParams } from 'react-router-dom';

const CardView: React.FC<{}> = () => {
    const { cardId } = useParams<{ cardId: string }>();

    return (
        <div>
            <h1>Card ID: {cardId}</h1>
        </div>
    );
};

export default CardView;