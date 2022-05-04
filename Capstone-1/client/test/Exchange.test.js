const Exchange = artifacts.require("Exchange");

require("chai").use(require("chai-as-promised")).should();

const {tokens} = require("./helper");

contract('Exchange',(accounts) => {
    //accounts[0] is the deployer
    //accounts[1] is the reciever
    //accounts[2] is the spender
    let exchange;
    beforeEach(async () => {
        exchange = await Exchange.new();
    }) 
    describe('deployment', () => {
        it('tracks the fee account',async ()=>{
            const result = exchange.feeAccount()
            return Promise.resolve(result).should.eventually.equal(accounts[1]);
        })
    })
})