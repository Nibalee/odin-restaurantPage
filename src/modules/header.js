import loadContact from "./contact.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js"

export default function createHeader(){
    
    const header = document.createElement('header');
    const logo = document.createElement('h2');
    const list = document.createElement('ul');
    
    logo.id = "title";
    logo.textContent = "Byte'ing Time";

    const ids = [
        {
            liId : "li-home",
            aId: "a-home"
        },
        {
            liId : "li-menu",
            aId: "a-menu"
        },
        {
            liId : "li-contact",
            aId: "a-contact"
        }   
    ];

    for(let i = 0; i<3; i++){
        let listItem = document.createElement('li');
        let listA = document.createElement('a');
        listA.setAttribute('href','#');

        //Adding ids for both li and a
        listItem.id = ids[i].liId;
        listA.id = ids[i].listA;

        //appending elements
        listItem.appendChild(listA);
        list.appendChild(listItem);
    }

    header.appendChild(logo);
    header.appendChild(list);
    
    const listItems  = list.querySelectorAll('li');

    listItems[0].addEventListener('click', ()=>{
        if(listItems[0].classList.contains("li-active")){
            return;
        }else{
            loadHome();
        }
    });

    listItems[1].addEventListener('click', ()=>{
        if(listItems[1].classList.contains("li-active")){
            return;
        }else{
            loadMenu();
        }
    });

    listItems[2].addEventListener('click', ()=>{
        if(listItems[2].classList.contains("li-active")){
            return;
        }else{
            loadContact();
        }
    });
    return header;
}