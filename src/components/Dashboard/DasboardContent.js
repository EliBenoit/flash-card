// import
import { useState } from 'react';
import {
    Card,
    CardHeader,
    ProgressBar
} from '../../ui-component';
import AnswerSide from './AnswerSide';
import './style.css';

/**
 * The dashbord content to display.
 * 
 * @param {string} currentCategory - the current selected category. It's use to match color on question card. 
 * @return DashbordContent react component.
 */
const DashboardContent = ({currentCategory, data}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const defaultData = {
        question: "Pas de carte dans la catégorie",
        answer: "Pas de carte dans la catégorie"
    };
    const {question, answer} = data.length > 0 ? data[currentStep] : defaultData;
    
    return (
        <div className="dashboard-container">
            <h1>Flash card</h1>
            <div>
                <ProgressBar currentStep={currentStep} steps={data ? data.length + 1 : 0} />
            </div>
            <Card>
                <div
                    id="question" 
                    className={`${currentCategory}-background card-container`}
                >
                    <CardHeader title="Question" />
                    <p className="display-zone">{question}</p>
                </div>
            </Card>
            <AnswerSide 
                answer={{
                    content: answer,
                    id: `answer${currentStep}`,
                }}
                steps={{
                    current: currentStep,
                    update: setCurrentStep,
                    total: data.length + 1
                }}
            />
        </div>
    )
}

export default DashboardContent