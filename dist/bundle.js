/* eslint-disable no-inner-declarations */
/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import '../styles/style.scss';

{
    const axios = require('axios');

    const charactersUrl = 'https://rickandmortyapi.com/api/character';

    const table = createTable('mainTable');
    const favsTable = createTable('favTable');

    axios.get(charactersUrl).then((res) => {
        const { data } = res;
        console.log(data);

        data.results.forEach((result) => {
            const tableRow = document.createElement('tr');

            createTableCell(tableRow, result.name, true);
            createTableCell(tableRow, result.gender);
            createTableCell(tableRow, result.species);
            createTableCell(tableRow, result.status);
            createTableCell(tableRow, result.location.name);

            table.getElementsByTagName('tbody')[0].appendChild(tableRow);
        });
    });

    function createTable(id) {
        const newTable = document.getElementById(id);
        const tableHead = document.createElement('thead');
        const tableBody = document.createElement('tbody');

        createTableCell(tableHead, 'Name');
        createTableCell(tableHead, 'Gender');
        createTableCell(tableHead, 'Species');
        createTableCell(tableHead, 'Status');
        createTableCell(tableHead, 'Location');

        newTable.appendChild(tableHead);
        newTable.appendChild(tableBody);

        return newTable;
    }

    function createTableCell(tableRow, content, favs = null) {
        const cell = document.createElement('td');
        const cellContentContainer = document.createElement('div');
        const cellSpan = document.createElement('span');
        cellSpan.textContent = content;
        cellContentContainer.appendChild(cellSpan);

        if (favs) {
            addFavouriteButton(cellContentContainer, tableRow);
        }

        cell.appendChild(cellContentContainer);

        tableRow.appendChild(cell);
    }

    function addFavouriteButton(cellContentContainer, tableRow) {
        const cellAddToFavsButton = document.createElement('button');
        cellAddToFavsButton.textContent = 'Add to Favourites';
        cellAddToFavsButton.setAttribute('class', 'btn btn-primary');
        cellAddToFavsButton.setAttribute('type', 'button');
        cellAddToFavsButton.onclick = () => {
            addFavourite(tableRow);
        };

        cellContentContainer.appendChild(cellAddToFavsButton);
    }

    function addFavourite(tableRow) {
        const newTableRow = tableRow.cloneNode(true);

        newTableRow.getElementsByTagName('button')[0].textContent = 'Remove';
        newTableRow.getElementsByTagName('button')[0].setAttribute('class', 'btn btn-danger');
        newTableRow.getElementsByTagName('button')[0].onclick = () => {
            newTableRow.remove();
        };

        favsTable.getElementsByTagName('tbody')[0].appendChild(newTableRow);
    }
}

/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import '../styles/style.scss';

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', validateForm);

const email = document.getElementById('email');
const password = document.getElementById('password');

// RFC 5322
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// minimum 8 chars, at least one letter and one number
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateForm(e) {
    e.preventDefault();

    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!passwordRegex.test(password.value)) {
        alert('The Password must contain at least one letter and one number');
        return;
    }

    alert('HTML5 validation and additional validation were successful');
}

/* eslint-disable no-inner-declarations */
/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import '../styles/style.scss';

