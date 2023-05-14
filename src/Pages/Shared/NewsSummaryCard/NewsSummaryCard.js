import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";


const NewsSummaryCard = ({ news }) => {

    const { title, details, _id, image_url, rating, total_view, author } = news;

    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className="author d-flex align-items-center">
                    <Image
                        className='me-3'
                        roundedCircle
                        src={author?.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div className="author-details">
                        <p className='mb-1 mt-2'>{author?.name}</p>
                        <p className='mt-0'>{author?.published_date}</p>
                    </div>
                </div>
                <div className="icon">
                    <FaBookmark className='me-3'></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div className="rating align-items-center">
                    <FaStar className='text-warning me-3'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div className="rating-details">
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;