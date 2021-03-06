/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h','?','well','menu']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/LhRhrogP7WgAAAPo/bakugou-katsuki-bakugou.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `Β¬ hello! *@${M.sender.username}*.
Β¬ Ιͺ'α΄ π ππππππ£ π£ γ½
Β¬ α΄Κ α΄Κα΄κ°Ιͺx Ιͺκ± - "${this.client.config.prefix}"
Β¬ α΄α΄α΄α΄α΄Ι΄α΄κ± α΄Κα΄ ΚΙͺκ±α΄α΄α΄ Κα΄Κα΄α΄‘.β¬

- π΄π³ππ²π°ππΈππ΄ π

π ${this.client.config.prefix}h1

- π΅ππ½ π

π ${this.client.config.prefix}h2

- πΆπ΄π½π΄ππ°π» π

π ${this.client.config.prefix}h3

- πΌπ΄π³πΈπ° π

π ${this.client.config.prefix}h4

- πΌπΎπ³π΄ππ°ππΈπΎπ½ π

π ${this.client.config.prefix}h5

- πππΈπ»π π

π ${this.client.config.prefix}h6

- ππ΄π΄π± π

π ${this.client.config.prefix}h7

- π½ππ΅π π

π ${this.client.config.prefix}h8

π ππ€π©π: ππ¨π !πππ‘π₯ <ππ€π’π’ππ£π_π£ππ’π> π©π€ π«πππ¬ π©ππ ππ€π’π’ππ£π ππ£ππ€

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
