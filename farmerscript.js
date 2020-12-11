let sv=0; //starting animal value
let foxonly=false; //play with fox-only dice
let wolfonly=false; //play with wolf-only dice
let godmode=false;

let p1 = [n='Arek',r=sv,s=sv,p=sv,c=sv,h=sv,sd=sv,bg=sv];
let p2 = [n='Julia',r=sv,s=sv,p=sv,c=sv,h=sv,sd=sv,bg=sv];
let p3 = [n='Kamil',r=sv,s=sv,p=sv,c=sv,h=sv,sd=sv,bg=sv];
let p4 = [n='Ola',r=sv,s=sv,p=sv,c=sv,h=sv,sd=sv,bg=sv];

let turn = 1;
let players = 4;

let dice1 = ['r','r','r','r','r','r','s','s','s','p','c','w'];
let dice2 = ['r','r','r','r','r','r','s','s','p','p','h','f'];

// RABBIT, SHEEP, PIG, COW, HORSE, SMALL DOG, BIG DOG
//set animal limit
let animals = [60-sv*players,24-sv*players,20-sv*players,12-sv*players,4-sv*players,4-sv*players,2-sv*players]
const animalsgraphics = ["media/rabbit.jpg", "media/sheep.jpg", "media/pig.jpg", "media/cow.jpg", "media/horse.jpg", "media/smalldog.jpg", "media/bigdog.jpg"];

if (foxonly === true) {
  dice2 = ['f','f','f','f','f','f','f','f','f','f','f','f']
}

if (wolfonly === true) {
  dice1 = ['w','w','w','w','w','w','w','w','w','w','w','w']
}

if (godmode === true) {
  dice1 = ['r','r','r','r','r','s','s','s','s','p','c','c'];
  dice2 = ['r','r','r','r','r','s','s','s','s','p','h','h'];
}

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
  document.querySelector('.P1').style.border='solid #FFFFFF';
  document.querySelector('.P2').style.border='solid #FFFFFF';
  document.querySelector('.P3').style.border='solid #FFFFFF';
  document.querySelector('.P4').style.border='solid #FFFFFF';
  document.getElementById('p1trade').style.visibility='hidden';
  document.getElementById('p2trade').style.visibility='hidden';
  document.getElementById('p3trade').style.visibility='hidden';
  document.getElementById('p4trade').style.visibility='hidden';
  switch (turn) {
    case 1:
    document.querySelector('.P1').style.border='solid #00FF00';
    document.getElementById('p1trade').style.visibility='visible';
      break;
    case 2:
    document.querySelector('.P2').style.border='solid #00FF00';
    document.getElementById('p2trade').style.visibility='visible';
      break;
    case 3:
    document.querySelector('.P3').style.border='solid #00FF00';
    document.getElementById('p3trade').style.visibility='visible';
      break;
    case 4:
    document.querySelector('.P4').style.border='solid #00FF00';
    document.getElementById('p4trade').style.visibility='visible';
      break;
  }
};

function tradedisplay(x){
  let div = document.getElementById('trade');
  let player = selectplayer(x.id);
  div.textContent = player[0] + ' trading...';
};

function nextplayer(x){
  turn++
  if (turn === 5) {
    turn = 1;
  }
};

function selectplayer(x){
  switch (x) {
    case 'p1trade':
      return p1
      break;
    case 'p2trade':
      return p2
      break;
    case 'p3trade':
      return p3
      break;
    case 'p4trade':
      return p4
      break;
  }
};

function parseroll(player,res){
  let res1 = res.d1;
  let res2 = res.d2;
  let animal = 0;

  if (res1 === 'w') {
    addanimal(player,'r',-findanimals(player,'r'))
    addanimal(player,'s',-findanimals(player,'s'))
    addanimal(player,'p',-findanimals(player,'p'))
    addanimal(player,'c',-findanimals(player,'c'))
  }

  if (res2 ==='f') {
    addanimal(player,'r',-findanimals(player,'r'))
  }

  if (res1 === res2) {
    if (res1 ==='r') {
      addanimal(turn,res1,1+Math.floor(findanimals(player,'r')/2));
      return;
    }
    if (res1 ==='s') {
      addanimal(turn,res1,1+Math.floor(findanimals(player,'s')/2));
      return;
    }
    if (res1 ==='p') {
      addanimal(turn,res1,1+Math.floor(findanimals(player,'p')/2));
      return;
    }
  }

   if (res1 === 'r' || res2 ==='r') {
     animal = findanimals(player,'r');
     addanimal(turn,'r', Math.floor((animal+1)/2));
   };

   if (res1 === 's' || res2 ==='s') {
    animal = findanimals(player,'s');
    addanimal(turn,'s', Math.floor((animal+1)/2));
  };

  if (res1 === 'p' || res2 ==='p') {
   animal = findanimals(player,'p');
   addanimal(turn,'p', Math.floor((animal+1)/2));
  };

  if (res1 === 'c' || res2 ==='c') {
   animal = findanimals(player,'c');
   addanimal(turn,'c', Math.floor((animal+1)/2));
  };

  if (res1 === 'h' || res2 ==='h') {
   animal = findanimals(player,'h');
   addanimal(turn,'h', Math.floor((animal+1)/2));
  };

  if (res1 === 'w' && findanimals(player,'bg') >= 1) {
    addanimal(player,'bg',-1);
    return;
  }

  if (res2 === 'f' && findanimals(player,'sd') >= 1) {
    addanimal(player,'sd',-1);
    return;
  }

};

