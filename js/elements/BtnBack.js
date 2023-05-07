import Element from "../libs/Element.js";

const BtnBack =({ element = false, className = '', path = '', html = '' } = {})=>{
    const hash = location.hash.slice(1).split('/') 
    hash.pop()   

    const $Element = new Element({element})
    $Element.create({ element : `<a href="${ path || '#' + hash.join('/')  }" class="${ className }" >${ html }</a>` })
}

export default BtnBack