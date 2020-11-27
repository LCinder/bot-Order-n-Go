
const Telegraf = require("telegraf");
const request = require("request");
const url = "https://order-n-go.vercel.app/api/test";

const bot = new Telegraf(process.env.BOT_KEY);

bot.command("mesa", (ctx) => {
		ctx.reply("Mesa");
});

bot.command("pedido", (ctx) => {
		getJSON(url, function (error, response) {
			ctx.reply("Pedido: " + response);
		});
});


bot.help((ctx) => {
	ctx.reply("Comandos\n\n");
	ctx.reply("	1.- /mesa - Indica la mesa con todos los pedidos de la misma.\n");
	ctx.reply("	2.- /pedidos no pedido - Indica la informacion del n de pedido especificado.\n");
});


exports.handler = async (event, context, callback) => {
	await bot.handleUpdate(JSON.parse(event.body));
	return callback(null, {statusCode: 200, body: ""});
};
