import React, { useState } from 'react';
import WollcomeSection from '../WellcomeSection/WollcomeSection';
import Recently from '../Recently/Recently';
import MostPopular from '../MostPopular/MostPopular';
import FoodQuality from '../FoodQuality/FoodQuality';
import Chef from '../Chef/Chef';
import Environment from '../Environment/Environment';
import Management from '../Management/Management';
import Decoration from '../Decoration/Decoration';
import Location from '../Location/Location';

const Home = () => {
    const [viewType, setViewType] = useState('today')
    
    return (
        <div>
            <WollcomeSection></WollcomeSection>
            {
                viewType === "today" ?
                    <Recently setViewType={setViewType}></Recently>
                    :
                    <MostPopular setViewType={setViewType}></MostPopular>
            }
            <FoodQuality></FoodQuality>
            <Chef></Chef>
            <Environment></Environment>
            <Management></Management>
            <Decoration></Decoration>
            <Location></Location>
        </div>
    );
};

export default Home;