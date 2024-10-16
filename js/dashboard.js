// dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    // Calls Frequency Bar Chart
    const callsCtx = document.getElementById('callsChart').getContext('2d');
    new Chart(callsCtx, {
        type: 'bar',
        data: {
            labels: weeklyCallData.labels,
            datasets: [{
                label: 'Number of Calls',
                data: weeklyCallData.data,
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    // Call Type Pie Chart
    const callTypeCtx = document.getElementById('callTypeChart').getContext('2d');
    new Chart(callTypeCtx, {
        type: 'pie',
        data: {
            labels: callTypeData.labels,
            datasets: [{
                label: 'Call Types',
                data: callTypeData.data,
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.8)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    // Employee Performance Bar Chart
    const employeePerformanceCtx = document.getElementById('employeePerformanceChart').getContext('2d');
    new Chart(employeePerformanceCtx, {
        type: 'bar',
        data: {
            labels: employeePerformanceData.labels,
            datasets: [{
                label: 'Number of Calls Handled',
                data: employeePerformanceData.data,
                backgroundColor: 'rgba(153, 102, 255, 0.8)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    // Call Trends Line Chart
    const callTrendsCtx = document.getElementById('callTrendsChart').getContext('2d');
    new Chart(callTrendsCtx, {
        type: 'line',
        data: {
            labels: callTrendsData.labels,
            datasets: [{
                label: 'Calls Over Time',
                data: callTrendsData.data,
                backgroundColor: 'rgba(255, 206, 86, 0.8)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    // Populate Call Log Table with Uniform Playback Option
    function populateCallLogTable() {
        const callLogTable = document.getElementById('callLogTable');
        callLogs.forEach((log, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td class="p-2">${log.date}</td>
            <td class="p-2">${log.employee}</td>
            <td class="p-2">${log.type}</td>
            <td class="p-2">${log.duration}</td>
            <td class="p-2">
                <button onclick="playAudio(${index})" class="text-blue-500"><i class="fas fa-play-circle fa-2x cursor-pointer"></i></button>
                <audio id="audio-${index}" src="${log.recording}" preload="none"></audio>
            </td>
        `;
            callLogTable.appendChild(row);
        });
    }

    // Function to play audio for a specific row
    function playAudio(index) {
        const audioElement = document.getElementById(`audio-${index}`);
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }

    // Call this function when the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", populateCallLogTable);

});

// Search functionality for Call Logs
document.getElementById('searchCallLogs').addEventListener('keyup', function () {
    const filter = this.value.toUpperCase();
    const rows = document.querySelectorAll('#callLogTable tr');
    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        let match = false;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].textContent.toUpperCase().includes(filter)) {
                match = true;
                break;
            }
        }
        row.style.display = match ? '' : 'none';
    });
});
