import Element from "../libs/Element.js"
const Loader =( element )=>{
    const $Element = new Element({ element })
    $Element.create({
        element : `
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        `
    }) 
}
export default Loader