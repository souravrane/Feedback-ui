import React from "react";
import PropTypes from "prop-types"; // used for type casting props

function Header({ text }) {
    return (
        <header>
            <div className="container">
                <h1>{text}</h1>
            </div>
        </header>
    );
}

// default props if user does not specify
Header.defaultProps = {
    text: "Feedback UI",
};

// creating types for your properties
Header.propTypes = {
    text: PropTypes.string,
};

export default Header;
