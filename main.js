const area = document.querySelector('.area');
const box = document.querySelector('.box');
const boxes = document.querySelectorAll('.box')
let step = 0;

const win  = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

area.addEventListener('click',e =>{
    if(e.target.classList.contains('box') && !e.target.innerText){
        e.target.innerHTML = step % 2 === 0 ? 'X' : '0'
        step ++
        countResult()
    }
})

const countResult = ()=>{

    for (let i  =0; i< win.length;i++){
        if(boxes[win[i][0]].innerText === 'X' && boxes[win[i][1]].innerText === 'X' && boxes[win[i][2]].innerText === 'X'){
            finish('Крестики')
        } else if (boxes[win[i][0]].innerText === '0' && boxes[win[i][1]].innerText === '0' && boxes[win[i][2]].innerText === '0'){
            finish('Нолики')
        }
    }

}
const finish = (winner)=>{
    alert(`Победили ${winner}`)
        location.reload()
}