{
    const axios = require('axios');

    const episodesUrl = 'https://rickandmortyapi.com/api/episode';

    const table = createTable('mainTable');
    const favsTable = createTable('favTable');

    axios.get(episodesUrl).then((res) => {
        const { data } = res;
        console.log(data);

        data.results.forEach((result) => {
            const tableRow = document.createElement('tr');

            createTableCell(tableRow, result.name, true);
            createTableCell(tableRow, result.air_date);
            createTableCell(tableRow, result.episode);

            table.getElementsByTagName('tbody')[0].appendChild(tableRow);
        });
    });

    function createTable(id) {
        const newTable = document.getElementById(id);
        const tableHead = document.createElement('thead');
        const tableBody = document.createElement('tbody');

        createTableCell(tableHead, 'Name');
        createTableCell(tableHead, 'Air Date');
        createTableCell(tableHead, 'Episode');

        newTable.appendChild(tableHead);
        newTable.appendChild(tableBody);

        return newTable;
    }

    function createTableCell(tableRow, content, favs = null) {
        const cell = document.createElement('td');
        const cellContentContainer = document.createElement('div');
        const cellSpan = document.createElement('span');
        cellSpan.textContent = content;
        cellContentContainer.appendChild(cellSpan);

        if (favs) {
            addFavouriteButton(cellContentContainer, tableRow);
        }

        cell.appendChild(cellContentContainer);

        tableRow.appendChild(cell);
    }

    function addFavouriteButton(cellContentContainer, tableRow) {
        const cellAddToFavsButton = document.createElement('button');
        cellAddToFavsButton.textContent = 'Add to Favourites';
        cellAddToFavsButton.setAttribute('class', 'btn btn-primary');
        cellAddToFavsButton.setAttribute('type', 'button');
        cellAddToFavsButton.onclick = () => {
            addFavourite(tableRow);
        };

        cellContentContainer.appendChild(cellAddToFavsButton);
    }

    function addFavourite(tableRow) {
        const newTableRow = tableRow.cloneNode(true);

        newTableRow.getElementsByTagName('button')[0].textContent = 'Remove';
        newTableRow.getElementsByTagName('button')[0].setAttribute('class', 'btn btn-danger');
        newTableRow.getElementsByTagName('button')[0].onclick = () => {
            newTableRow.remove();
        };

        favsTable.getElementsByTagName('tbody')[0].appendChild(newTableRow);
    }
}

import 'bootstrap';

/* eslint-disable no-inner-declarations */
/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import '../styles/style.scss';

{
    const axios = require('axios');

    const locationsUrl = 'https://rickandmortyapi.com/api/location';

    const table = createTable('mainTable');
    const favsTable = createTable('favTable');

    axios.get(locationsUrl).then((res) => {
        const { data } = res;
        console.log(data);

        data.results.forEach((result) => {
            const tableRow = document.createElement('tr');

            createTableCell(tableRow, result.name, true);
            createTableCell(tableRow, result.type);
            createTableCell(tableRow, result.dimension);

            table.getElementsByTagName('tbody')[0].appendChild(tableRow);
        });
    });

    function createTable(id) {
        const newTable = document.getElementById(id);
        const tableHead = document.createElement('thead');
        const tableBody = document.createElement('tbody');

        createTableCell(tableHead, 'Name');
        createTableCell(tableHead, 'Type');
        createTableCell(tableHead, 'Dimension');

        newTable.appendChild(tableHead);
        newTable.appendChild(tableBody);

        return newTable;
    }

    function createTableCell(tableRow, content, favs = null) {
        const cell = document.createElement('td');
        const cellContentContainer = document.createElement('div');
        const cellSpan = document.createElement('span');
        cellSpan.textContent = content;
        cellContentContainer.appendChild(cellSpan);

        if (favs) {
            addFavouriteButton(cellContentContainer, tableRow);
        }

        cell.appendChild(cellContentContainer);

        tableRow.appendChild(cell);
    }

    function addFavouriteButton(cellContentContainer, tableRow) {
        const cellAddToFavsButton = document.createElement('button');
        cellAddToFavsButton.textContent = 'Add to Favourites';
        cellAddToFavsButton.setAttribute('class', 'btn btn-primary');
        cellAddToFavsButton.setAttribute('type', 'button');
        cellAddToFavsButton.onclick = () => {
            addFavourite(tableRow);
        };

        cellContentContainer.appendChild(cellAddToFavsButton);
    }

    function addFavourite(tableRow) {
        const newTableRow = tableRow.cloneNode(true);

        newTableRow.getElementsByTagName('button')[0].textContent = 'Remove';
        newTableRow.getElementsByTagName('button')[0].setAttribute('class', 'btn btn-danger');
        newTableRow.getElementsByTagName('button')[0].onclick = () => {
            newTableRow.remove();
        };

        favsTable.getElementsByTagName('tbody')[0].appendChild(newTableRow);
    }
}
