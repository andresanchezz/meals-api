import api from '../Apis/api.js'


let ws = {

    async showCategories() {
        const data = await api.getCategories();
        let html = ''

        data.categories.forEach(element => {
            html += `

            <div class="text-center my-5 all-card">
                <h2>${element.strCategory}</h2>
                <div class="card cards-custom">
                <button">
                    <a href="meals.html">
                    <img src="${element.strCategoryThumb}" class="" alt="Img of food categories">
                    </a>
                </button>
                <div class="card-body">
                    <p class="card-text">${element.strCategoryDescription}</p>
                </div>
            </div>
            </div>

            `
        });
        return html
    },


    async showByCategories(){
        
    }

}



self.addEventListener("message", (e) => {
    Promise.resolve(ws[`${e.data.module}`]((e.data.body) ? e.data.body : undefined)).then(res => postMessage(res));
})