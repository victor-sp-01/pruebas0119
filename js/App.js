import updatePage from "./routes/updatePage.js"
const App =()=>{
    updatePage()

    addEventListener( 'hashchange', updatePage )
}

export default App