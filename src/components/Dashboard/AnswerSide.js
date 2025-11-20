// import
import { useState } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CategoryButton,
} from '../../ui-component';
import './style.css';


/**
 * SelectorCategory display a list of CategoryButton.
 * 
 * @param {Function} action - Action to be called when triggering button.
 * @param {string} category - The current selected category. 
 *                            It's use to compare the item and active color option if the same. 
 * @param {string} size - The desired button size : small, medium, big.
 * @return SelectorCategory react component.
 */
const SelectorCategory = ({action, category, size}) => {
const buttons = ["unknow", "learning", "knowing", "perfect"];
    return (
        <>
            {buttons.map((item) => (
                <CategoryButton 
                    key={item}
                    category={item}
                    size={size} 
                    isInColor={category === item}
                    action={() => action(item)}
                />
            ))}
        </>
    )
}

/**
 * AnswerSide handle the answer side of dashboard. 
 * 
 * @param {Object} steps - An object with the necessary element to populate the ProgressBar information. 
 * @param {Object} answer - The answer information : id and content.  
 * @return AnswerSide react component
 */
const AnswerSide = ({steps, answer}) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    const {current, update, total} = steps;

    const handleStep = (newStep) => {
        update(newStep)
        setShowAnswer(false)
    }
    return (
        <div id="answer-side">
            <Card>
                <div id="answer" className="card-container">
                    <CardHeader title="Réponse"/>
                    <div className="display-zone">
                        {showAnswer ? <p>{answer.content}</p> :
                        <Button color="primary" action={() => setShowAnswer(true)}>Voir la réponse</Button>
                        }
                    </div>
                </div>
            </Card>
            <div className="flex-row">
                <div>
                    <SelectorCategory 
                        size="medium" 
                        action={(value) => setSelectedCategory(value)} 
                        category={selectedCategory}
                    />
                </div>
                <div id="row-button">
                    <Button 
                        action={() => handleStep(current - 1)}
                        isDisable={current === 0}
                        size="small"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24.034" height="37.032" viewBox="0 0 24.034 37.032">
                            <path id="Tracé_65" data-name="Tracé 65" d="M1876.155,751l-18,16.535,18,13.465" 
                            transform="translate(-1855.654 -747.468)" className="action-button"/>
                        </svg>
                    </Button>
                    <Button 
                        action={() => handleStep(current + 1)}
                        isDisable={current === total}
                        size="small"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24.034" height="37.032" viewBox="0 0 24.034 37.032">
                            <path id="Tracé_65" data-name="Tracé 65" d="M1876.155,751l-18,16.535,18,13.465" transform="translate(1879.687 784.499) rotate(180)" className="action-button"/>
                        </svg>
                    </Button>
                    <Button isDisable={true} size="small">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                            <g id="Groupe_16" data-name="Groupe 16" transform="translate(1.871 2.314)">
                                <line id="Ligne_7" data-name="Ligne 7" y2="30" transform="translate(15.948 0.186)" className="action-button"/>
                                <line id="Ligne_8" data-name="Ligne 8" x2="30" transform="translate(0.629 15.505)" className="action-button"/>
                            </g>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AnswerSide