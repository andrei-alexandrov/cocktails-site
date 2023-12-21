import { Card, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../../store/detailsSlice";
import { add, remove } from "../../../store/favoritesSlice";

import "./DetailsCard.scss";

export default function DetailsCard() {
    const detailsCocktail = useSelector(state => state.details);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function backToHome(cocktaiId) {
        dispatch(goBack(cocktaiId));
        navigate("/home");
        console.log("Redirecting to home.");
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
        <Container className="details-container">
            {
                detailsCocktail.map((cocktail) => (
                    <Card key={cocktail.id}
                        className="custom-card">
                        <Card.Img
                            className="details-card-image"
                            variant="top"
                            src={cocktail.image}
                            alt="cocktail-image"
                        />
                        <div className="body-wrapper">
                            <Card.Body className="body-wrapper" >
                                <h4 className="cocktail-title">{cocktail.title}</h4>
                                <Card.Text className="cocktail-type">Type:&nbsp; {cocktail.type}</Card.Text>
                                <Card.Text className="cocktail-prepare">How to prepare the cocktail:</Card.Text>
                                <Card.Text className="cocktail-description">{cocktail.description}</Card.Text>
                                <Card.Text className="cocktail-incgredients">Ingredients:</Card.Text>
                                <ul>
                                    {cocktail.ingredients.map((ingredient, index) => (

                                        <li key={index}>
                                            {ingredient} - {cocktail.measures[index]}
                                        </li>
                                    ))}
                                </ul>
                            </Card.Body>
                            <Card.Footer className="footer-wrapper" >
                                <Button
                                    className={isCocktailInFavorites(cocktail) ? "card-btn-remove" : "card-btn-add"}
                                    onClick={() => handleAddRemove(cocktail)}
                                >
                                    {isCocktailInFavorites(cocktail)
                                        ? "Remove"
                                        : "Add to favorites"}
                                </Button>

                                <Button
                                    className="card-btn-goBack"
                                    variant="primary"
                                    onClick={() => backToHome(cocktail.id)}
                                >
                                    Back to home
                                </Button>
                            </Card.Footer>
                        </div>
                    </Card>
                ))
            }
        </Container >
    )
}
