export function getRank(card) {
  return card.slice(1);
}

export function getSuit(card) {
  switch (card.slice(0, 1)) {
  case 'c':
    return 'clubs';
  case 'd':
    return 'diamonds';
  case 'h':
    return 'hearts';
  case 's':
    return 'spades';
  }
}

export function getUnicodeSuit(card) {
  switch (card.slice(0, 1)) {
  case 'c':
    return '\u2663';
  case 'd':
    return '\u2666';
  case 'h':
    return '\u2665';
  case 's':
    return '\u2660';
  }
}
