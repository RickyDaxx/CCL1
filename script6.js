const score = document.querySelector('.score span')
const holes = document.querySelectorAll('.hole')
const start_btn = document.querySelector('.buttons .start')
const stop_btn = document.querySelector('.buttons .stop')
const cursor = document.querySelector('.hand img')

let failures = 0

window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"
})

window.addEventListener('click', () => {
    cursor.style.animation = 'none'
    setTimeout(() => {
        cursor.style.animation = ''
    }, 101)
})

start_btn.addEventListener('click', () => {
    start_btn.style.display = 'none'
    stop_btn.style.display = 'inline-block'

    let holee
    let points = 0

    const game = setInterval(() => {

        let ran = Math.floor(Math.random() * 5)
        holee = holes[ran]

        let set_img = document.createElement('img')
        set_img.setAttribute('src', '/photos/owner.PNG')
        set_img.setAttribute('class', 'owner')
        holee.appendChild(set_img)

        setTimeout(() => {
            if (holee.querySelector('.owner')) {
                failures++
                if (failures >= 5 && points < 20) {
                    clearInterval(game)
                    stop_btn.style.display = 'none'
                    start_btn.style.display = 'inline-block'
                    score.innerHTML = '0'
                    window.location.href = 'gameover.html'
                }
            }
            holee.removeChild(set_img)
        }, 900);
    }, 1000)

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('owner')) {
            score.innerText = ++points;
            failures = 0
        if (points >= 20) {
        clearInterval(game)
        stop_btn.style.display = 'none'
        start_btn.style.display = 'inline-block'
        score.innerHTML = '0'
        window.location.href = 'end.html'
    }
}
})

    stop_btn.addEventListener('click', () => {
        clearInterval(game)
        stop_btn.style.display = 'none'
        start_btn.style.display = 'inline-block'
        score.innerHTML = '0'
    })
})