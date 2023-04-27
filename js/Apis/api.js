
const getCategories = async()=>{
    try {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const data = await resp.json();
        return data

    } catch (error) {
        console.log('El error fue ', error);
    }
}


const byCategories = async (category)=>{
    try {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await resp.json();
        console.log(data);
        return data
    } catch (error) {
        console.log('El error fue ', error);
    }
}


export default {
    getCategories,
    byCategories
}