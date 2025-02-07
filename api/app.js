const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { USER_TOKEN, PD_ID, SCRIPTS_ID, TUTORIALS_ID } = {
    'USER_TOKEN': process.env.USER_TOKEN,
    'PD_ID': '1024794781324419094',
    'SCRIPTS_ID': '1292986472206565498',
    'TUTORIALS_ID': '1311557481993863208'
}

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/public/'), {
    extensions: ['html']
}));

function getScriptURL(messages) {
    const message = messages.find(msg => msg.components.length > 0);

    if (!message) {
        return null;
    }

    const button = message.components
        .flatMap(component => component.components)
        .find(button => button.label === 'Acessar Script');

    return button ? button.url : null;
}

function getTutorialLinks(messages) {
    const message = messages.find(msg => 
        msg.embeds.length > 0 && 
        msg.components.length > 0
    );

    if (!message) {
        return null;
    }

    const buttons = message.components.flatMap(component => component.components);

    const links = {
        PC: null,
        Android: null,
        iOS: null
    };

    buttons.forEach(button => {
        if (button.label === 'PC') {
            links.PC = button.url;
        } else if (button.label === 'Android') {
            links.Android = button.url;
        } else if (button.label === 'iOS') {
            links.iOS = button.url;
        }
    });

    return links;
}

app.get('/', (req, res) => {
    res.redirect('https://github.com/JuniorSchueller/PD-API');
});

app.get('/api/scripts', async (req, res) => {
    try {
        const scriptThreadsResponse = await fetch(`https://discord.com/api/v10/channels/${SCRIPTS_ID}/threads/search?name=&tag_setting=match_some`, {
            headers: {'authorization': USER_TOKEN}
        });
        const scriptThreads = await scriptThreadsResponse.json();
        const scriptThreadsObjects = scriptThreads.threads;

        const threadsObject = [];

        scriptThreadsObjects.forEach(scriptThreadObject => {
            const object = {
                id: scriptThreadObject.id,
                name: scriptThreadObject.name
            }

            threadsObject.push(object);
        });

        return res.json(threadsObject);
    } catch {
        res.json([{
            id: null,
            name: null
        }]).status(500);
    }
});

app.get('/api/scripts/:scriptId', async (req, res) => {
    const { scriptId } = req.params;

    try {
        const scriptThreadsResponse = await fetch(`https://discord.com/api/v10/channels/${SCRIPTS_ID}/threads/search?name=&tag_setting=match_some`, {
            headers: {'authorization': USER_TOKEN}
        });
        const scriptThreads = await scriptThreadsResponse.json();
        const scriptThreadsObjects = scriptThreads.threads;
        const scriptThreadObject = scriptThreadsObjects.find(scriptThread => scriptThread.id === scriptId);

        const threadMessagesResponse = await fetch(`https://discord.com/api/v10/channels/${scriptThreadObject.id}/messages`, {
            headers: {'authorization': USER_TOKEN}
        });
        const threadMessages = await threadMessagesResponse.json();

        const threadObject = {
            id: scriptThreadObject.id,
            name: scriptThreadObject.name,
            link: getScriptURL(threadMessages)
        }

        return res.json(threadObject);
    } catch {
        res.json({
            id: null,
            name: null,
            link: null
        }).status(500);
    }
});

app.get('/api/tutorials', async (req, res) => {
    try {
        const tutorialThreadsResponse = await fetch(`https://discord.com/api/v10/channels/${TUTORIALS_ID}/threads/search?name=&tag_setting=match_some`, {
            headers: {'authorization': USER_TOKEN}
        });
        const tutorialThreads = await tutorialThreadsResponse.json();
        const tutorialThreadsObjects = tutorialThreads.threads;

        const threadsObject = [];

        tutorialThreadsObjects.forEach(tutorialThreadObject => {
            const object = {
                id: tutorialThreadObject.id,
                name: tutorialThreadObject.name
            }

            threadsObject.push(object);
        });

        return res.json(threadsObject);
    } catch {
        res.json([{
            id: null,
            name: null
        }]).status(500);
    }
});

