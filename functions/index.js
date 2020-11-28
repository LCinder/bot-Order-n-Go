
const Telegraf = require("telegraf");
const fetch = require("node-fetch");
const url = "https://order-n-go.vercel.app/api/test";

const bot = new Telegraf(process.env.BOT_KEY);

bot.command("mesa", (ctx) => {
		ctx.reply("Mesa");
});

bot.command("pedido", (ctx) => {
	const getData = async url => {
		try {
			const response = await fetch(url);
			const json = await response.text();
			ctx.reply(json);
		} catch (error) {
			console.log(error);
		}
	};

	getData(url);

});


bot.help((ctx) => {
	ctx.reply("Comandos: \n"
	+ "	1.- /mesa - Indica la mesa con todos los pedidos de la misma.\n"
  + "	2.- /pedido no pedido - Indica la informacion de los pedidos de la mesa.\n");
});


exports.handler = async (event, context, callback) => {
	await bot.handleUpdate(JSON.parse(event.body));
	return callback(null, {statusCode: 200, body: ""});
};
