const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_KEY);

bot.command("mesa", (ctx) => {
		ctx.reply("Mesa:\n\n");
});

bot.command("pedido", (ctx) => {
		ctx.reply("Pedido:\n\n");
});


bot.help((ctx) => {
	ctx.reply("Comandos:\n\n");
	ctx.reply("	1.- /mesa - Indica la mesa con todos los pedidos de la misma.\n");
	ctx.reply("	2.- /pedidos <nº pedido> - Indica la información del nº de pedido especificado.\n");
});

bot.launch();
