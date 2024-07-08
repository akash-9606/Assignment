async function fetchGitHubData() {
    try {
        const response = await fetch('https://api.github.com/orgs/google/repos');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function populateTable() {
    repos = await fetchGitHubData();
    const tableBody = document.querySelector('#repoTable tbody');
    tableBody.innerHTML = '';

    repos.forEach(repo => {
        const row = `<tr>
                <td>${repo.name}</td>
                <td>${repo.language}</td>
                <td><a href="${repo.html_url}" target="_blank">${repo.html_url}</a></td>
                <td>${new Date(repo.updated_at).toLocaleString()}</td>
            </tr>`;
        tableBody.innerHTML += row;
    });
}

function filterTable() {
    const searchInput = document.querySelector('#search').value.toLowerCase();
    const tableRows = document.querySelectorAll('#repoTable tbody tr');

    tableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const [name, language, url, updatedAt] = cells;

        if (name.innerText.toLowerCase().includes(searchInput) || language.innerText.toLowerCase().includes(searchInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function sortTable(columnIndex) {
    const table = document.querySelector('#repoTable tbody');
    const rowsArray = Array.from(table.rows);
    const sortedRows = rowsArray.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText;
        const bText = b.cells[columnIndex].innerText;

        if (columnIndex === 3) { 
            return new Date(aText) - new Date(bText);
        } else {
            return aText.localeCompare(bText);
        }
    });

    table.innerHTML = ''; x
    sortedRows.forEach(row => table.appendChild(row));
}

window.onload = populateTable;
