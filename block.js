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
        const hash = 'todo-hash';

        return new this(timestamp, lastHash, hash, data);
    }
}

module.exports = Block;