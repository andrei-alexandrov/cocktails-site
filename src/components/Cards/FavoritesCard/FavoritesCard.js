import { Card, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../../store/favoritesSlice";
import { addToDetails } from "../../../store/detailsSlice";
import { useNavigate } from "react-router-dom";

import "../CocktailAndFavCard.scss";

export default function FavoritesCard() {
    const favoritesData = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirectToDetailsPage = (cocktail) => {
        dispatch(addToDetails(cocktail));
        navigate("/details");
    };

    return (
        <div className="details-page">
            <Container fluid className="card-wrapper">
                {favoritesData.map((cocktail) => (
                    <Card key={cocktail.id} className="card-item">
                        <div className="card-content">
                            <Card.Img variant="top" src={cocktail.image} className="card-image" alt="cocktail-image" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">{cocktail.title}</Card.Title>
                                <Card.Text className="card-type">Type: {cocktail.type}</Card.Text>
                                {/* <Card.Text className="card-type">{cocktail.description}</Card.Text> */}
                            </Card.Body>
                        </div>
                        <Card.Footer className="footer-btn">
                            <Button
                                className="card-btn-remove"
                                onClick={() => dispatch(remove(cocktail.id))}
                            >
                                Remove
                            </Button>
                            <Button
                                className="card-btn-details"
                                onClick={() => redirectToDetailsPage(cocktail)}
                            >
                                Details
                            </Button>
                        </Card.Footer>
                    </Card>
                ))}
            </Container>
        </div>
    )
}