export function getRank(card) {
  return card.slice(1);
}

export function getSuit(card) {
  switch (card.slice(0, 1)) {
  case 'c':
    return 'clubs';
  case 'd':
    return 'diams';
  case 'h':
    return 'hearts';
  case 's':
    return 'spades';
  }
}
