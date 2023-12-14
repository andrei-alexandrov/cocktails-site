import { useSelector } from "react-redux";
import FavoritesCard from "../../components/Cards/FavoritesCard/FavoritesCard";

import Lottie from "lottie-react";
import nothingHereImg from "../../lottieAnimations/no-results.json";
import BackToTopBtn from "../../components/BackToTopBtn/BackToTopBtn";

import "./Favorites.scss";

export default function Favorites() {
    const favoritesData = useSelector(state => state.favorites);
    return (
        <div className="favorites-container">
            {favoritesData.length > 0 ?
                <FavoritesCard />
                :
                <>
                    <p className="error-message">Nothing Here</p>
                    <Lottie className="nothing-here-lottie" animationData={nothingHereImg}></Lottie>
                </>
            }
            <BackToTopBtn />
        </div>
    )
}