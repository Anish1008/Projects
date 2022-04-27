const Token = artifacts.require("tokens");

require("chai").use(require("chai-as-promised")).should();

contract('Token',(accounts) => {

    describe('deployment', () => { 
        it('tracks the name',async ()=>{
            //fetch token from blockchain
            //read token name here
            //Check the token name is "Hello"
            const token = await Token.new()
            const name = token.owner()
            return Promise.resolve(name).should.eventually.equal("Hello");
            // console.log(name)
            // name.should.equal('Hello').then((err,res)=>{console.log(res)})
        })
     })
})