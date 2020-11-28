let p1 = [n='Arek',r=0,s=0,p=0,c=0,h=0,sd=0,bg=0];
let p2 = [n='Julia',r=0,s=0,p=0,c=0,h=0,sd=0,bg=0];
let p3 = [n='Kamil',r=0,s=0,p=0,c=0,h=0,sd=0,bg=0];
let p4 = [n='Ola',r=0,s=0,p=0,c=0,h=0,sd=0,bg=0];

let turn = 1;

const dice1 = ['r','r','r','r','r','r','s','s','s','p','c','w'];
const dice2 = ['r','r','r','r','r','r','s','s','p','p','h','f'];

function displayvalues(){
  let l = document.querySelectorAll('span')
  let arr = [...p1,...p2,...p3,...p4];
    for (var i = 0; i < l.length; i++) {
      l[i].textContent = arr[i];
    }
};

function rolldice(){
  let roll1 = Math.floor(Math.random() * 12);
  let roll2 = Math.floor(Math.random() * 12);
  let result = {d1:dice1[roll1],d2:dice2[roll2]};
  document.getElementById('btnrolldice').disabled = true;
  document.getElementById('btnendround').disabled = false;
  updatescreen();
  displaydice(result);
  parseroll(turn,result);
  return result;
};

function endround(){
  document.getElementById('btnrolldice').disabled = false;
  document.getElementById('btnendround').disabled = true;
  nextplayer(turn);
  updatescreen();
}

function displaydice(x){
  let res1=x.d1;
  let res2=x.d2;

  switch(res1) {
    case "r": loadgraphic(1, 'rabbit.jpg')
    break;
    case "s": loadgraphic(1, 'sheep.jpg')
    break;
    case "p": loadgraphic(1, 'pig.jpg')
    break;
    case "c": loadgraphic(1, 'cow.jpg')
    break;
    case "w": loadgraphic(1, 'wolf.jpg')
    break;
  }
  switch(res2) {
    case "r": loadgraphic(2, 'rabbit.jpg')
    break;
    case "s": loadgraphic(2, 'sheep.jpg')
    break;
    case "p": loadgraphic(2, 'pig.jpg')
    break;
    case "h": loadgraphic(2, 'horse.jpg')
    break;
    case "f": loadgraphic(2, 'fox.jpg')
    break;
  }
};

function loadgraphic(dice,image){
  if (dice === 1) {
    document.getElementById('dice1').innerHTML = '<img src=media/'+image+'>'
  }
  if (dice === 2) {
    document.getElementById('dice2').innerHTML = '<img src=media/'+image+'>'
  }
};

function whichplayer(){
  switch (turn) {
    case 1:
    document.querySelector('.P1').style.border='solid #00FF00';
    document.querySelector('.P2').style.border='solid #FFFFFF';
    document.querySelector('.P3').style.border='solid #FFFFFF';
    document.querySelector('.P4').style.border='solid #FFFFFF';
      break;
    case 2:
    document.querySelector('.P1').style.border='solid #FFFFFF';
    document.querySelector('.P2').style.border='solid #00FF00';
    document.querySelector('.P3').style.border='solid #FFFFFF';
    document.querySelector('.P4').style.border='solid #FFFFFF';
      break;
    case 3:
    document.querySelector('.P1').style.border='solid #FFFFFF';
    document.querySelector('.P2').style.border='solid #FFFFFF';
    document.querySelector('.P3').style.border='solid #00FF00';
    document.querySelector('.P4').style.border='solid #FFFFFF';
      break;
    case 4:
    document.querySelector('.P1').style.border='solid #FFFFFF';
    document.querySelector('.P2').style.border='solid #FFFFFF';
    document.querySelector('.P3').style.border='solid #FFFFFF';
    document.querySelector('.P4').style.border='solid #00FF00';
      break;
  }
};

function nextplayer(x){
  turn++
  if (turn === 5) {
    turn = 1;
  }
};

function parseroll(player,res){
  let res1 = res.d1;
  let res2 = res.d2;

  if (res1 === res2) {
    if (res1 ==='r') {
      addanimal(turn,res1,1)
    }
    if (res1 ==='s') {
      addanimal(turn,res1,1)
    }
    if (res1 ==='p') {
      addanimal(turn,res1,1)
    }
    if (res1 ==='c') {
      addanimal(turn,res1,1)
    }
  }
};

function addanimal(player,animal,q){
  switch (player) {
    case 1:
      switch (animal) {
        case 'r': p1[1]=p1[1]+q;
        break;
        case 's': p1[2]=p1[2]+q;
        break;
        case 'p': p1[3]=p1[3]+q;
        break;
        case 'c': p1[4]=p1[4]+q;
        break;
        case 'h': p1[5]=p1[5]+q;
        break;
        case 'sd': p1[6]=p1[6]+q;
        break;
        case 'bg': p1[7]=p1[7]+q;
        break;
      }
      break;
    case 2:
      switch (animal) {
        case 'r': p2[1]=p2[1]+q;
        break;
        case 's': p2[2]=p2[2]+q;
        break;
        case 'p': p2[3]=p2[3]+q;
        break;
        case 'c': p2[4]=p2[4]+q;
        break;
        case 'h': p2[5]=p2[5]+q;
        break;
        case 'sd': p2[6]=p2[6]+q;
        break;
        case 'bg': p2[7]=p2[7]+q;
        break;
      }
      break;
    case 3:
      switch (animal) {
        case 'r': p3[1]=p3[1]+q;
        break;
        case 's': p3[2]=p3[2]+q;
        break;
        case 'p': p3[3]=p3[3]+q;
        break;
        case 'c': p3[4]=p3[4]+q;
        break;
        case 'h': p3[5]=p3[5]+q;
        break;
        case 'sd': p3[6]=p3[6]+q;
        break;
        case 'bg': p3[7]=p3[7]+q;
        break;
      }
      break;
    case 4:
      switch (animal) {
        case 'r': p4[1]=p4[1]+q;
        break;
        case 's': p4[2]=p4[2]+q;
        break;
        case 'p': p4[3]=p4[3]+q;
        break;
        case 'c': p4[4]=p4[4]+q;
        break;
        case 'h': p4[5]=p4[5]+q;
        break;
        case 'sd': p4[6]=p4[6]+q;
        break;
        case 'bg': p4[7]=p4[7]+q;
        break;
      }
    break;
  }
}

function updatescreen(){
  displayvalues();
  whichplayer();
};

updatescreen();
