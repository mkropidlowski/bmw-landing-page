const bmwPhotoBox = document.querySelector('.photos-container');
const btnExit = document.querySelector('.exit');
const bmwCard = document.querySelector('.bmw-card');
const vGeneration = document.querySelector('.v-generation');

getData();
engineData();

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



// engine model 

const petrol = document.querySelector('.petrol-engine-model');
const diesel = document.querySelector('.diesel-engine-model');


    async function engineData() {

        const res = await fetch("engine.json");
        const result = await res.json();

        

         result.forEach(data => {

            const tabPetrol = ["1","2","3","4","5","6","7","8","9","10","11"];
        
            if(tabPetrol.includes(data.id)){
            const html = `
            
            <div class="list-header">
            <span class="main-text">${data.version}</span>
        </div>

        <div class="content hide">
            <p class="hideClass">Motor: ${data.motor}</p>
            <p class="hideClass">Max HP: ${data.maxHp}</p>
            <p class="hideClass">Acceleration: ${data.acceleration}</p>
            <p class="hideClass">Max speed: ${data.maxSpeed}</p>
            <p class="hideClass">Fuel: ${data.fuel}</p>
        </div>   
             
        `;
            petrol.innerHTML += html;
              
            };

            const tabDiesel = ["12","13","14","15","16","17"];
            if(tabDiesel.includes(data.id)){
                const html = `
                
                <div class="list-header">
                <span class="main-text">${data.version}</span>
            </div>
    
            <div class="content hide">
                <p class="hideClass">Motor: ${data.motor}</p>
                <p class="hideClass">Max HP: ${data.maxHp}</p>
                <p class="hideClass">Acceleration: ${data.acceleration}</p>
                <p class="hideClass">Max speed: ${data.maxSpeed}</p>
                <p class="hideClass">Fuel: ${data.fuel}</p>
            </div>   
                 
            `;
                diesel.innerHTML += html;
                  
                };
         });


        

}

petrol.addEventListener('click', e =>{
 
    if(e.target.classList.contains('list-header')){      
       e.target.nextElementSibling.classList.remove('hide');
    } 

    if(e.target.classList.contains('content')){
       e.target.classList.add('hide');
    }

    if(e.target.classList.contains('hideClass')){
        e.target.parentElement.classList.add('hide');   
     }
});

    



