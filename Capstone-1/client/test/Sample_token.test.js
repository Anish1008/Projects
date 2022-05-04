const Token = artifacts.require("tokens");

require("chai").use(require("chai-as-promised")).should();

const {tokens} = require("./helper");

contract('Token',(accounts) => {
    //accounts[0] is the deployer
    //accounts[1] is the reciever
    //accounts[2] is the spender
        let token;
        const name = "Rich Token";
        const symbol = "RICH";
        let decimals = "18";
        let totalSupply = tokens(1000000);
        beforeEach(async () => {
            token = await Token.new();
        }) 
    describe('deployment', () => {
        it('tracks the name',async ()=>{
            //fetch token from blockchain
            //read token name here
            //Check the token name is "Hello"
            const result = token.owner()
            return Promise.resolve(result).should.eventually.equal(name);
        })
        it('tracks the symbol',async ()=>{
            //fetch token from blockchain
            //read token symbol here
            //Check the token symbol is "H"
            const result = token.symbol()
            return Promise.resolve(result).should.eventually.equal(symbol);
        })
        it('tracks the decimals',async ()=>{
            //fetch token from blockchain
            //read token decimals here
            //Check the token decimals is 18
            let result = await token.decimals()
            result = result.toString()
            return Promise.resolve(result).should.eventually.equal(decimals);
        })
        it('tracks the total supply',async ()=>{
            //fetch token from blockchain
            //read token total supply here
            //Check the token total supply is 100
            let result =await token.totalSupply()
            return Promise.resolve(result.toString()).should.eventually.equal(totalSupply.toString());
        })
        it('tracks the balance of owner',async ()=>{
            //fetch token from blockchain
            //read token balance of owner here
            //Check the token balance of owner is 1000000000
            let result = await token.balances(accounts[0])
            return Promise.resolve(result.toString()).should.eventually.equal(totalSupply.toString());
        })

     })
     describe('transfers', () => {
         let amount;
         let result;
         describe('success', () => {
         beforeEach(async () => {
                amount = tokens(100);
                result = await token.transfer(accounts[1], amount, {from: accounts[0]});
            })
         it('checking balances',async ()=>{
            let balance = await token.balances(accounts[0])
            balance.toString().should.equal(tokens(999900).toString());
            balance = await token.balances(accounts[1])
            balance.toString().should.equal(tokens(100).toString());
        })
        it('emits a transfer event',async ()=>{
            const logs = result.logs[0];
            logs.event.should.eq('Transfer','Transfer event was emitted.');
            logs.args.from.toString().should.equal(accounts[0],'From address matched.');
            logs.args.to.toString().should.equal(accounts[1],'To address matched.');
            logs.args.value.toString().should.equal(amount.toString(),'Amount transferred.');
     })
    })
    describe('failure', () => {
        it('rejects insufficient balances',async ()=>{
            let invalid_amount;
            invalid_amount = tokens(10000000); //tokens are greater than totalSupply
            // console.log(invalid_amount)
            // console.log(await token.transfer(accounts[1], invalid_amount, {from: accounts[0]}))
            await token.transfer(accounts[1], invalid_amount, {from: accounts[0]}).should.be.rejectedWith('revert');
        })
        it('rejects invalid recipient',async ()=>{
            await token.transfer(0x0, tokens(100), {from: accounts[0]}).should.be.rejectedWith('invalid address');
        
        })
    })
})

    describe('approvals',()=>{
        let result;
        let amount;
        beforeEach(async()=>{
            amount = tokens(100);
            result = await token.approve(accounts[2],amount,{ from:accounts[0] });
        })
        describe('success',()=>{
            it('allocates an allowance for delegated token spending',async()=>{
                let allowance = await token.allowances(accounts[0],accounts[2])
                allowance.toString().should.equal(amount.toString());

            })
            it('emits a transfer event',async ()=>{
                const logs = result.logs[0];
                logs.event.should.eq('Approval','Approve event was emitted.');
                logs.args.owner.toString().should.equal(accounts[0],'Owner address matched.');
                logs.args.spender.toString().should.equal(accounts[2],'Spender address matched.');
                logs.args.value.toString().should.equal(amount.toString(),'Amount transferred.');
         })
        })
        describe('failure',()=>{
            it('rejects invalid spender',async ()=>{
                await token.approve(0x0,amount,{ from:accounts[0] }).should.be.rejectedWith('invalid address');
            })
        })

    })
    describe('delegated token transfer', () => {
        let amount;
        let result;
        beforeEach(async () => {
            amount = tokens(100);
            result = await token.approve(accounts[2], amount, { from: accounts[0] });
        })
        describe('success', () => {
        beforeEach(async () => {
               amount = tokens(100);
               result = await token.transferFrom(accounts[0],accounts[1], amount, {from: accounts[2]});
           })
        it('checking balances',async ()=>{
           let balance = await token.balances(accounts[0])
           balance.toString().should.equal(tokens(999900).toString());
           balance = await token.balances(accounts[1])
           balance.toString().should.equal(tokens(100).toString());
       })
       it('resets the allowance',async()=>{
        let allowance = await token.allowances(accounts[0],accounts[2])
        allowance.toString().should.equal('0');

    })
       it('emits a transfer event',async ()=>{
           const logs = result.logs[0];
           logs.event.should.eq('Transfer','Transfer event was emitted.');
           logs.args.from.toString().should.equal(accounts[0],'From address matched.');
           logs.args.to.toString().should.equal(accounts[1],'To address matched.');
           logs.args.value.toString().should.equal(amount.toString(),'Amount transferred.');
    })
   })
   describe('failure', () => {
    it('rejects insufficient balances',async ()=>{
        let invalid_amount;
        invalid_amount = tokens(10000000); //tokens are greater than totalSupply
        await token.transferFrom(accounts[0],accounts[1], invalid_amount, {from: accounts[2]}).should.be.rejectedWith('revert');
    })
    it('rejects invalid recipient',async ()=>{
        await token.transferFrom(accounts[0],0x0, amount, {from: accounts[2]}).should.be.rejectedWith('invalid address');    
    })
   })
})


})

