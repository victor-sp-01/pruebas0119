import { Hash } from "../helpers/Params.js" 
import Element from "../libs/Element.js"
import getDataMessage from "../data/getDataMessage.js"
import ContentMessage from "../components/ContentMessage.js"
import addRemoveClass from "../helpers/addRemoveClass.js"
import BtnBack from "../elements/BtnBack.js"

const Message =async()=>{
    
    const hash = Hash() 
    const $Element = new Element({classID:'#main'})

    $Element.create({
        element : `
            <div class="div_Ut91x" >
                <div class="div_jZ1Pa">
                    <div class="div_TnQSG"> 
                    </div>
                    <span class="span_oKLRy"></span>
                    <div class="div_3YgiM">
                        <div class="div_M0ShG"></div>
                    </div>
                </div>
                <div class="div_bIPDq ${ hash.length >= 2 ? 'active' : '' }"></div>
            </div>
        `
    })

    //add BtnBack
    BtnBack({
        element : $Element.findChild('.div_TnQSG'),
        className : 'button_iyguI',
        html : '<i class="fa-solid fa-arrow-left"></i>'
    })

    //CALL CONTENT MESSAGE
    const callContentMessage=( messages, id )=>{
        const [ data ] = messages.filter( message => message.id === id ) || []
        const element = $Element.findChild('.div_bIPDq')
        element.innerHTML = ''
        return ContentMessage({
            element, 
            data
        })  
    }
 
    //LOAD CHATS USER
    const messages = await getDataMessage() 

    $Element.findChild('.div_M0ShG').innerHTML = messages.map( message => {
        return `
        <button class="button_5ZxiA icon${ message.id === hash[1] ? ' focus' : '' }" data-id="${ message.id }" >
            <img src="./img/avatar/${ message.avatarUser }">
        </button>
        `
    }).join('')

    //change Message USER
    $Element.findChild('.div_M0ShG').addEventListener('click', e => {

        if( e.target.classList.contains('button_5ZxiA') ){
            $Element.findChild('.div_bIPDq').classList.add('active')
            if( e.target.classList.contains('focus') ) return
                addRemoveClass( $Element.findChild('.button_5ZxiA.icon.focus'), e.target, 'focus' )

                const idMessage = e.target.dataset.id
                history.replaceState(null, null, `#message/${ idMessage }`)
                return callContentMessage(messages, idMessage)
            
        }
         
    })
 
    if( hash.length >= 2 ) return callContentMessage(messages,hash[1]) 

}
export default Message