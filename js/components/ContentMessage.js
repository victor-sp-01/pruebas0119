import { Hash } from "../helpers/Params.js"
import Element from "../libs/Element.js"
import Loader from "../elements/Loader.js"
import getDataMessages from "../data/getDataMessages.js"
import LstMessage from "./LstMessage.js"
import addRemoveClass from "../helpers/addRemoveClass.js"
import BtnBack from "../elements/BtnBack.js"

const ContentMessage =async({ element = false, data = false } = {})=>{
    const hash = Hash()

    const $Element = new Element({ element })
    $Element.create({
        element : (()=>{
            if( !data ) return `
                <div class="div_tgpzg" >
                    <img src="./img/icons/no-content.png">
                </div>
            `
            return `
                <div class="div_Q9p0S">
                    <div class="div_OQ4h8">
                        <div class="div_sV1bn" ></div>
                        <a href="#message" class="button_iyguI small"><i class="fa-solid fa-arrow-left"></i></a>
                        <a class="a_6K8NM"><img src="./img/avatar/${data.avatarUser}" class="imgCircle"></a>
                    </div>
                    <div class="div_WuwwT">
                        <div class="fullWindown" ></div>
                    </div>
                    <div class="div_v8BKt">
                        <div class="div__5XlJf" ></div>
                        <form class="form__BhSSn" >
                            <input name="idUserSet" value="ViguHfIuocazFD7" hidden>
                            <input name="idUserGet" value="${hash[1]}" hidden>
                            <label class="label__ebgC1" >
                                <textarea class="textarea__nl1oT" name="message" placeholder="mensaje" ></textarea>
                            </label>
                            <label class="label__7qhGw" >
                            <input  type="file" accept="image/*" name="files" multiple ><i class="fa-solid fa-image"></i>
                            </label>
                            <button type="submit" class="button__TCxrT" ><i class="fa-solid fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>            
            `
        })()
    }) 

    //mensajes
    if( !data ) return
    Loader( $Element.findChild('.div_WuwwT .fullWindown') )
 
    const chats = (await getDataMessages()).filter(
        ({ idMessage }) => idMessage === hash[1]
    );

    const ContentMessage = $Element.findChild('.div_WuwwT') 

    const limitLoadMessage = 100
    let [ _start, _end ] = [limitLoadMessage, 0]
    const _chats = chats.slice(chats.length - _start, chats.length - _end);
 
    ContentMessage.innerHTML = _chats.length === 0 
    ? `<div class="div_tgpzg" ><img src="./img/icons/saludo.png"></div>` 
    : '<div class="div_OaE6E"></div>'

    _chats.length !== 0 && $Element.findChild('.div_OaE6E').append(LstMessage( _chats ))

    ContentMessage.addEventListener('scroll', e =>{
        const topTotal = e.currentTarget.scrollHeight
        const topUpdate = -(e.currentTarget.scrollTop) + e.currentTarget.offsetHeight

        if( topTotal === topUpdate ){
            _start+=limitLoadMessage + 1
            _end += limitLoadMessage + 1

            const _chats = chats.slice(chats.length - _start, chats.length - _end);
            _chats.length !== 0 && $Element.findChild('.div_OaE6E').prepend(LstMessage( _chats ))
        } 
    })

    $Element.findChild('.div_OaE6E').addEventListener( 'click', e => {
        if( e.target.classList.contains('a-YrGy1cQguOAKPYn') ){
            const respuesta = addRemoveClass($Element.findChild('.div_OaE6E .a-YrGy1cQguOAKPYn.active'), e.target, 'active')
            const action = $Element.findChild('.div_sV1bn')

            if( respuesta ) action.classList.add('active')
            else action.classList.remove('active')
        }
    })
 
    //form
    const _elementForm = $Element.findChild(".form__BhSSn");
    _elementForm.files.addEventListener("change", (e) => {
        const containerIMG = document.querySelector(".div__5XlJf");
        const files = e.target.files;
    
        if (files.length === 0) return containerIMG.classList.remove("active");
        containerIMG.textContent = "";
    
        for (const file of files) {
          if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
    
            reader.addEventListener("load", (e) => {
              const url = URL.createObjectURL(file);
              const img = document.createElement("img");
              img.setAttribute("src", url);
              containerIMG.append(img);
            });
          }
        }
        containerIMG.classList.add("active");
      });
    _elementForm.message.addEventListener("input", (e) => {
        const textarea = e.target;
        textarea.style.height = "20px";
        const scHeight = textarea.scrollHeight;
        textarea.style.height = `${scHeight}px`;
    });
}

export default ContentMessage 