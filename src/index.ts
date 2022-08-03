import { config } from 'dotenv';
import { Client } from 'tmi.js';
config();

let Bot_Name: string = process.env.BOT_NAME ?? "";
let Token: string = process.env.OAUTH_TOKEN ?? "";

const client: Client = new Client({
    connection: {
        reconnect: true,
        secure: true,
    },
    identity: {
        username: Bot_Name,
        password: Token
    },
    channels: ["solopietro_"],
});

client.connect().catch(err => console.error(err));

client.on('message', (channel, tags, message, self) => {
    if (self) return;

    switch (message.toLowerCase()) {
        case "!saluta":
            client.say(channel, `Ciao @${tags.username} Ã¨ bello vederti!`);
            break;
        default:
            client.say(channel, "Comando non trovato");
            break;
    }
});
