const images = [
    "https://images.stockfreeimages.com/2640/sfixl/26407415.jpg",
    "https://images.stockfreeimages.com/3304/sfixl/33041473.jpg",
    "https://images.stockfreeimages.com/2128/sfixl/21289870.jpg",
    "https://images.stockfreeimages.com/680/sfixl/6800127.jpg",
];

let topLine = document.createElement('header');
topLine.setAttribute('class', 'topLine');
let wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');

wrapper.appendChild(topLine);
let bigimmage = document.createElement('div');
bigimmage.setAttribute('class', "bigimmagenone")

document.body.append(wrapper, bigimmage);
let bigimgDiv = document.createElement('div')
bigimgDiv.setAttribute('class', 'bigimgDiv')
let bigI = document.createElement('img');
 bigimmage.appendChild(bigimgDiv);
 bigimgDiv.appendChild(bigI)

function createImages(images) {
    for (let i = 0; i < images.length; i++) {
    let newImage = document.createElement('img');
    newImage.setAttribute('class', 'newImage')
      newImage.setAttribute('src', images[i]);
      newImage.setAttribute('alt', "color structures")
      topLine.appendChild(newImage);
       newImage.onclick = () =>{

    if(bigimmage.getAttribute('class') === 'bigimmagenone'){
        bigimmage.setAttribute('class', "bigimmagevisible");
        
      
    }  
    bigI.setAttribute('src', images[i]);
     bigI.setAttribute('alt', "color structures");
       
    // else

    // bigimmage.setAttribute('class', 'bigimmagenone');


      };
    }
}

    createImages(images);

