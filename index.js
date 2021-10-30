const pokemon = require('./pokemon');
const moves = require('./moves');

const getUniqueString = () => {
  const randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
  const { name, types } = randomPokemon;
  const validMoves = moves.filter((move) => types.includes(move.type));
  const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
  const move = randomMove.name.split(' ').join('-');

  return name + '-uses-' + move;
};

module.exports = getUniqueString;
