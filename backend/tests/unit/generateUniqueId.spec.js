const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('Should generate unique id', () =>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});