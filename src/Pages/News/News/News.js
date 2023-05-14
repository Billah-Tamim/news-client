import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();

    const { title, details, category_id, _id, image_url, rating, total_view, author } = news;


    return (
        <Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/catagory/${category_id}`}>
                    <Button variant="primary">This Catagory News</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;