// Function to create a deck of cards
function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck = [];
  
    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push(`${rank} of ${suit}`);
      }
    }
  
    return deck;
  }
  // This is going great
  // Function to shuffle my deck
  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
  
  // Function to play the game
  function playWar() {
    const deck = createDeck();
    shuffleDeck(deck);
  
    const player1Deck = deck.slice(0, 26);
    const player2Deck = deck.slice(26);
  
    let player1Score = 0;
    let player2Score = 0;
  
    for (let i = 0; i < 26; i++) {
      const card1 = player1Deck[i];
      const card2 = player2Deck[i];
  
      const rank1 = parseInt(card1);
      const rank2 = parseInt(card2);
  
      if (rank1 > rank2) {
        player1Score++;
      } else if (rank2 > rank1) {
        player2Score++;
      }
    }
  
    console.log('Player 1 score:', player1Score);
    console.log('Player 2 score:', player2Score);
  
    if (player1Score > player2Score) {
      console.log('Player 1 wins!');
    } else if (player2Score > player1Score) {
      console.log('Player 2 wins!');
    } else {
      console.log('It\'s a tie!');
    }
  }
  
  // Run the game
  playWar();

  