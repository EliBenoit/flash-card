// IMPORT
import './style.css';
import { getClassSize } from '../helpers';
import { Emptyface, NeutralFace, SmileFace, HappyFace, UnhappyFace } from './smiley';

/**
 * This function help to choose the smiley to display.
 * 
 * @param {Boolean} color - If the face need to have color.
 * @param {Boolean} disable - If the category button is disable or not. That affect face apparence. 
 * 
 * @return SVG code with the selected smiley, by defaut it's an empty face.
 */
function getSmiley (color, disable, smiley) {
    return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        id={`face-${smiley}`} 
        data-testid={`face-${smiley}`} 
        className={`grayscale-color ${color && !disable ? 'color-face' : ''} ${!disable ? 'hover-face' : ''}`} 
        data-name={`face-${smiley}`} 
        viewBox="0 0 173.66 176.9"
    >
        {smiley === '' &&  <Emptyface />}
        {smiley === 'empty' &&  <Emptyface />}
        {smiley === 'neutral' && <NeutralFace />}
        {smiley === 'happy' && <HappyFace />}
        {smiley === 'smile' && <SmileFace />}
        {smiley === 'unhappy' && <UnhappyFace />}
    </svg>
    )
}

/**
 * Get the right smiley for the given category.
 * 
 * @param {String} category - The desire category to match with his smiley.
 * 
 * @return {String} The smiley name.
 */
function getCategorySmiley(category) {
    const smileyOptions = {
        noCategory: 'empty',
        unknow: 'unhappy',
        learning: 'neutral',
        knowing: 'smile',
        perfect: 'happy'
    };

    return smileyOptions[category] || 'empty';
}
/**
 * CategoryButton component
 * 
 * @param {Function} action - the action to call on click event.
 * @param {Boolean} color - If the face need to have color.
 * @param {Boolean} disable - If the category button is disable or not.
 * @param {String} size - The size for the category button: medium or big.
 * @return React CategoryButton component
 */
const CategoryButton = ({action, color, disable, size, category}) => {
    const smiley = getCategorySmiley(category);

    return (
    <button 
        className={`btn-category btn-category-${getClassSize(size)}`}
        onClick={action}
        disabled={disable}
    >
        {getSmiley(color, disable, smiley)}
    </button>
    )
}

export default CategoryButton;