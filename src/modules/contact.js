import '../style.css';

export default function loadContact() {

    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.classList.add("content-contact");

    const topDiv = document.createElement('div');
    topDiv.classList.add('top');

    //Creating Top div elements
    let cards = [];
    let iElements = [];
    let pElements = [];

    for(let i = 0; i<3; i++){
        let card = document.createElement('div');
        card.classList.add('card');
        cards.push(card);

        let i = document.createElementNS('i');
        iElements.push(i);

        let p = document.createElementNS('p');
        pElements.push(p);
    }

    iElements[0].classList.add('fa-sharp','fa-solid', 'fa-location-dot');
    iElements[0].setAttribute('style', 'color: #ffffff;');
    pElements[0].textContent ="Via Principe Amedeo, 251, ";
    pElements[0].innerHTML += '<br>';
    pElements[0].textContent ="00185 Roma RM, Italy";

    iElements[1].classList.add('fa-solid', 'fa-phone-volume');
    iElements[1].setAttribute('style', 'color: #ffffff;');
    pElements[1].textContent = '+39 00 000000';

    iElements[2].classList.add('fa-solid', 'fa-envelope');
    iElements[2].setAttribute('style', 'color: #ffffff;');
    pElements[2].textContent = 'byteingtime@restaurant.it';

    for(let i = 0; i<3; i++){
        cards[i].appendChild(iElements[i]);
        cards[i].appendChild(pElements[i]);
        topDiv.appendChild(cards[i]);
    }

    contentDiv.appendChild(topDiv);

    const contactFormDiv = document.createElement('div');
    const contactFormH3 = document.createElement('h3');
    const contactForm = document.createElement('form');
    
    contactFormDiv.classList.add('contact-form');
    contactFormH3.textContent = 'Book now in Advance';
    contactForm.setAttribute('action','#');
    contactForm.setAttribute('method','post');

    //creating Form in contact-form div
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const input3 = document.createElement('input');
    const select1 = document.createElement('select');
    const formBtn = document.createElement('button');
    
    input1.setAttribute('type', 'text');
    input1.setAttribute('placeholder', 'Full Name');
    input1.required = true;
    
    input2.setAttribute('type', 'date');
    input2.id = 'date';
    input2.required = true;

    select1.setAttribute('name', 'person');
    select1.id = 'persons';
    select1.required = true;

    input3.setAttribute('type', 'email');
    input3.setAttribute('placeholder', 'Email');
    input3.id='email';
    input3.required = true;


    formBtn.textContent = 'Book';
    formBtn.setAttribute('type', 'submit');
    formBtn.id= 'form-btn';
    formBtn.classList.add('btn');

    //create option elements inside select
    for(let i = 0; i<8; i++){

        if(i === 0){

            const option = document.createElement('option');
            option.value = "";
            option.disabled = true;
            option.selected = true;
            option.textContent = "Number of persons";
            select1.appendChild(option);
            continue;

        } else if(i === 7){

            const option = document.createElement('option');
            option.value = "more";
            option.textContent = "More";
            select1.appendChild(option);   
            continue;     

        }

        const option = document.createElement('option');
        option.value = `${i}`;
        option.textContent = `${i}`;
        select1.appendChild(option);

    }

    formBtn.addEventListener('click', (e)=>{
        e.preventDefault();
    });

    contactForm.appendChild(input1);
    contactForm.appendChild(select1);
    contactForm.appendChild(input2);
    contactForm.appendChild(input3);
    contactForm.appendChild(formBtn);

    //ADD navbar classes
    const list = document.querySelector('ul');
    const listItems  = list.querySelectorAll('li');

    listItems[0].classList.remove('li-active');
    listItems[0].querySelector('a').classList.remove('a-active');

    listItems[1].classList.remove('li-active');
    listItems[1].querySelector('a').classList.remove('a-active');

    listItems[2].classList.add('li-active');
    listItems[2].querySelector('a').classList.add('a-active');

}