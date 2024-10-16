// dummyData.js

// Dummy data for Call Logs
const callLogs = [
    { date: '2024-10-10', employee: 'John Doe', type: 'Incoming', duration: '10 mins', recording: 'audio1.mp3' },
    { date: '2024-10-11', employee: 'Jane Smith', type: 'Outgoing', duration: '8 mins', recording: 'audio2.mp3' },
    { date: '2024-10-12', employee: 'Sam Wilson', type: 'Incoming', duration: '15 mins', recording: 'audio3.mp3' },
    { date: '2024-10-13', employee: 'Chris Evans', type: 'Outgoing', duration: '5 mins', recording: 'audio4.mp3' },
    { date: '2024-10-10', employee: 'John Doe', type: 'Incoming', duration: '10 mins', recording: 'audio1.mp3' },
    { date: '2024-10-11', employee: 'Jane Smith', type: 'Outgoing', duration: '8 mins', recording: 'audio2.mp3' },
    { date: '2024-10-12', employee: 'Sam Wilson', type: 'Incoming', duration: '15 mins', recording: 'audio3.mp3' },
    { date: '2024-10-13', employee: 'Chris Evans', type: 'Outgoing', duration: '5 mins', recording: 'audio4.mp3' },
];

// Random data generation for charts
function getRandomData(length, min, max) {
    const data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

// Data for Call Frequency (Weekly Call Data)
const weeklyCallData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    data: getRandomData(7, 40, 100)
};

// Data for Call Type Distribution
const callTypeData = {
    labels: ["Incoming", "Outgoing"],
    data: [getRandomData(1, 300, 700)[0], getRandomData(1, 200, 500)[0]]
};

// Data for Employee Performance
const employeePerformanceData = {
    labels: ["John Doe", "Jane Smith", "Sam Wilson", "Chris Evans"],
    data: getRandomData(4, 100, 300)
};

// Data for Call Trends Over Weeks
const callTrendsData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    data: getRandomData(5, 350, 600)
};
