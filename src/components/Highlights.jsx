import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library?</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight
                            icon= {<FontAwesomeIcon icon="bolt" />}
                            title="Quick and Easy"
                            para="Get access to thousands of books with a few clicks."
                            />
                        <Highlight
                            icon= {<FontAwesomeIcon icon="book-open" />}
                            title="10,000+ Books"
                            para="Explore a vast collection of genres and authors."
                            />
                        <Highlight
                            icon= {<FontAwesomeIcon icon="tags" />}
                            title="Affordable"
                            para="Enjoy competitive pricing and exclusive discounts."
                            />
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Highlights;