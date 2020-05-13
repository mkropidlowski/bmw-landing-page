const bmwPhotoBox = document.querySelector('.photos-container');
const btnExit = document.querySelector('.exit');
const bmwCard = document.querySelector('.bmw-card');
const vGeneration = document.querySelector('.v-generation');

getData();

async function getData() {
    const response = await fetch('car.json');
    const output = await response.json();

    viewModel(output);
};


function viewModel(output) {

    output.forEach(data =>{

        // const card = document.createElement('div');
        // card.classList.add('bmw-photo-box');
        // card.innerHTML = `<img src="${data.source}" alt="E90" class="bmw-img">`;

        const card = document.createElement('div');
        card.classList.add('flip-card');
        card.classList.add('bmw-photo-box');
        const flipCardInner = document.createElement('div');
        flipCardInner.classList.add('flip-card-inner');
        card.appendChild(flipCardInner);


        const backCard = document.createElement('div');
        backCard.classList.add('flip-card-back');

            backCard.innerHTML = `
                <p>${data.model}</p>
                <p>${data.modelYear}</p>
                <p>${data.shortText}</p>
        
        `;
        flipCardInner.appendChild(backCard);

        const flipCardFront = document.createElement('div');
        flipCardFront.classList.add('flip-card-front');
        flipCardInner.appendChild(flipCardFront);
        flipCardFront.innerHTML = `<img src="${data.source}" alt="E90" class="bmw-img">`;
    
        //infocard było card
        //card.addEventListener('click', () =>{
          //showDetailsCard(data);
            

         

    //    });

        bmwPhotoBox.appendChild(card);
    });



}

    


// function showDetailsCard(data) {


//     const backCard = document.createElement('div');
//     backCard.classList.add('flip-card-back');

//     console.log("Model: ", data.model);
//         backCard.innerHTML = `
//             <p>${data.model}</p>
//             <p>${data.modelYear}</p>
//             <p>${data.shortText}</p>
    
//     `;
  
//     bmwPhotoBox.appendChild(backCard);


//         //bmwCard.appendChild(infoCard);

  
 

    
// }


// wypisywanie działa, teraz dodać okienko które będzie zawierało te informacje o danym modelu
// tak samo mo