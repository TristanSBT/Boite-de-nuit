const allbuttons = document.querySelector("body")
const textNav = document.querySelector('p')

function changecolor(elementOne, elementTwo){
    if (elementOne.style.backgroundColor=="blue"){
        elementOne.style.backgroundColor="black"
        elementTwo.style.color = 'white'

    }else{
        elementOne.style.backgroundColor="blue"
        elementTwo.style.color = 'black'
    }
}

//le javascript sert à changer le fond de la page web dans //
//une autre couleur tout en changeant la couleur du texte au depbut de la page d'acceuill //