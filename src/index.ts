import * as env from 'dotenv';
import * as tmi from 'tmi.js';
env.config();

let Bot_Name = process.env.BOT_NAME;
let Token = process.env.OAUTH_TOKEN;

const client = new tmi.Client
(
    {

        connection: 
        {
            reconnect: true,
            secure: true,
        },

        identity: 
        {
            username: Bot_Name,
            password: Token
        },
        channels: ["solopietro_"]

    }
);

client.connect().catch(console.error); 

client.on('message', (channel, tags, message, self) => {
	if(self) return;

	if(message.toLowerCase() === '!saluta') 
    {
	    client.say(channel, `Ciao @${tags.username} è bello vederti!`);
	}
});
