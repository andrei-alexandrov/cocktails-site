import { useSelector } from "react-redux";
import DetailsCard from "../../components/Cards/DetailsCard/DetailsCard";

import "./Details.scss";

export default function Details() {
    const detailsCocktail = useSelector(state => state.details);

    return (
        <div className="details-container">
            {detailsCocktail && <DetailsCard />}
        </div>
    )
}