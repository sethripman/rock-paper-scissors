export const checkResult = (player, computer) => {
    // check for a draw
    if (player === computer) return 'draw';

    // declare a concatenated string based off the input
    const result = player + computer;
   
    // check for a win
    if (result === 'paperrock' || result === 'rockscissors' || result === 'scissorspaper') return 'win';

    // default case is a loss
    return 'lose';
};