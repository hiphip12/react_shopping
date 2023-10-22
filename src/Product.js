import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

const Product = (props) => {
    const { id, title, category, price, description, image, rating } = props;

    const [open, setOpen] = useState(false);

    const addToCart = () => {
        // using console log purposely, to track items being clicked for "buy" / displaying a shopping cart will be learned oon the redux upcoming class
        console.log('Item added to cart:', props.title);
    };

    return (
        <div className="card_bg">
            <Card className='card_img'>
                <Card.Img src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        ID: {id}
                    </Card.Text>
                    Category: {category}
                    <Card.Text>
                        Price: {price.toFixed(2)} €
                    </Card.Text>
                    <Card.Text>
                        Rating: {rating.rate}
                    </Card.Text>
                    <Card.Text>
                        <Button variant="transparent"
                            onClick={() => setOpen(!open)}
                            aria-controls="description"
                            aria-expanded={open}
                            style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                            Read Description
                        </Button>

                        <Collapse in={open}>
                            <span id='description'>
                                {description}
                            </span>
                        </Collapse>
                    </Card.Text>

                </Card.Body>
                <Button variant="primary" onClick={addToCart} style={{ position: 'absolute', top: '0', right: '0' }}>Buy</Button>
            </Card>
        </div >
    );
};

export default Product;
