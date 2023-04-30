import '../style.css';

import pizzaSlice from '../img/pizzaSlice.png';
import createHeader from './header.js';
import createFooter from './footer.js';
import loadContact from './contact.js';
import loadMenu from './menu.js';


export default function loadHome(){

    const contentDiv = document.createElement('div');


    //Create Order Description div
    const orderDescriptionDiv = document.createElement('div');

    const orderNowDiv = document.createElement('div');
    const orderNowH2 = document.createElement('h2');
    const orderNowP = document.createElement('p');
    const orderNowBtn = document.createElement('button');

    orderNowH2.textContent = "Byte'ing Time";

    orderNowP.textContent = `Looking for an unforgettable dining experience? 
                            Look no further than Byte'ing Time! Our cozy 
                            ambiance, fresh and creative dishes, and 
                            friendly service make us a top choice for 
                            foodies. Don't miss out on the chance to enjoy 
                            a truly fantastic meal at our restaurant.`;

    orderNowBtn.textContent= 'Order Now';


    //add style
    contentDiv.id = "content";
    orderDescriptionDiv.classList.add('order-description');
    orderNowDiv.classList.add('order-now');
    orderNowBtn.classList.add('btn');

    orderNowBtn.addEventListener('click', ()=>{
        loadContact();
    });

    //append elements in Order Description div
    orderNowDiv.appendChild(orderNowH2);
    orderNowDiv.appendChild(orderNowP);
    orderNowDiv.appendChild(orderNowBtn);
    orderDescriptionDiv.appendChild(orderNowDiv);


    //Create View Menu Div
    const viewMenuDiv = document.createElement('div');
    const viewMenuInfoDiv = document.createElement('div');
    const viewMenuTextDiv = document.createElement('div');
    const viewMenuTitle = document.createElement('h3');
    const viewMenuTextP = document.createElement('p');
    const viewMenuImg = document.createElement('img');
    const viewMenuBtn = document.createElement('button');

    viewMenuTitle.textContent = 'Explore Our Menu';
    viewMenuTextP.textContent = `Welcome to our pizza restaurant! We offer a delicious selection of traditional and gourmet pizzas that are sure to satisfy your cravings.
                                From classic Margherita and pepperoni pizzas to unique flavor combinations like BBQ chicken and pesto veggie, we have something for everyone.
                                Our menu also includes appetizers, salads, and desserts to round out your meal. We invite you to explore our menu online and discover
                                your new favorite pizza! Whether you're dining in or ordering for takeout, our friendly staff is ready to help you make the perfect 
                                selection.`

    viewMenuImg.src = pizzaSlice;

    viewMenuDiv.classList.add('view-menu');
    viewMenuInfoDiv.classList.add('view-menu-info');
    viewMenuTitle.id = 'view-menu-title';

    viewMenuBtn.textContent='View Menu';
    viewMenuBtn.classList.add('btn');
    viewMenuBtn.id='view-menu-btn';

    viewMenuBtn.addEventListener('click', ()=>{
        loadMenu();
    });


    viewMenuTextDiv.appendChild(viewMenuTitle);
    viewMenuTextDiv.appendChild(viewMenuTextP);
    viewMenuInfoDiv.appendChild(viewMenuTextDiv);
    viewMenuInfoDiv.appendChild(viewMenuImg);
    viewMenuDiv.appendChild(viewMenuInfoDiv);
    viewMenuDiv.appendChild(viewMenuBtn);

    contentDiv.appendChild(orderDescriptionDiv);
    contentDiv.appendChild(viewMenuDiv);

    //Create and append navBar to the body
    document.body.appendChild(createHeader());
    document.body.appendChild(contentDiv);
    document.body.appendChild(createFooter());

    //ADD navbar classes
    const list = document.querySelector('ul');
    const listItems  = list.querySelectorAll('li');

    listItems[0].classList.add('li-active');
    listItems[0].querySelector('a').classList.add('a-active');

    listItems[1].classList.remove('li-active');
    listItems[1].querySelector('a').classList.remove('a-active');

    listItems[2].classList.remove('li-active');
    listItems[2].querySelector('a').classList.remove('a-active');
}

