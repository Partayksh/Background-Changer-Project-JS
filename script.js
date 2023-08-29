// Background - Changer Project

const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
const home = document.querySelector('.Home')
home.addEventListener('click', function (disable) {
    let rem = disable.target.id;
    if (rem=='home') {
        home.style.display = 'none';
    }
   
})
button.forEach((button) => {
    return button.addEventListener('click', (id) => {
        id.target.id;
        switch (id.target.id) {
            case 'grey':
                body.style.backgroundColor = id.target.id;
                body.style.color = "black"
               
                break;
            case 'white':
                body.style.backgroundColor = id.target.id;
                body.style.color = "black"
                break;
            case 'blue':
                body.style.backgroundColor = id.target.id;
                body.style.color = "black"
                break;

            case 'yellow':
                body.style.backgroundColor = id.target.id;
                body.style.color = "black"
                break;

            case 'black':
                body.style.backgroundColor = id.target.id;
                body.style.color = "white"
                black.style.border = "2px solid white"
                break;
            case 'red':
                body.style.backgroundColor = id.target.id;
                body.style.color = "black"
                break;
        }
    })
})