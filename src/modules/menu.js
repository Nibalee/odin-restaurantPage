import '../style.css'
import menuImage from '../img/menu.jpg';

export default function loadMenu() {
    
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';

    const bannerDiv = document.createElement('div');
    const bannerH2 = document.createElement('h2');
    const menuDiv = document.createElement('div');
    const menuImg = document.createElement('img');

    bannerDiv.classList.add('banner', 'top-title');
    bannerH2.textContent = 'Our Menu';

    menuDiv.classList.add('menu');
    menuImg.src = menuImage;

    bannerDiv.appendChild(bannerH2);
    menuDiv.appendChild(menuImg);

    //ADD navbar classes
    const list = document.querySelector('ul');
    const listItems  = list.querySelectorAll('li');

    listItems[0].classList.remove('li-active');
    listItems[0].querySelector('a').classList.remove('a-active');

    listItems[1].classList.add('li-active');
    listItems[1].querySelector('a').classList.add('a-active');

    listItems[2].classList.remove('li-active');
    listItems[2].querySelector('a').classList.remove('a-active');

    contentDiv.appendChild(bannerDiv);
    contentDiv.appendChild(menuDiv);

}