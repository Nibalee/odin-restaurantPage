import '../style.css';

export default function createFooter() {
    
    const footer = document.createElement('footer');
    const footerP = document.createElement('p');
    const footerA = document.createElement('a');
    const footerI = document.createElement('i');

    footerP.textContent = 'Copyright © 2023 Nejd Benali';
    footerA.setAttribute('href', 'https://github.com/Nibalee');

    footerI.classList.add('fa-brands','fa-github');
    footerI.setAttribute('style', 'color: #ffffff;');

    footerA.appendChild(footerI);
    footer.appendChild(footerP);
    footer.appendChild(footerA);

    return footer;
}