// IMPORT
import './style.css';

/**
 * CardHeader component
 * 
 * @param {String} title - the text to display in header. 
 * @return React CardHeader component
 */
const CardHeader = ({ title }) => {
    return (
    <div id="card-header">
        <h2>{title}</h2>
    </div>
    )
}

export default CardHeader;