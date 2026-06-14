document.getElementById('navigate-btn').addEventListener('click', () => {
    const destinationUrl = 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/highlights';
    chrome.tabs.create({ url: destinationUrl });
});