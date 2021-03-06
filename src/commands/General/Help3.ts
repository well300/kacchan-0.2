/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help3",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h3','?3','well3','menu3']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/GG-wymFE0scAAAPo/katsuki-bakugou-bakugou.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `- πΆπ΄π½π΄ππ°π» π

π ${this.client.config.prefix}πππ’ππ£π¨ 
π ${this.client.config.prefix}ππ­π₯ 
π ${this.client.config.prefix}πππ‘π₯ 
π ${this.client.config.prefix}ππ 
π ${this.client.config.prefix}ππ£ππ€ 
π ${this.client.config.prefix}ππ£π«ππ©ππ‘ππ£π  
π ${this.client.config.prefix}π ππππππ£ 
π ${this.client.config.prefix}π’π€ππ¨ 
π ${this.client.config.prefix}π₯π§π€πππ‘π 
π ${this.client.config.prefix}π§ππ£π 
    
βββββββββββββββββ
βββββββββββββββββ
ββββββββββββββββ
βββββββββββββ
βββββββββββββ
π£π£π£π£π£π£π£
 `,
			}
		);
	};
}
