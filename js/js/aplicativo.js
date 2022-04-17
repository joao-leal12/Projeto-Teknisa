

function preRender() {

    let CountVisibleCards = getCountVisibleCards(); 
    console.log(CountVisibleCards)
    updateVisibleCards(CountVisibleCards)

}


function getCountVisibleCards(){
   
    return Array.from(document.querySelectorAll('.card')).filter( card => card.getElementsByClassName.display || card.getElementsByClassName.display !== 'none').length    
}


function updateVisibleCards(Count ) {

    document.getElementById('countResult').textContent = Count

}