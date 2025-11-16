// IMPORT
import './style.css';
import { getClassSize } from '../helpers';

function getValidColor(color) {
    return ['primary', 'secondary', 'default'].includes(color) ? color : 'default';
}

/**
 * Button component
 * 
 * @param {Function} action - the action to call on click event.
 * @param {Boolean} disable - If the button is disable or not.
 * @param {String} size - The button size: small, medium or big.
 * @param {String} color - The button color, can be : primary, secondary or default. By default : default.
 * @param {*} children - Content to be display inside the button. 
 * @return React Button component
 */
const Button = ({ action, disable, size, children, color }) => {
    return (
        <button 
            onClick={action} 
            disabled={disable} 
            className={`btn ${getClassSize(size)}-btn ${getValidColor(color)}-btn`}
        >
            {children}
        </button>
    )
}

export default Button;