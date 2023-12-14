import { Link, Route, Routes, Navigate } from "react-router-dom";
import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { useSelector } from "react-redux";

import Home from "../../pages/Home/Home";
import Favorites from "../../pages/Favorites/Favorites";
import Details from "../../pages/Details/Details";
import BeautifulText from "../BeautifulText/BeautifulText";

import errorPick from "../../images/errorPage.gif";
import "./NavigationBar.scss";

export default function NavigationBar() {
    const favorites = useSelector(state => state.favorites);
    return (
        <div>
            <Navbar variant="dark">
                <Container fluid className="container-wrapper">
                    <Nav className="d-flex flex-column flex-md-row justify-content-md-center align-items-center gap-4">
                        <NavbarBrand className="fs-4 nav-brand"><BeautifulText title="Cocktails&nbsp; catalogue" /></NavbarBrand>
                        <span className="link-wrapper">
                            <Nav.Link className="fs-4 nav-link" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="fs-4 nav-link" as={Link} to="/favorites">Favorites
                                <span className="glowing-circle"> &nbsp; {favorites.length}</span>
                            </Nav.Link>
                        </span>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route index element={<Navigate to={"/home"} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={
                    <div>
                        <div className="error-container">
                            <h2 className="error-message">
                                Page not found. You've taken a wrong turn, but you found a hedgehog.
                            </h2>
                            <img className="error-img" src={errorPick} alt="errorImage" />
                        </div>
                    </div>

                } />
            </Routes>
        </div>
    )
}