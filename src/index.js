import './styles.scss'

function titleHWrld(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'hello wrld! 5'
    elemH1.classList.add('title')
    return elemH1
}

document.body.appendChild(titleHWrld())