export default{
    showCategories(){
        const categories = document.querySelector("#categories");
        const ws = new Worker('../js/workers/ws.js', {type: 'module'});
        ws.postMessage({module: 'showCategories'});
        ws.addEventListener("message", (e)=>{
            categories.innerHTML = e.data;
        })  
    },

    showSearch(){
        let inputSelect = document.querySelector("#recipe");
        const meals = document.querySelector("#meals");
        const ws = new Worker('../js/workers/ws.js', {type: 'module'});

        inputSelect.addEventListener('input', (e)=>{
            ws.postMessage({module: 'showSearch', data: inputSelect.value});
            ws.addEventListener("message", (event)=>{
                meals.innerHTML = event.data
            })
        })

        inputSelect.addEventListener('keydown', (e)=>{
            meals.innerHTML = '';
        })

    }

}