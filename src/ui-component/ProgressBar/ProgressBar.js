// IMPORT
import Card from '../Card/Card';
import './style.css';

/**
 * Helper to calculate the progress percentage.
 * 
 * @param {number} currentStep - The current step.
 * @param {number} steps - Total steps which is equal to 100%.
 * @returns {string} The percentage of progression.
 */
function getPourcentage(currentStep, steps) { 
    return `${currentStep / steps * 100}%`;
}

/**
 * ProgressBar component
 * 
 * @param {*} children - Content to be display inside the card. 
 * @return React ProgressBar component
 */
const ProgressBar = ({ currentStep, steps }) => {
    
    const percent = getPourcentage(currentStep, steps);
    const progressWidth = { width: percent };

    return (
    <div id="progress-bar-container">
        <p id="progess-percent" style={progressWidth}>{percent}</p>
        <Card>
            <div data-testid="visual-progession" id="progess-bar" style={progressWidth}></div>
        </Card>
        <p id="progess-steps">Tu as fais {currentStep} cartes sur {steps} dans ta catégorie.</p>
    </div>
    )
}

export default ProgressBar;