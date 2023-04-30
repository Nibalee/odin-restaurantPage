import '../style.css';

export default function createFooter() {
    
    const footerDiv = document.createElement('footer');
    const footerP = document.createElement('p');
    const footerA = document.createElement('a');
    const footerI = document.createElement('i');

    footerP.textContent = 'Copyright © 2023 Nejd Benali';
    footerA.setAttribute('href', 'https://github.com/Nibalee');

    footerI.classList.add('fa-brands','fa-github');
    footerI.setAttribute('style', 'color: #ffffff;');

    footerA.appendChild(footerI);
    footerDiv.appendChild(footerP);
    footerDiv.appendChild(footerA);

    return footerDiv;
}