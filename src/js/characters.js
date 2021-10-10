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
