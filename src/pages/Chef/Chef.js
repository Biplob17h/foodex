import React, { useEffect, useState } from 'react';
import ChefSingle from './ChefSingle';

const Chef = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch("https://food-ex-server-production.up.railway.app/api/v1/chef")
          .then((res) => res.json())
          .then((data) => setChefs(data));
    },[])
    return (
        <div className='grid grid-cols-1 gap-5 mx-5 md:grid-cols-2'>
            {
                chefs?.map(chef => <ChefSingle
                key={chef?._id}
                chef={chef}
                ></ChefSingle>)
            }
        </div>
    );
};

export default Chef;