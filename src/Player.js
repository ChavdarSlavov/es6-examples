import { clone } from 'lodash';

export default class Player {
	constructor(name){
		this.name = name;
		this.reset();
	}

	reset(){
		this._hand = [];
	}

	give(cards){
		this._hand = this._hand.concat(cards);
	}

	showHand(){
		return clone(this._hand);
	}

	toString(){
		let message = 'No cards';
		if (this._hand && this._hand.length){
			message = this._hand.join(" ");
		}
		return `${this.name}: ${message}`;
	}	



}