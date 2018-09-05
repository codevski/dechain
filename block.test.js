const Block = require('./block');

describe('Block', () => {
    let data, lastBlock, block;

    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('sets the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });
    
    it('setrs the `lasthash` to match the has of the last block', () => {
        expect(block.lastBlock).toEqual(lastBlock.hash);
    });
});