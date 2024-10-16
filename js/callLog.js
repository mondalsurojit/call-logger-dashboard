document.addEventListener("DOMContentLoaded", () => {
    const callLogTable = document.getElementById('callLogTable');
    
    callLogs.forEach(log => {
        // Create a div instead of <tr> and use grid classes for rows
        const row = document.createElement('div');
        row.classList.add('grid', 'grid-cols-5', 'gap-4', 'p-2', 'items-center', 'border-b');

        // Populate the row with data (aligned as grid items)
        row.innerHTML = `
            <div class="p-2">${log.date}</div>
            <div class="p-2">${log.employee}</div>
            <div class="p-2">${log.type}</div>
            <div class="p-2">${log.duration}</div>
            <div class="p-2">
                <audio controls>
                    <source src="./audio1.mp3" type="audio/mpeg">
                </audio>
            </div>
        `;

        // Append the row to the grid container
        callLogTable.appendChild(row);
    });
});
