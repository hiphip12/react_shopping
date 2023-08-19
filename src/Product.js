import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
    const { id, title, category, price, description, image, rating } = props;

    return (
        <div className="card1">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
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
                        <div className='description'>Description: {description}</div>
                    </Card.Text>
                    <Button variant="primary">Buy</Button>
                </Card.Body>
            </Card>
            {/* <h2>{title}</h2>

            <div className="id"><p>ID: {id}</p></div>
            <div className="category"><p>Category: {category}</p></div>
            <div className="price"><p>Price: {price}€</p></div>
            <div className="description"><p>Description: {description}</p></div>
            <div className="image"><img src={image} alt="product" /></div> */}

            {/* <p>{rating}</p> */}

        </div>
    )
}

export default Product;