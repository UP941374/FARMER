
  let p1 = [n='1',r=0,s=0,p=0,c=0,h=0,sd=0,bg=0];
  let p2 = [n='2',r=0,s=0,p=0,c=0,h=0,sd=0,bg=0];
  let p3 = [n='3',r=0,s=0,p=0,c=0,h=0,sd=0,bg=0];
  let p4 = [n='4',r=0,s=0,p=0,c=0,h=0,sd=0,bg=0];

function displayvalues(x){
  let l = x.querySelectorAll('span')
  let arr = [...p1,...p2,...p3,...p4];
    for (var i = 0; i < l.length; i++) {
      l[i].textContent = arr[i];
    }
};


  displayvalues(document);
