// import
import { useState } from 'react';
import { Button, CategoryButton, Overlay } from '../../ui-component';
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

const NoDataOverlay = () => {
    return (
        <Overlay>
            <div className="flex-column no-card">
                <p>Aucun jeu de flash card détecté, merci d'en importer un.</p>
                <form id="myForm" className="flex-column flex-center">
                    <input type="file" id="csvFile" accept=".csv" />
                    <br />
                    <Button type="submit" size="small" color="primary">Importer</Button>
                </form>
                <legend>Fichier de type .CSV uniquement</legend>
            </div>
        </Overlay>
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
    const data = null;

    return (
        <div id="dashboard" >
            <SideBar currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
            <DashboardContent currentCategory={currentCategory} />
            {!data && <NoDataOverlay /> }
        </div>
    )
}

export default Dashboard;