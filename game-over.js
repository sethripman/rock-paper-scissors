const gameOver = (bank, bankSpan) => {
    if (!bank) {
        //firstGameDiv.classList.add('hidden');
        bankSpan = 'nothing! You are flat broke and the game is over.';
        const output = bankSpan;
        return output;
    }
};

export default gameOver;