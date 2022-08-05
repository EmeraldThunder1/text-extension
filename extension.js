const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

class StringHandling {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: "stringHandling",
            name: "String Handling",
            blocks: [
                {
                    opcode: "letterRange",
                    blockType: BlockType.REPORTER,
                    text: 'letters [LETTER1] to [LETTER2] of [STRING]',
                    arguments: {
                        LETTER1: {
                            type: ArgumentType.STRING,
                            defaultValue: '1'
                        },
                        LETTER2: {
                            type: ArgumentType.STRING,
                            defaultValue: '3'
                        },
                        STRING: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Apples'
                        }
                    }
                }
            ]
        }
    }

    letterRange(args) {
        let l1 = args.LETTER1 > args.STRING.length ? args.STRING.length : args.LETTER1; 
        let l2 = args.LETTER2 > args.STRING.length ? args.STRING.length : args.LETTER2;

        l1 = l1 < 1 ? 1: l1;
        l2 = l2 < 1 ? 1: l2;

        return args.STRING.slice(l1 - 1, l2 - 1);
    }
}