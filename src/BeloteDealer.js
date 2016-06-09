import Deck from './Deck';

export default class BeloteDealer {
  constructor(players){
    if (!players || players.length != 4){
      throw new Error('Invalid player object');
    }
    this._players = players;
    this.takeNewDeck();
  }

  takeNewDeck(){
    this._deck = new Deck(["7", "8", "9", "10", "J", "Q", "K", "A"]);
    this._deck.shuffle();
  }

  deal(){
    let deck = this._deck;
    let players = this._players
    players.map( (player) => player.give(deck.draw(3)) );
    players.map( (player) => player.give(deck.draw(2)) );
    players.map( (player) => player.give(deck.draw(3)) );
  }

}
