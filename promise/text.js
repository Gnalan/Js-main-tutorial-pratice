const p1=new Promise((resolve,reject)=>{
  const obj=new XMLHttpRequest();
  obj.open('GET','form.html');
  obj.onload=()=>{
      if (obj.status==200) {
          resolve(obj.responseText);
      }
      else{
          reject('file is not found');
      }
  };
  obj.send();
});
let displayForm=(value)=>{
    document.getElementById('d').innerHTML=value;
}
let displayError=(value)=>{
    document.getElementById('h').innerHTML=value;
}
p1.then((value)=>{
    displayForm(value);
}).catch((value)=>{
    displayError(value);
});