const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var cors = require('cors');
// const Web3 = require('web3')
const { toWei } = require('web3-utils')

const handler = require('./handler.js');
const { decode } = require('punycode');

// const wasm = require('webassembly')
// const assert = require('assert')

// wasm.load('crc32.wasm').then(main).catch(e => console.error(e))
let web3, contract, netId
// const MERKLE_TREE_HEIGHT = 20
// const RPC_URL = 'https://ropsten.infura.io/v3/fae8c5e33757417ebddf322b80545be7'
// const PRIVATE_KEY = '0e4937aeeeaef0a1d33ff35bea2e4a4af99ce311651a711af038ea1a5629061f' // 0x94462e71A887756704f0fb1c0905264d487972fE
// const CONTRACT_ADDRESS = '0x10895495EF6b53Fb047d3d748871633075231832'
// const AMOUNT = '1'

const host = '0.0.0.0';
const port = 8553;

// app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname ));
app.use(bodyParser.urlencoded({ extended: false }))
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


app.get('/', (req, res) => res.redirect("/index.html"));

app.post("/depositccnoteout", multipartMiddleware, async (req, res, next) => {
    try {
        console.log(req.body)
        console.log("depositccnoteout: hash =" +  req.body.fromassethash + " amount= " + req.body.amount + " tochainid= " + req.body.tochainid 
                     + " encryptednote=" + req.body.encryptednote)
        
        /*const transitem = */handler.handledeposit(req.body.fromassethash , req.body.amount , req.body.tochainid , req.body.pk1 , req.body.pk2 ,
                        req.body.encryptednote, req.body.fromchainid, req.body.userid)

        // if (transitem ==null) {
        //     console.log("Deposite note request failed...")
        //     throw new Error("Deposite note request failed: transitem = null");
        // }else{
        //     console.log("transitem=", transitem)
        // }

        // for(let i in global.globalTransactions){
        //     console.log(`Deposit:: i:${i},global.globalTransactions[i]:${JSON.stringify(global.globalTransactions)}`);
        // }

        console.log('Deposited note request return')

    } catch (error) {
        console.log("depositccnoteout error: ", error)
    }
});

app.post("/generateproof", multipartMiddleware, (req, res, next) => {
    try {
        console.log(req.body)
        console.log("Start generateproof: userid =" +  req.body.userid + " noteid= " + req.body.noteid)
        
        handler.generateproof(req.body.userid, req.body.noteid )

        console.log('Handling generate proof request end')

    } catch (error) {
        console.log("generate proof error: ", error)
    }

});

app.post("/spendccnote", multipartMiddleware, (req, res, next) => {
    try {
        console.log(req.body)
        console.log("spendccnote: noteid=" +  req.body.noteid + " amount= " + req.body.amount + " from chainid= " + req.body.fromchainid 
                    + " notereq=" +  req.body.notereq + " recipient =" +  req.body.recipient + " userid=" + req.body.userid + " proof=" + req.body.proof)
        
        handler.handlespend(req.body.noteid , req.body.notereq, req.body.amount , req.body.recipient , req.body.fromchainid , req.body.userid , req.body.proof)

        // web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL, { timeout: 5 * 60 * 1000 }), null, { transactionConfirmationBlocks: 1 })
        // netId = await web3.eth.net.getId()
        // contract = new web3.eth.Contract(require('./abi/erc20ZKPNoteproxyPreStart.json'), CONTRACT_ADDRESS)
        // const account = web3.eth.accounts.privateKeyToAccount('0x' + PRIVATE_KEY)
        // web3.eth.accounts.wallet.add('0x' + PRIVATE_KEY)
        // // eslint-disable-next-line require-atomic-updates
        // web3.eth.defaultAccount = account.address
      
        // const tx = await contract.methods.depositCCOut(req.body.fromassethash, req.body.tochainid, req.body.amount, req.body.pk1, req.body.pk2,  
        //     req.body.encryptednote).send({ value: "0", from: web3.eth.defaultAccount, gas:2e6 })
        // console.log("hash =", req.body.fromassethash)
        // // const tx = await contract.methods.createNote(Web3.toHex(req.body.fromassethash), web3.toBigNumber(req.body.amount)).send({ value: toWei(AMOUNT), from: web3.eth.defaultAccount, gas:2e6 })
        // // const tx = await contract.methods.createNote(req.body.fromassethash, req.body.amount).send({ 
        // //                     value: "0", from: web3.eth.defaultAccount, gas:2e6 })

        console.log('Spend note request')

    } catch (error) {
        console.log("spendccnote error: ", error)
    }

});

///////////////////////////////////////////////////////////////////////////////
// Zokratesjs

// const fs = require('fs');
// const { initialize } = require('zokrates-js-node');
// function importResolver(location, path) {
//     // implement your resolving logic here
//     return { 
//       source: "def main() -> (): return", 
//       location: path 
//     };
// }

// // // initialize().then((zokratesProvider) => {
// // //     const source = fs.readFileSync('./notes/withdraw.zok')
// // //     // console.log(source.toString())

// // //     // we have to initialize wasm module before calling api functions
// // //     let result = zokratesProvider.compile( source.toString() , "main", importResolver);
// // //     console.log(result)
// // // });

// initialize().then((zokratesProvider) => {
//     // const source = "def main(private field a) -> field: return a * a";
//     const source = fs.readFileSync('./notes/withdrawrev.zok')

//     // compilation
//     const artifacts = zokratesProvider.compile(source.toString(), "main", importResolver);

//     // computation
//     // const { witness, output } = zokratesProvider.computeWitness(artifacts, 
//     //     [17559621506966228669946200908540191909304602050620774623186985148217036891086,
//     //      3499692685359225014642568034871893823673913644950320594232804843053171036306,
//     //      37232355431795428394424168963998030788617641514587324629047050974144141575298,
//     //      2750958632, 3860495517, 2694795054, 1180789744, 1942258783, 1698713166, 1678052419, 30359419,
//     //      3280663902, 2870896982, 2870967870, 472011007, 359726217, 4254639460, 1845398842, 1208882838,
//     //      0, 0, 0, 0, 0, 0, 0, 0,
//     //      4121296194, 3513393200, 664334190, 3540621211, 1124089123, 551153896, 3935842729, 660208459,
//     //      0, 0]);

//     // console.log(witness); // Resulting witness which can be used to generate a proof
//     // console.log(output); 

//     // // run setup
//     // const keypair = zokratesProvider.setup(artifacts.program);

//     // generate proof
//     const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);
// })

///////////////////////////////////////////////////////////////////////////////
// Browserify
//
// var button = document.getElementById('my-button'); // add id="my-button" into html
// button.addEventListener('click', fnClick);

// var domready = require("domready");
// var getMessage = require('./message');

// domready(function () {

//    //This shows the alert when script loads
//    alert(getMessage());

//    function fnClick(){
//     alert(getMessage());
//    }     
// });
// var domEventListener = require('dom-event-listener');
// var element = document.getElementById('my-button');
// domEventListener.add(element, 'click', function(event) {
//     console.log(event);
// });

var server = app.listen(port, host,  () => {
    console.log("Server running on port 8553");

    // var host = server.address().address;
    // var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

    // Timer
    setInterval(handler.transactionTimer, 10000);
  
});