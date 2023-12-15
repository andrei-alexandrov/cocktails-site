import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../../store/favoritesSlice";
import { addToDetails } from "../../../store/detailsSlice";

import "../CocktailAndFavCard.scss";

export default function CocktailCard({ fetchedData }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addtoDetailsPage = (cocktail) => {
        dispatch(addToDetails(cocktail));
        navigate("/details");
        console.log("Cocktail is shown in details page.");
    }

    return (
        <Container fluid className="card-wrapper">
            {fetchedData.map((cocktail) => (
                <Card key={cocktail.id} className="card-item">
                    <Card.Img variant="top" src={cocktail.image} className="card-image" alt="cocktail-card" />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">{cocktail.title}</Card.Title>
                        <Card.Text className="card-type">Type:&nbsp; {cocktail.type}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="footer-btn">
                        <Button
                            className="card-btn-add"
                            onClick={() => dispatch(add(cocktail))}
                        >
                            Add to favorites
                        </Button>
                        <Button
                            className="card-btn-details"
                            onClick={() => addtoDetailsPage(cocktail)}
                        >
                            Details
                        </Button>
                    </Card.Footer>
                </Card>
            ))
            }
        </Container>
    )
}
