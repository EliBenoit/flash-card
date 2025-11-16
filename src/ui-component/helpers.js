/**
 * Function to verify if the size props is correct. 
 * If not, it return an empty string
 * @param {Sting} size 
 * @return An empty string or a correct string for button class name.
 */
function isSizeValidClassName (size) {
    const validClassSizes = ['small', 'medium', 'big'];
    return validClassSizes.includes(size) ? size : ''; 
}

/**
 * This function handle default behavior : it check if the size is valid,
 * and if it return an empty string, define size as medium.
 * 
 * @param {String} size The desire size for button.
 * @return A correct string for size class.
 */
function getClassSize (size) {
    return isSizeValidClassName(size) ? size : 'medium';
}

export {
    isSizeValidClassName,
    getClassSize
}