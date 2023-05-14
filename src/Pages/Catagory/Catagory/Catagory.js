import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {

    const catagoryNews = useLoaderData();

    return (
        <div>
            <h4>All News Catagory length {catagoryNews.length}</h4>
            {
                catagoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagory;