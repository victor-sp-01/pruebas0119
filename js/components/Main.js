import Element from "../libs/Element.js"
const Main =()=>{
    const $Element = new Element({ classID : '#root' })
    $Element.create({ element : '<main class="main" id="main"></main>' })
}

export default Main