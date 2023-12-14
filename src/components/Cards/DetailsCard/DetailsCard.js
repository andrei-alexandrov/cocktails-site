import { Card, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../../store/detailsSlice";
import { add } from "../../../store/favoritesSlice";

import "./DetailsCard.scss";

export default function DetailsCard() {
    const detailsCocktail = useSelector(state => state.details);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function backToHome(cocktaiId) {
        dispatch(goBack(cocktaiId));
        navigate("/home");
        console.log("Redirecting to home.");
    }

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
                            <h4 className="">{cocktail.title}</h4>
                            <Card.Text className="">Type: {cocktail.type}</Card.Text>
                            <Card.Text className="">How to prepare the cocktail:</Card.Text>
                            <Card.Text className="">{cocktail.description}</Card.Text>
                            <Card.Text className="">Ingredients:</Card.Text>
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
                                className="card-btn-add"
                                variant="primary"
                                onClick={() => { dispatch(add(cocktail)) }}
                            >
                                Add to favorites
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
