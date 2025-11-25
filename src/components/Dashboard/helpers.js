/**
 * Convert CSV string into an array of object.
 * 
 * @param {string} str - The csv string to convert
 * @param {string} delimiter - The delimiter for the colomn. By default it's a semi colon. 
 * 
 * @return {Array[Object]} The corresponding array for the CSV.
 */
function csvToArray(str, delimiter = ";") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const arr = rows.map(
        function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function () {
        const newObj = {
            question: values[0],
            answer: values[1],
            category: values[2]
        }
        return newObj;
        }, {});
        return el;
    })
    return arr;
}
/**
 * Get the content of a csv file
 * 
 * @param {Object} input 
 * @param {Function} setData - function to set data.
 *  
 */
function getCsvContent(input, setData) {
    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result;
        const data = csvToArray(text);
        setData(data);
        };

    reader.readAsText(input.files[0]);
}

/**
 * Get the category name, in full option or just the learning stages.
 * @param {String} option - The option, if you whant all category use the "full" option,
 *                          other wise let it empty and received the four learning stages.
 * 
 * @return {Array[String]} The array with all five or four option for the categories. 
 */
function getCategoryOptions(option) {
    return option === "full" ? ["noCategory", "unknow", "learning", "knowing", "perfect"] 
        : ["unknow", "learning", "knowing", "perfect"]
}

/**
 * Uniformize and compare categories to filter them.
 * @param {Object} obj - the csv objet : question, answer, category 
 * @param {string} category - the name of the desire category
 * @return {boolean} If the object catégory is the same as the desire category.
 */
function filterCategory(obj, category) {
    return obj?.category?.toLowerCase().includes(category.toLowerCase());
}

export {
    getCsvContent,
    getCategoryOptions,
    filterCategory
}