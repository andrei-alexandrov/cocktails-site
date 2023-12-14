import './BeautifulText.scss';

export default function BeautifulText({ title }) {
    return (
        <div >
            <h1 className="title">
                {title}
                <div className="aurora">
                    <div className="aurora-item"></div>
                    <div className="aurora-item"></div>
                    <div className="aurora-item"></div>
                    <div className="aurora-item"></div>
                </div>
            </h1>
        </div>
    );
};


