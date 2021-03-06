/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help6",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h6','?6','well6','menu6']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/NzcXclJ_bZcAAAPo/bakugo-my-hero-academia.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `- πππΈπ»π π

π ${this.client.config.prefix}ππ‘πͺπ§ 
π ${this.client.config.prefix}πππ©πππ 
π ${this.client.config.prefix}ππ€π€ππ‘π 
π ${this.client.config.prefix}π§ππ©π§πππ«π 
π ${this.client.config.prefix}π¨ππ§πππ£π¨ππ€π© 
π ${this.client.config.prefix}π¨π©πππ‘ 
π ${this.client.config.prefix}π¨π©πππ ππ§ 
π ${this.client.config.prefix}π¨πͺππ§ππ 
π ${this.client.config.prefix}π©π§ππ£π¨π‘ππ©π 
π ${this.client.config.prefix}π¬ππ ππ₯ππππ
    
    
βββββββββββββββββ
βββββββββββββββββ
ββββββββββββββββ
βββββββββββββ
βββββββββββββ
π£π£π£π£π£π£π£π£
 `,
			}
		);
	};
}
