// import
import { useState } from 'react';
import { Button, CategoryButton, Overlay } from '../../ui-component';
import DashboardContent from './DasboardContent';
import { filterCategory, getCategoryOptions, getCsvContent } from './helpers';
import './style.css';

/**
 * The Side bar component wich display the flash card category to review.
 *  
 * @param {string} currentCategory - The current selected category.
 * @param {Function} setCurrentCategory - The function to call to update the selected category. 
 * 
 * @return SideBar react component.
 */
const SideBar = ({currentCategory, setCurrentCategory}) => {
    const buttons = getCategoryOptions("full");
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
 * The overlay to import data
 * @param {*} setData - Function to set data when retrieve.
 * 
 * @return the NoDataOverlay react component.
 */
const NoDataOverlay = ({setData}) => {

    const csvFile = document.getElementsByName("csvFile");

    return (
        <Overlay>
            <div className="flex-column no-card">
                <p>Aucun jeu de flash card détecté, merci d'en importer un.</p>
                <form id="csvForm" className="flex-column flex-center">
                    <input type="file" name="csvFile" accept=".csv" />
                    <br />
                    <Button 
                        id="csvImport"
                        size="small"
                        color="primary"
                        action={(e) => {
                            e.preventDefault()
                            getCsvContent(csvFile[0], setData)}}
                    >Importer</Button>
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
    const [data, setData] = useState(null)
    const [currentCategory, setCurrentCategory] = useState("");

    const filteredData = data ? data.filter((obj, index) => filterCategory(obj, currentCategory, index)) : [];

    const importContent = (content) => {
        setData(content);
        setCurrentCategory("noCategory")
    }

    return (
        <div id="dashboard" >
            <SideBar currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
            <DashboardContent currentCategory={currentCategory} data={filteredData}/>
            {!data && <NoDataOverlay setData={importContent}/> }
        </div>
    )
}

export default Dashboard;