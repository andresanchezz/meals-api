import api from '../Apis/api.js'


let ws = {

    async showCategories() {
        const data = await api.getCategories();
        let html = '';
        data.categories.forEach(element => {
            html += `

            <div class="text-center my-5 all-card">
                <h2>${element.strCategory}</h2>
                <div class="card cards-custom">
                    <img src="${element.strCategoryThumb}" class="" alt="Img of food categories">
                <div class="card-body">
                    <p class="card-text">${element.strCategoryDescription}</p>
                </div>
            </div>
            </div>
            `

        });

        return html
    },


    async showSearch(valueInput){
        let html = '';
        let data = await api.byCategories(valueInput)
        let meals = []

       try {
        data.meals.forEach(element => {
            meals.push(element)
        });
        meals.forEach(element => {
            html += `
            <div class="text-center my-5 all-card">
            <h2>${element.strMeal}</h2>
            <div class="card cards-custom">
                <img src="${element.strMealThumb}" class="" alt="Img of food categories">
        </div>
        </div>
            `
        });
       } catch (error) {
        console.log('Data not found yet');
       }

        return html
    },

    async showSearchName(valueInput){
        let html = '';
        let data = await api.byCategoriesName(valueInput)
        let meals = []

       try {
        data.meals.forEach(element => {
            meals.push(element)
        });
        meals.forEach(element => {
            html += `
            <div class="text-center my-5 all-card">
            <h2>${element.strMeal}</h2>
            <div class="card cards-custom">
                <img src="${element.strMealThumb}" class="" alt="Img of food categories">
        </div>
        </div>
            `
        });
       } catch (error) {
        console.log('Data not found yet');
       }

        return html
    }

}



self.addEventListener("message", (e) => {
    Promise.resolve(ws[`${e.data.module}`]((e.data.data) ? e.data.data : undefined)).then(res => postMessage(res));
})