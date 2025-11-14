// IMPORT
import './style.css';

/**
 * Card component
 * 
 * @param {*} children - Content to be display inside the card. 
 * @return React Card component
 */
const Card = ({ children }) => {
    return (
    <div id="card">
        {children}
    </div>
    )
}

export default Card;