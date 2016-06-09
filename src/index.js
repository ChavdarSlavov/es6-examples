import Deck from './Deck';
import BeloteDealer from './BeloteDealer';
import Player from './Player';

let players = [
	new Player('Slavcho'),
	new Player('Mladen'),
	new Player('Ivan'),
	new Player('Dani')
];

let chavo = new BeloteDealer(players);
chavo.deal();

var output = players.map( (player) => {
	const cards = player.showHand().join(" ");
	return `
		<h3 style="margin-bottom: 0;">${player.name}</h3>
		<div>Cards: ${cards}</div>
	`;
}).join("");
document.write(output);
