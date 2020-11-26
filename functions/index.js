const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_KEY);

exports.handler = async function (event) => {

console.log("aquiiiiiiiiiiiii")
let cad = "f";

bot.command("mesa", (ctx) => {
		cad = ("Mesa\n\n");
});

bot.command("pedido", (ctx) => {
		cad = ("Pedido\n\n");
});


bot.help((ctx) => {
	ctx.reply("Comandos\n\n");
	ctx.reply("	1.- /mesa - Indica la mesa con todos los pedidos de la misma.\n");
	ctx.reply("	2.- /pedidos no pedido - Indica la informacion del n de pedido especificado.\n");
});


	return {statuscode: 200, body: JSON.stringify(text: cad)};
};