function findanimals(player,animal){
  switch (player) {
    case 1:
      switch (animal) {
        case 'r': return p1[1];
        break;
        case 's': return p1[2];
        break;
        case 'p': return p1[3];
        break;
        case 'c': return p1[4];
        break;
        case 'h': return p1[5];
        break;
        case 'sd': return p1[6];
        break;
        case 'bg': return p1[7];
        break;
      }
      break;
    case 2:
      switch (animal) {
        case 'r': return p2[1];
        break;
        case 's': return p2[2];
        break;
        case 'p': return p2[3];
        break;
        case 'c': return p2[4];
        break;
        case 'h': return p2[5];
        break;
        case 'sd': return p2[6];
        break;
        case 'bg': return p2[7];
        break;
      }
      break;
    case 3:
      switch (animal) {
        case 'r': return p3[1];
        break;
        case 's': return p3[2];
        break;
        case 'p': return p3[3];
        break;
        case 'c': return p3[4];
        break;
        case 'h': return p3[5];
        break;
        case 'sd': return p3[6];
        break;
        case 'bg': return p3[7];
        break;
      }
      break;
    case 4:
      switch (animal) {
        case 'r': return p4[1];
        break;
        case 's': return p4[2];
        break;
        case 'p': return p4[3];
        break;
        case 'c': return p4[4];
        break;
        case 'h': return p4[5];
        break;
        case 'sd': return p4[6];
        break;
        case 'bg': return p4[7];
        break;
      }
    break;
  }
  }

