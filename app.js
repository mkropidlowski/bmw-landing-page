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

        const card = document.createElement('div');
        card.classList.add('flip-card');
        card.classList.add('bmw-photo-box');
        const flipCardInner = document.createElement('div');
        flipCardInner.classList.add('flip-card-inner');
        card.appendChild(flipCardInner);


        const flipCardFront = document.createElement('div');
        flipCardFront.classList.add('flip-card-front');
        flipCardInner.appendChild(flipCardFront);
        flipCardFront.innerHTML = `<img src="${data.source}" alt="E90" class="bmw-img">`;
    
        bmwPhotoBox.appendChild(card);

        
        const backCard = document.createElement('div');
        backCard.classList.add('flip-card-back');

        const detailDiv = document.createElement('div');
        detailDiv.classList.add('detail-div');
        backCard.appendChild(detailDiv);

            detailDiv.innerHTML = `
                <p><b>${data.model}</b></p>
                <p><b>${data.modelYear}</b></p>
                <p>${data.shortText}</p>
        
        `;
        flipCardInner.appendChild(backCard);
        
    });

}

    
