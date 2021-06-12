function printDeckOfCards(cards){

    function factoryCard(face,suit){
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suitToSymbol = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
    
        if (validFaces.includes(face) == false || Object.keys(suitToSymbol).includes(suit) == false) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }
    
        return {
            face,
            suit,
            toString() {
                return `${face}${suitToSymbol[suit]}`;
            }
        };
    }
    let result = [];
    for (const card of cards) {
        let currFace = '';
        let currSuit = '';

        if (card.length == 2) {
            currFace = card[0];
            currSuit = card[1];
        }else {
            currFace = card.slice(0, 2);
            currSuit = card[2];
        }

        try {
            result.push(factoryCard(currFace,currSuit));
        } catch (err) {
            console.log(err.message);
        }
    }
    console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);