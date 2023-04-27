export default{
    showCategories(){
        let categories = document.querySelector("#categories");

        const ws = new Worker('../js/workers/ws.js', {type: 'module'});
        ws.postMessage({module: 'showCategories'});
        ws.addEventListener("message", (e)=>{
            categories.innerHTML = e.data;
            ws.terminate()
        })
    },


    showByCategories(){
        
    }


}