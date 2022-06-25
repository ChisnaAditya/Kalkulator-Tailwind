const themeSky    = document.getElementById('tema-1')
const themeYellow = document.getElementById('tema-2')

const calcScreen = document.querySelector('.display-screen')
const equalSign  = document.querySelector('.equal-sign')
const clearAll   = document.querySelector('.all-clear')

// Start Theme
themeSky.addEventListener('click',()=>{
    themeSky.classList.add('theme-1')
    themeYellow.classList.remove('theme-2')

    document.documentElement.classList.remove('dark')
})
themeYellow.addEventListener('click',()=>{
    themeSky.classList.remove('theme-1')
    themeYellow.classList.add('theme-2')

    document.documentElement.classList.add('dark')
})
// End Theme

// Start Calculator
const numbers = document.querySelectorAll('.btn')
numbers.forEach((number)=>{
    number.addEventListener('click',(event)=>{
        if(calcScreen.value == 0){calcScreen.value = ''}
        calcScreen.value += event.target.value
    })
})

equalSign.addEventListener('click',()=>{
    calcScreen.value = eval(calcScreen.value)
})

clearAll.addEventListener('click',()=>{
    calcScreen.value = '0'
})

// Program untuk Scroll ke kiri otomatis
window.addEventListener('load',()=>{
    self.setInterval(()=>{
        if(calcScreen.scrollLeft !== calcScreen.scrollWidth){
            calcScreen.scrollTo(calcScreen.scrollLeft + 1, 0)
        }
    },1)
})