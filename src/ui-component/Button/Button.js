// IMPORT
import './style.css';
import { getClassSize } from '../helpers';


/**
 * Button component
 * 
 * @param {Function} action - the action to call on click event.
 * @param {Boolean} disable - If the button is disable or not.
 * @param {String} size - The button size: medium or big.
 * @param {*} children - Content to be display inside the button. 
 * @return React Button component
 */
const Button = ({ action, disable, size, children }) => {

    return (
        <button 
            onClick={action} 
            disabled={disable} 
            className={`btn btn-${getClassSize(size)}`}
        >
            {children}
        </button>
    )
}

export default Button;