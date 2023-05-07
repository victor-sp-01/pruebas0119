import Main from "../components/Main.js"
import updateRoute from "./updateRoute.js"
const updatePage =()=>{

    document.getElementById('root').textContent = ''

    Main()
    updateRoute()
}
export default updatePage