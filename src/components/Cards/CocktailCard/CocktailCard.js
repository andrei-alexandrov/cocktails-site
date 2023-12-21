import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../../store/favoritesSlice";
import { addToDetails } from "../../../store/detailsSlice";

import "../CocktailAndFavCard.scss";

export default function CocktailCard({ fetchedData }) {
    const favorites = useSelector((state) => state.favorites);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addtoDetailsPage = (cocktail) => {
        dispatch(addToDetails(cocktail));
        navigate("/details");
        console.log("Cocktail is shown in details page.");
    }

    const isCocktailInFavorites = (cocktail) => favorites.some((favCocktail) => favCocktail.id === cocktail.id);

    const handleAddRemove = (cocktail) => {
        if (isCocktailInFavorites(cocktail)) {
            dispatch(remove(cocktail.id));
        } else {
            dispatch(add(cocktail));
        }
    };

    return (
        <Container fluid className="card-wrapper">
            {fetchedData.map((cocktail) => (
                <Card key={cocktail.id} className="card-item">
                    <div className="card-content">
                        <Card.Img variant="top" src={cocktail.image} className="card-image" alt="cocktail-card" />
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{cocktail.title}</Card.Title>
                            <Card.Text className="card-type">Type:&nbsp; {cocktail.type}</Card.Text>
                        </Card.Body>
                    </div>
                    <Card.Footer className="footer-btn">
                        <Button
                            className={isCocktailInFavorites(cocktail) ? "card-btn-remove" : "card-btn-add"}
                            onClick={() => handleAddRemove(cocktail)}
                        >
                            {isCocktailInFavorites(cocktail)
                                ? "Remove"
                                : "Add to favorites"}
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
