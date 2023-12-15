import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../../store/fetchDataSlice";
import { Alert, Button } from "react-bootstrap";

import StatusCode from "../../Utils/statusCodes";
import CocktailCard from "../../components/Cards/CocktailCard/CocktailCard";
import BackToTopBtn from "../../components/BackToTopBtn/BackToTopBtn";
import BeautifulText from "../../components/BeautifulText/BeautifulText";
import Footer from "../Footer/Footer";
import "./Home.scss";

export default function Home() {
    const [searchLetter, setSearchLetter] = useState('');
    const dispatch = useDispatch();
    const cocktails = useSelector(state => state.fetchData.data);
    const status = useSelector(state => state.fetchData.status);
    // const { data: cocktails, status } = useSelector(state => state.fetchData);

    useEffect(() => {
        dispatch(fetchCocktails(searchLetter || 'a'));
        console.log("DISPATCHING")
    }, [dispatch, searchLetter]);

    const handleInputChange = (event) => {
        const inputLetter = event.target.value.toLowerCase();

        if (/^[a-z]?$/.test(inputLetter)) {
            setSearchLetter(inputLetter);
        }
    };

    if (status === StatusCode.LOADING) {
        console.log("Loading Cocktails...")
        return (
            <p style={{
                marginTop: "3rem",
                color: "white",
                fontSize: "2rem",
                display: "flex",
                justifyContent: "center"
            }}
            >
                Loading...
            </p>
        )
    }

    if (status === StatusCode.ERROR) {
        return (
            <Alert
                style={{ gap: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", marginTop: "5rem" }}
                key="danger"
                variant="danger">
                No cocktails with that letter or error fetching cocktails.
                <Button
                    style={{ width: "fit-content", margin: "auto" }}
                    onClick={() => window.location.reload(true)}
                    variant="secondary"
                >Refresh page</Button>
            </Alert>
        )
    }

    return (
        <main className="home-container">
            <div className="colorful-line" >
                <BeautifulText title="&nbsp;" />
            </div>
            <h4 className="page-title">Enter your favorite letter to display cocktails with it</h4>
            <input
                className="input-letter"
                type="text"
                placeholder="Enter a letter"
                value={searchLetter}
                onChange={handleInputChange}
            />

            <CocktailCard fetchedData={cocktails} />
            <BackToTopBtn />
            <div className="beautiful-text" >
                <BeautifulText title="&nbsp;" />
            </div>
            <Footer />
        </main>
    );
}
