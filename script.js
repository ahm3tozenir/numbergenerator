// elemanların seçimlenmesi
const h1= document.querySelector('h1');
const inf= document.querySelector('div');
const inp = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('.num-area');
const ul = document.createElement('ul');

//* button ve input için css
h1.style.textAlign='center';
inp.style.display='inline-block';
inp.style.margin='50px 20px 20px 300px';
inp.style.padding='20px 40px';
inp.style.border='2px solid blue'
btn.style.display='inline-block';
btn.style.margin='50px 20px 20px';
btn.style.padding='20px';
btn.style.border='2px solid red';


//buttona event listener eklendi
btn.addEventListener('click',clicked);

// tıklamanın çalıştırdığı fonksiyon
function clicked() {
    let val = Number(inp.value); 
    ul.innerHTML=''; // her tıklama sonrası yeni bir boş ul
    inf.innerHTML='';
    h1.textContent=`0 dan - ${val}]  asal, tek ve çift sayıların gösterimi`
    let red = document.createElement('div');
    let green = document.createElement('div');
    let blue = document.createElement('div');

    // css
    red.textContent='asal sayıları temsil eder'
    red.style.backgroundColor='red';
    red.style.display='inline-block'
    red.style.padding='8px 10px';
    green.textContent='tek sayıları temsil eder'
    green.style.backgroundColor='green';
    green.style.display='inline-block'
    green.style.padding='8px 10px';
    blue.textContent='çift sayıları temsil eder'
    blue.style.backgroundColor='blue';
    blue.style.display='inline-block'
    blue.style.padding='8px 10px';


    

    for (let i = 0; i <=val; i++) {

        // inf divine red,green ve blue açıklaması
        inf.appendChild(red);
        inf.appendChild(green);
        inf.appendChild(blue);

        const li = document.createElement('li');
        li.textContent = i;
        ul.appendChild(li);
        // css işlemleri
        ul.style.display='flex';
        ul.style.flexWrap='wrap';
        ul.style.listStyleType='none';
        li.style.padding='40px';
        li.style.margin='5px';
        li.style.color='white';
        li.style.fontWeight='bold';
        li.style.fontSize='1.5rem';
        // css işlemleri

      let prime = true; //asalı saptamak için  default değeri

      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          prime = false; // asal olmayanlara gelen değer
        }
      }
    //* 1 ve 0 ı ve kullanarak asal sayılar 2 den başladığı için dahil etmedik
      if (prime && (i != 1 && i != 0)) { //!  prime değeri false olunca alt satırlardaki else if sorgusuna geçiyor
        li.style.backgroundColor='red'; //! Asal sayıların rengi
      }
    //* 2 ye bölümden 1 kalan tek sayılar grubuna dahil oldu
      else if(i%2==1){
        li.style.backgroundColor='green'; //! tek sayıların rengi
      }
      else{
        li.style.backgroundColor='blue'; //! çift sayıların rengi
      }
    }
    div.appendChild(ul);
  }


