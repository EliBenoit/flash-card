// import 
import Card from '../Card/Card';
import './style.css';

/**
 * The overlay component to display a message over the dashboard.
 * @param {React.Component} children - The content to display inside the overlay.
 * @return The Overlay react component
 */
const Overlay = ({children}) => {
    return (
        <>
        <div className="overlay-background"></div>
        <div className="flex-column flex-center overlay">
            <Card>
                {children}
            </Card>
        </div>
        </>
    )
}

export default Overlay;