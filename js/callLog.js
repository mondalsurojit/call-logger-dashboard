// callLog.js
document.addEventListener("DOMContentLoaded", () => {
    const callLogTable = document.getElementById('callLogTable');
    callLogs.forEach(log => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="p-2">${log.date}</td>
            <td class="p-2">${log.employee}</td>
            <td class="p-2">${log.type}</td>
            <td class="p-2">${log.duration}</td>
            <td class="p-2"><audio controls><source src="assets/audio/sample-call.mp3" type="audio/mpeg"></audio></td>
        `;
        callLogTable.appendChild(row);
    });
});
