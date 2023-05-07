import { Hash } from "../helpers/Params.js"
import Element from "../libs/Element.js" 
const Inicio =()=>{

    const $Element = new Element({classID:'main'})
    $Element.create({
        element: `
            <div class="div_IMm7H main">
                <div class="div_TnQSG">
                    <a class="button_iyguI">
                        <img src="./img/avatar/17.jpg">
                    </a>
                </div>
                <span class="span_oKLRy"></span>
                <div class="div_NnB3v">
                    <div class="div_9FqcH"></div>
                </div>
                <span class="span_oKLRy"></span>
                <div class="div_TnQSG">
                    <a class="button_iyguI"><i class="fa-solid fa-gear"></i></a>
                </div>
            </div>
        `
    })

    const hash = Hash(0)

    const Pages = [
        { id: "", icon: '<i class="fa-solid fa-house"></i>' },
        { id: "message", icon: '<i class="fa-solid fa-comments"></i>' },
        { id: "games", icon: '<i class="fa-solid fa-gamepad"></i>' },
        { id: "pictures", icon: '<i class="fa-solid fa-image"></i>' },
    ];

    $Element.findChild('.div_9FqcH').innerHTML = Pages.map(({id, icon}) => {
        const currentPage = hash[0] || ''
        return `
            <a class="button_iyguI${ id === currentPage ? ' focus' : '' }">${ icon }</a>
        `
    }).join('') 
}
export default Inicio