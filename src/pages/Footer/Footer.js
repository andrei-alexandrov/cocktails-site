import React from 'react';

import Github from "@iconscout/react-unicons/icons/uil-github"
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"

import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <span>Created by Andrei Alexandrov 2023 ©</span>
                    <p>andrei.alxv@gmail.com</p>
                    <p>The cocktail data is used from&nbsp;
                        <a href='https://www.thecocktaildb.com/' target='_blank' rel="noreferrer">
                            TheCocktailDb
                        </a>&nbsp;database
                    </p>
                    <div className='footer-icons'>
                        <a href='https://www.github.com/andrei-alexandrov' target='_blank' rel="noreferrer">
                            <span className="screen-reader">GitHub</span>
                            <Github color='white' size='2.7rem' />
                        </a>
                        <a href='https://www.linkedin.com/in/andrei-alexandrov/' target='_blank' rel="noreferrer">
                            <span className="screen-reader">LinkedIn</span>
                            <LinkedIn color='white' size='2.6rem' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
