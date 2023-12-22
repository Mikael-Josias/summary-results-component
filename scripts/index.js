
async function getSummaryData() {
    const response = await fetch('./scripts/data.json');
    const summary = await response.json();
    summary.forEach(e => {
        buildSummaryHtml(e.category, e.score, e.icon, e.color);
    });
}

function buildSummaryHtml(category, result, icon, color) {
    const wrapper = document.getElementById('summaryWrapper');
    
    const statusBox = document.createElement('div');
    statusBox.classList.add(`status-box--${color}`);

    const statusName = document.createElement('span');
    statusName.classList.add(`status-box__name--${color}`);
    const statusIcon = document.createElement('img');
    statusIcon.src = icon;
    const statusResult = document.createElement('span');
    statusResult.classList.add('status-box__value');
    const statusResultBolder = document.createElement('b');
    statusResultBolder.append(result);
    statusResult.append(statusResultBolder, ' / 100');

    statusName.append(statusIcon, category);
    statusBox.append(statusName, statusResult);
    wrapper.appendChild(statusBox);
}

getSummaryData();