function addanimal(player,animal,q){
  switch (player) {
    case 1:
      switch (animal) {
        case 'r':
          if (animals[0] < q) {
           p1[1]=p1[1] + animals[0];
           animals[0]=animals[0]-animals[0];
         } else {
          p1[1]=p1[1]+q;
          animals[0]=animals[0]-q;
        }
        break;
        case 's':
        if (animals[1] < q) {
         p1[2]=p1[2] + animals[1];
         animals[1]=animals[1]-animals[1];
       } else {
        p1[2]=p1[2]+q;
        animals[1]=animals[1]-q;
      }
        break;
        case 'p':
        if (animals[2] < q) {
         p1[3]=p1[3] + animals[2];
         animals[2]=animals[2]-animals[2];
       } else {
        p1[3]=p1[3]+q;
        animals[2]=animals[2]-q;
      }
        break;
        case 'c':
        if (animals[3] < q) {
         p1[4]=p1[4] + animals[3];
         animals[3]=animals[3]-animals[3];
       } else {
        p1[4]=p1[4]+q;
        animals[3]=animals[3]-q;
      }
        break;
        case 'h':
        if (animals[4] < q) {
         p1[5]=p1[5] + animals[4];
         animals[4]=animals[4]-animals[4];
       } else {
        p1[5]=p1[5]+q;
        animals[4]=animals[4]-q;
      }
        break;
        case 'sd':
        if (animals[5] < q) {
         p1[6]=p1[6] + animals[5];
         animals[5]=animals[5]-animals[5];
       } else {
        p1[6]=p1[6]+q;
        animals[5]=animals[5]-q;
      }
        break;
        case 'bg':
        if (animals[6] < q) {
         p1[7]=p1[7] + animals[6];
         animals[6]=animals[6]-animals[6];
       } else {
        p1[7]=p1[7]+q;
        animals[6]=animals[6]-q;
      }
        break;
      }
      break;
    case 2:
    switch (animal) {
      case 'r':
        if (animals[0] < q) {
         p2[1]=p2[1] + animals[0];
         animals[0]=animals[0]-animals[0];
       } else {
        p2[1]=p2[1]+q;
        animals[0]=animals[0]-q;
      }
      break;
      case 's':
      if (animals[1] < q) {
       p2[2]=p2[2] + animals[1];
       animals[1]=animals[1]-animals[1];
     } else {
      p2[2]=p2[2]+q;
      animals[1]=animals[1]-q;
    }
      break;
      case 'p':
      if (animals[2] < q) {
       p2[3]=p2[3] + animals[2];
       animals[2]=animals[2]-animals[2];
     } else {
      p2[3]=p2[3]+q;
      animals[2]=animals[2]-q;
    }
      break;
      case 'c':
      if (animals[3] < q) {
       p2[4]=p2[4] + animals[3];
       animals[3]=animals[3]-animals[3];
     } else {
      p2[4]=p2[4]+q;
      animals[3]=animals[3]-q;
    }
      break;
      case 'h':
      if (animals[4] < q) {
       p2[5]=p2[5] + animals[4];
       animals[4]=animals[4]-animals[4];
     } else {
      p2[5]=p2[5]+q;
      animals[4]=animals[4]-q;
    }
      break;
      case 'sd':
      if (animals[5] < q) {
       p2[6]=p2[6] + animals[5];
       animals[5]=animals[5]-animals[5];
     } else {
      p2[6]=p2[6]+q;
      animals[5]=animals[5]-q;
    }
      break;
      case 'bg':
      if (animals[6] < q) {
       p2[7]=p2[7] + animals[6];
       animals[6]=animals[6]-animals[6];
     } else {
      p2[7]=p2[7]+q;
      animals[6]=animals[6]-q;
    }
      break;
    }
    break;
    case 3:
    switch (animal) {
      case 'r':
        if (animals[0] < q) {
         p3[1]=p3[1] + animals[0];
         animals[0]=animals[0]-animals[0];
       } else {
        p3[1]=p3[1]+q;
        animals[0]=animals[0]-q;
      }
      break;
      case 's':
      if (animals[1] < q) {
       p3[2]=p3[2] + animals[1];
       animals[1]=animals[1]-animals[1];
     } else {
      p3[2]=p3[2]+q;
      animals[1]=animals[1]-q;
    }
      break;
      case 'p':
      if (animals[2] < q) {
       p3[3]=p3[3] + animals[2];
       animals[2]=animals[2]-animals[2];
     } else {
      p3[3]=p3[3]+q;
      animals[2]=animals[2]-q;
    }
      break;
      case 'c':
      if (animals[3] < q) {
       p3[4]=p3[4] + animals[3];
       animals[3]=animals[3]-animals[3];
     } else {
      p3[4]=p3[4]+q;
      animals[3]=animals[3]-q;
    }
      break;
      case 'h':
      if (animals[4] < q) {
       p3[5]=p3[5] + animals[4];
       animals[4]=animals[4]-animals[4];
     } else {
      p3[5]=p3[5]+q;
      animals[4]=animals[4]-q;
    }
      break;
      case 'sd':
      if (animals[5] < q) {
       p3[6]=p3[6] + animals[5];
       animals[5]=animals[5]-animals[5];
     } else {
      p3[6]=p3[6]+q;
      animals[5]=animals[5]-q;
    }
      break;
      case 'bg':
      if (animals[6] < q) {
       p3[7]=p3[7] + animals[6];
       animals[6]=animals[6]-animals[6];
     } else {
      p3[7]=p3[7]+q;
      animals[6]=animals[6]-q;
    }
      break;
    }
    break;
    case 4:
    switch (animal) {
      case 'r':
        if (animals[0] < q) {
         p4[1]=p4[1] + animals[0];
         animals[0]=animals[0]-animals[0];
       } else {
        p4[1]=p4[1]+q;
        animals[0]=animals[0]-q;
      }
      break;
      case 's':
      if (animals[1] < q) {
       p4[2]=p4[2] + animals[1];
       animals[1]=animals[1]-animals[1];
     } else {
      p4[2]=p4[2]+q;
      animals[1]=animals[1]-q;
    }
      break;
      case 'p':
      if (animals[2] < q) {
       p4[3]=p4[3] + animals[2];
       animals[2]=animals[2]-animals[2];
     } else {
      p4[3]=p4[3]+q;
      animals[2]=animals[2]-q;
    }
      break;
      case 'c':
      if (animals[3] < q) {
       p4[4]=p4[4] + animals[3];
       animals[3]=animals[3]-animals[3];
     } else {
      p4[4]=p4[4]+q;
      animals[3]=animals[3]-q;
    }
      break;
      case 'h':
      if (animals[4] < q) {
       p4[5]=p4[5] + animals[4];
       animals[4]=animals[4]-animals[4];
     } else {
      p4[5]=p4[5]+q;
      animals[4]=animals[4]-q;
    }
      break;
      case 'sd':
      if (animals[5] < q) {
       p4[6]=p4[6] + animals[5];
       animals[5]=animals[5]-animals[5];
     } else {
      p4[6]=p4[6]+q;
      animals[5]=animals[5]-q;
    }
      break;
      case 'bg':
      if (animals[6] < q) {
       p4[7]=p4[7] + animals[6];
       animals[6]=animals[6]-animals[6];
     } else {
      p4[7]=p4[7]+q;
      animals[6]=animals[6]-q;
    }
      break;
    }
    break;
  }
}

function drawavailabledanimals(){
  let size = 40;
  let s = 0;
  barn = document.getElementById("barn");
  barn.textContent = 'Rabbits:' + animals[0] + '  Sheep:' + animals[1] + '  Pigs:' + animals[2] + '  Cows:' + animals[3] + '  Horses:' + animals[4] + '  Small Dogs:' + animals[5] + '  Big Dogs:' + animals[6];
  barn.appendChild(document.createElement("p"));
  for (var animal of animals) {
    for (var i = 0; i < animal; i++) {
      let elem = document.createElement("img");
      elem.src= animalsgraphics[s];
      elem.height=size;
      elem.width=size;
      barn.appendChild(elem);
   }
    s++;
  }
};

function updatescreen(){
  displayvalues();
  whichplayer();
  drawavailabledanimals();
};

updatescreen();
