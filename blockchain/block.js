const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block -
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash.substring(0,10)}
        Hash: ${this.hash.substring(0,10)}
        Data: ${this.data}`
    }
 
    static genesis() {
        /**
         * Dont need to use a real timestam for the time being
         * Last hash dummy hash since there is no last hash
         * Some l337 values for first hash
         */
        return new this('Genesis Time', '-----', 'f1r57-h45h', [])
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data);
    }

    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    static blockHash(block) {
        const { timestamp, lastHash, data } = block;

        return Block.hash(timestamp, lastHash, data);
    }
}

module.exports = Block;