import React from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


const LeftSideNav = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('https://dragon-news-server-five-beta.vercel.app/news-catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div >
            <h4>All Catagory {catagories.length}</h4>
            <div>
                {
                    catagories.map(catagory => <p key={catagory.id}>
                        <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;