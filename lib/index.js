const API_URL = 'https://pdapi.vercel.app';

async function getScripts() {
    const scripts = await fetch(`${API_URL}/scripts`);
    const scriptsData = await scripts.json();
    return scriptsData;
}

async function getScript(scriptId) {
    const script = await fetch(`${API_URL}/scripts/${scriptId}`);
    const scriptData = await script.json();
    return scriptData;
}

async function getTutorials() {
    const tutorials = await fetch(`${API_URL}/tutorials`);
    const tutorialsData = await tutorials.json();
    return tutorialsData;
}

async function getTutorial(tutorialId) {
    const tutorial = await fetch(`${API_URL}/tutorials/${tutorialId}`);
    const tutorialData = await tutorial.json()
    return tutorialData;
}

async function getUser(userId) {
    const user = await fetch(`${API_URL}/user/${userId}`);
    console.log(`${API_URL}/user/${userId}`)
    const userData = await user.json()
    return userData;
}

async function getGuildInfo() {
    const guild = await fetch(`${API_URL}/guild`);
    const guildData = await guild.json();
    return guildData
}

module.exports = { getScripts, getScript, getTutorials, getTutorial, getUser, getGuildInfo }