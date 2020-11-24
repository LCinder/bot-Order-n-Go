const functions = require('firebase-functions');

const Telegraf = require("telegraf");

const bot = new Telegraf(functions.config().telegrambot.key);

bot.command("mesa", (ctx) => {

});

bot.command("pedido", (ctx) => {

});


bot.help((ctx) => {
	ctx.reply("Comandos:\n\n");
	ctx.reply("	1.- /mesa - Indica la mesa con todos los pedidos de la misma.\n");
	ctx.reply("	2.- /pedidos <nº pedido> - Indica la información del nº de pedido especificado.\n");
});
