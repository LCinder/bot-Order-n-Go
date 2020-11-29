
const Telegraf = require("telegraf");
const fetch = require("node-fetch");
const url = process.env.URL_TEST;

const bot = new Telegraf(process.env.BOT_KEY);

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
	+ "	1.- /pedido - Indica la informacion de los pedidos de la mesa.\n");
});



exports.handler = async (event, context, callback) => {
	await bot.handleUpdate(JSON.parse(event.body));
	return callback(null, {statusCode: 200, body: ""});
};