app.get('/api/tutorials/:tutorialId', async (req, res) => {
    const { tutorialId } = req.params;

    try {
        const tutorialThreadsResponse = await fetch(`https://discord.com/api/v10/channels/${TUTORIALS_ID}/threads/search?name=&tag_setting=match_some`, {
            headers: {'authorization': USER_TOKEN}
        });
        const tutorialThreads = await tutorialThreadsResponse.json();
        const tutorialThreadsObjects = tutorialThreads.threads;
        const tutorialThreadObject = tutorialThreadsObjects.find(tutorialThread => tutorialThread.id === tutorialId);

        const threadMessagesResponse = await fetch(`https://discord.com/api/v10/channels/${tutorialThreadObject.id}/messages`, {
            headers: {'authorization': USER_TOKEN}
        });
        const threadMessages = await threadMessagesResponse.json();

        const threadObject = {
            id: tutorialThreadObject.id,
            name: tutorialThreadObject.name,
            links: getTutorialLinks(threadMessages)
        }

        return res.json(threadObject);
    } catch {
        res.json({
            id: null,
            name: null,
            links: null
        }).status(500);
    }
});

app.get('/api/user/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const userResponse = await fetch(`https://discord.com/api/v10/guilds/${PD_ID}/members/${userId}`, {
            headers: { 'authorization': USER_TOKEN }
        });
        const user = await userResponse.json();

        const rolesHierarchy = [
            { id: '1328071845265674323', name: 'Federal', color: '#f6bd3f' },
            { id: '1328432815859175535', name: 'Líder', color: '#7e06ff' },
            { id: '1311755590954909776', name: 'Co-Líder', color: '#6052ff' },
            { id: '1324574889809809549', name: 'Trustee', color: '#8b6cf8' },
            { id: '1300741082895876116', name: 'Administrador', color: '#f52a4f' },
            { id: '1328212269535985674', name: 'Supervisor', color: '#f232d5' },
            { id: '1311615590859018250', name: 'Moderador', color: '#4872ff' },
            { id: '1321991292930101268', name: 'Trial', color: '#4bb4ff' },
            { id: '1311615477100974081', name: 'Suporte', color: '#2fec93' },
            { id: '1328205423630876742', name: 'Staff Destaque', color: '#f1ac2c' },
            { id: '1297363500896747653', name: 'Engajador', color: '#fb4da7' },
            { id: '1302685705574547557', name: 'Patrocinador', color: '#9c93f3' },
            { id: '1332004442803011684', name: 'Artista', color: '#ff0000' },
            { id: '1327774594639204352', name: 'Parceiro', color: '#818cf8' },
            { id: '1326312461460312136', name: 'Membro Veterano', color: '#ffd220' },
            { id: '1331382126926495784', name: 'Membro Ativo', color: '#f8e97d' },
            { id: '1293005115665678381', name: 'Membro Booster', color: '#e665f2' },
            { id: '1297371442647662603', name: 'Membro', color: '#ffffff' }
        ];
        
        const biggestRole = rolesHierarchy.find(role => user.roles.includes(role.id)) || { id: '0000000000000000000', name: 'Entrosa', color: '#ff0000' };

        const userInfo = {
            id: user.user.id,
            username: user.user.username,
            globalName: user.user.global_name,
            nick: user.nick,
            discriminator: user.discriminator,
            joinedAt: user.joined_at,
            avatar: `https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}.png`,
            banner: user.user.banner && user.user.banner !== 'null'
                ? `https://cdn.discordapp.com/banners/${user.user.id}/${user.user.banner}.png?size=480`
                : null,
            roles: user.roles,
            role: biggestRole
        }

        return res.json(userInfo);
    } catch {
        res.json({
            id: null,
            username: null,
            globalName: null,
            nick: null,
            discriminator: null,
            joinedAt: null,
            avatar: null,
            banner: null,
            roles: null,
            role: null
        }).status(500);
    }
});

app.get('/api/guild', async (req, res) => {
    try {
        const guildInfoResponse = await fetch(`https://discord.com/api/v10/guilds/${PD_ID}`, {
            headers: { 'authorization': USER_TOKEN }
        });
        const guildInfo = await guildInfoResponse.json();

        const guildCountsInfoResponse = await fetch(`https://discord.com/api/v10/guilds/${PD_ID}?with_counts=true`, {
            headers: { 'authorization': USER_TOKEN }
        });
        const guildCountsInfo = await guildCountsInfoResponse.json();

        const guildData = {
            id: guildInfo.id,
            name: guildInfo.name,
            icon: `${guildInfo.icon ? `https://cdn.discordapp.com/icons/${PD_ID}/${guildInfo.icon}.png` : null}`,
            banner: `${guildInfo.banner ? `https://cdn.discordapp.com/banners/${PD_ID}/${guildInfo.banner}.webp` : null}`,
            members: guildCountsInfo.approximate_member_count
        }

        return res.json(guildData);
    } catch {
        res.json({
            id: null,
            name: null,
            icon: null,
            banner: null,
            members: null
        }).status(500);
    }
});

app.listen(3000, () => {
    console.log('PD-API is running on port 3000');
});
