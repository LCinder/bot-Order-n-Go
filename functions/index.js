const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_KEY);

console.log("aquiiiiiiiiiiiii")

bot.command("mesa", (ctx) => {
		return ctx.reply("Mesa\n\n");
});

bot.command("pedido", (ctx) => {
		return ctx.reply("Pedido\n\n");
});


bot.help((ctx) => {
	ctx.reply("Comandos\n\n");
	ctx.reply("	1.- /mesa - Indica la mesa con todos los pedidos de la misma.\n");
	ctx.reply("	2.- /pedidos no pedido - Indica la informacion del n de pedido especificado.\n");
});


exports.handler = async (event, ctx, callback) => {
	await bot.handleUpdate(JSON.parse(event.body));
	return callback(null, {statuscode: 200, body: ""});
};
