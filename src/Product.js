
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

const Product = (props) => {
    const { id, title, category, price, description, image, rating } = props;

    const [open, setOpen] = useState(false);

    return (
        <div className="card1">
            <Card style={{ width: '18rem', border: 'none' }}>
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
                            <div id='description'>
                                <p>{description}</p>
                                <Button variant="primary">Buy</Button>
                            </div>
                        </Collapse>
                    </Card.Text>
                </Card.Body>
                <Button variant="primary" style={{ position: 'absolute', top: '0', right: '0' }}>Buy</Button>
            </Card>
            {/* <h2>{title}</h2>

            <div className="id"><p>ID: {id}</p></div>
            <div className="category"><p>Category: {category}</p></div>
            <div className="price"><p>Price: {price}€</p></div>
            <div className="description"><p>Description: {description}</p></div>
            <div className="image"><img src={image} alt="product" /></div> */}

            {/* <p>{rating}</p> */}

        </div >
    )
}

export default Product;