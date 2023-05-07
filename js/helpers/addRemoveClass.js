const addRemoveClass =( previousElement, currentElement, className )=>{ 
    if( previousElement ) previousElement.classList.remove( className )
    if( previousElement === currentElement ){
        currentElement.classList.remove( className )
        return false
    }
    currentElement.classList.add( className )
    return true
}

export default addRemoveClass