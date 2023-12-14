import Button from 'react-bootstrap/Button';
import BeautifulText from '../../components/BeautifulText/BeautifulText';

import "./StartingPage.scss";

export default function StartingPage({ onEnter }) {
    return (
        <div className="starting-page">
            <div className="title-container">
                <BeautifulText title="Cocktails catalogue" />
            </div>
            <Button style={{ width: "9rem", marginTop: "10px" }} variant="success" onClick={onEnter}>Enter</Button>
        </div>
    );
}