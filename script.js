const boxes=document.querySelectorAll(".box");
const resetBtn=document.querySelector("#reset-btn");
const newBtn=document.querySelector("#new-btn");
const msgContainer=document.querySelector('.msg-container');
const msg=document.querySelector("#msg");
let turnO=true;

let count=0;
const winPatterns=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];


const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText='';
    }
}

const resetGame=()=>{
    count=0;
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const checkWinner=(count)=>{
    for(let pattern of winPatterns)
    {
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        
        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3)
            {
                disableBoxes();
                msg.innerText=`Congratulations,winner is ${p1}`;
                msgContainer.classList.remove('hide');
            }
            else if(count===9)
            {
                msg.innerText=`Game is Drawn, You can play again`;
                msgContainer.classList.remove('hide');
                count=0;
            }
        }
        
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO && box.innerText==="")
        {
            count++;
            box.innerText="O";
            turnO=false;

        }
        else if( turnO===false && box.innerText===""){
            count++;
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner(count);
    });
});

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);