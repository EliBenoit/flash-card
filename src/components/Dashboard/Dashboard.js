// import
import { useState } from 'react';
import { CategoryButton } from '../../ui-component';
import DashboardContent from './DasboardContent';
import './style.css';

/**
 * The Side bar component wich display the flash card category to review.
 *  
 * @param {string} currentCategory - The current selected category.
 * @param {Function} setCurrentCategory - The function to call to update the selected category. 
 * @return SideBar react component.
 */
const SideBar = ({currentCategory, setCurrentCategory}) => {
    const buttons = ["noCategory", "unknow", "learning", "knowing", "perfect"];
    return (
        <div className="sidebar">
            {buttons.map((item) => (
                <CategoryButton 
                    key={item}
                    category={item} 
                    isInColor={currentCategory === item}
                    action={() => setCurrentCategory(item)}
                />
            ))}
        </div>
    )
}

/**
 * Dashboard component
 * 
 * @param {}  
 * @return React Dashboard component
 */
const Dashboard = () => {
    const [currentCategory, setCurrentCategory] = useState("");
    return (
        <div id="dashboard" >
            <SideBar currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
            <DashboardContent currentCategory={currentCategory} />
        </div>
    )
}

export default Dashboard;