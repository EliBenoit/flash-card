// IMPORT
import './style.css';

/**
 * Function to verify if the size props is correct. 
 * If not, it return an empty string
 * @param {Sting} size 
 * @return An empty string or a correct string for button class name.
 */
function getValidClassSize (size) {
    const validClassSizes = ['medium', 'big'];
    return validClassSizes.includes(size) ? size : ''; 
} 

/**
 * This function handle default behavior : it check if the size is valid,
 * and if it return an empty string, define size as medium.
 * 
 * @param {String} size The desire size for button.
 * @return A correct string for size class.
 */
function getClassSize (size) {
    return getValidClassSize(size) ? size : 'medium';
}

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
            className={getClassSize(size)}
        >
            {children}
        </button>
    )
}

export default Button;