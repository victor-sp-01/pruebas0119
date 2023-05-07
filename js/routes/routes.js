import { Hash } from "../helpers/Params.js"
import Inicio from "../pages/Inicio.js"
import Message from "../pages/Message.js"

const Routes =()=>{
    const hash = Hash()
    const ruta = hash[0] || ''
    
    if( ruta === '' ) return Inicio()
    if( ruta === 'message' ) return Message()
}

export default Routes