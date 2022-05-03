const ERC20TransferABI = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "toAssetHash",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pk1",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pk2",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "toChainId",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "noteid",
				"type": "bytes32"
			}
		],
		"name": "DeserializeEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256[19]",
				"name": "inputvalues",
				"type": "uint256[19]"
			}
		],
		"name": "ZKPInput002Event",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "noteid",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "reqhash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "toAssetHash",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32[4]",
				"name": "arr",
				"type": "bytes32[4]"
			},
			{
				"indexed": false,
				"internalType": "bool[2]",
				"name": "directionSelector",
				"type": "bool[2]"
			}
		],
		"name": "ZKPInputEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "reqhash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ZKPNoteSpent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "noteid",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "toAssetHash",
				"type": "bytes"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "fromAssetHash",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "toChainId",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pk1",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pk2",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "encryptedNote",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "fromaddress",
				"type": "address"
			}
		],
		"name": "ZKPOutputEvent",
		"type": "event"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint32",
				"name": "chainid",
				"type": "uint32"
			}
		],
		"name": "SetChainId",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "merkle",
				"type": "address"
			}
		],
		"name": "SetMerkletreeAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "allInputZKPNotereqstate",
		"outputs": [
			{
				"internalType": "enum ERC20ZKPNoteProxy.State",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "allInputZKPNotes",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "toAssetHash",
				"type": "bytes"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pk1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pk2",
				"type": "uint256"
			},
			{
				"internalType": "uint64",
				"name": "toChainId",
				"type": "uint64"
			},
			{
				"internalType": "bytes32",
				"name": "noteid",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allnoteids",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "allnotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nonce",
				"type": "uint256"
			},
			{
				"internalType": "uint64",
				"name": "ChainId",
				"type": "uint64"
			},
			{
				"internalType": "address",
				"name": "fromAssetHash",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "fromadderss",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"name": "assetHashMap",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "fromAssetHash",
				"type": "address"
			},
			{
				"internalType": "uint64",
				"name": "toChainId",
				"type": "uint64"
			},
			{
				"internalType": "bytes",
				"name": "toAssetHash",
				"type": "bytes"
			}
		],
		"name": "bindAssetHash",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint64",
				"name": "toChainId",
				"type": "uint64"
			},
			{
				"internalType": "bytes",
				"name": "targetProxyHash",
				"type": "bytes"
			}
		],
		"name": "bindProxyHash",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "chainId",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "fromAssetHash",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "createNote",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes",
				"name": "argsBs",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "fromContractAddr",
				"type": "bytes"
			},
			{
				"internalType": "uint64",
				"name": "fromChainId",
				"type": "uint64"
			}
		],
		"name": "depositCCIn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "fromAssetHash",
				"type": "address"
			},
			{
				"internalType": "uint64",
				"name": "toChainId",
				"type": "uint64"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pk1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pk2",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "encryptedNote",
				"type": "string"
			}
		],
		"name": "depositCCOut",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "fromAssetHash",
				"type": "address"
			}
		],
		"name": "getBalanceFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "gnonce",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "managerProxyContract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "merklehistory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"name": "proxyHashMap",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "ethCCMProxyAddr",
				"type": "address"
			}
		],
		"name": "setManagerProxy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256[2]",
				"name": "a",
				"type": "uint256[2]"
			},
			{
				"internalType": "uint256[2][2]",
				"name": "b",
				"type": "uint256[2][2]"
			},
			{
				"internalType": "uint256[2]",
				"name": "c",
				"type": "uint256[2]"
			},
			{
				"internalType": "uint256[5]",
				"name": "input",
				"type": "uint256[5]"
			},
			{
				"internalType": "bytes32",
				"name": "notereq",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "spendNote",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "stikonotereq",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "toAssetHash",
				"type": "bytes"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pk1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pk2",
				"type": "uint256"
			},
			{
				"internalType": "uint64",
				"name": "toChainId",
				"type": "uint64"
			},
			{
				"internalType": "bytes32",
				"name": "noteid",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "stikonotereqstate",
		"outputs": [
			{
				"internalType": "enum ERC20ZKPNoteProxy.State",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256[2]",
				"name": "a",
				"type": "uint256[2]"
			},
			{
				"internalType": "uint256[2][2]",
				"name": "b",
				"type": "uint256[2][2]"
			},
			{
				"internalType": "uint256[2]",
				"name": "c",
				"type": "uint256[2]"
			},
			{
				"internalType": "uint256[19]",
				"name": "input",
				"type": "uint256[19]"
			}
		],
		"name": "verifyTx",
		"outputs": [
			{
				"internalType": "bool",
				"name": "r",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

const ZOK_SOURCE = "def main(private field a) -> field: return a * a";

const Web3 = require('web3')
const fs = require('fs');
const { initialize } = require('zokrates-js-node');
var exec = require('child_process').exec

const ETH_RPC_URL = 'https://ropsten.infura.io/v3/fae8c5e33757417ebddf322b80545be7'
const BSC_RPC_URL = 'https://data-seed-prebsc-1-s1.binance.org:8545/'

const PRIVATE_KEY = '0e4937aeeeaef0a1d33ff35bea2e4a4af99ce311651a711af038ea1a5629061f' // 0x94462e71A887756704f0fb1c0905264d487972fE
const ETH_NOTEPROXY_CONTRACT_ADDRESS = '0x10895495EF6b53Fb047d3d748871633075231832'
const BSC_NOTEPROXY_CONTRACT_ADDRESS = '0x678C65487DBCB0de70a09CB4aE5414D91C198514'
// const AMOUNT = '1'
const ETH_START_BLOCK = 11685279
const BSC_START_BLOCK = 15577709
const Scan_Block_Number = 2000

// Event topics
const ZKPOUTPUT_EVENT='0x5b741943d7f1f72d6b74e55a49fda3aea8480334417749a0e67f11d9d5c863c3'
const ZKPINPUT_EVENT ='0xffe66ffe1f700acb6977f7c6d3ef4687870f83755f5480d3c44865297ea3e4f3'

let web3, web3alt, contract

async function handledeposit(fromassethash, amount, tochainid, pk1, pk2, encryptednote, fromchainid, userid){

    try {
       
        console.log("handledeposit: hash =" +  fromassethash + " amount= " + amount + " tochainid= " + tochainid 
                    + " pk1=" +  pk1 + " pk2=" +  pk2 + " encryptednote=" + encryptednote + " fromchainid= " + 
                    fromchainid + " userid =" + userid)
        
        if (fromchainid ==2) {
            web3 = new Web3(new Web3.providers.HttpProvider(ETH_RPC_URL, { timeout: 5 * 60 * 1000 }), null, { transactionConfirmationBlocks: 1 })
        }else if(fromchainid ==79) {
            web3 = new Web3(new Web3.providers.HttpProvider(BSC_RPC_URL, { timeout: 5 * 60 * 1000 }), null, { transactionConfirmationBlocks: 1 })
        }else {
            console.log("Invalid From Chain ID =" + fromchainid)
            throw new Error("Invalid From Chain ID in handledeposit()")
        }

        // netId = await web3.eth.net.getId()
        // contract = new web3.eth.Contract(require('./abi/erc20ZKPNoteproxyPreStart.json'), CONTRACT_ADDRESS)
        contract = new web3.eth.Contract(ERC20TransferABI, ETH_NOTEPROXY_CONTRACT_ADDRESS)
        const account = web3.eth.accounts.privateKeyToAccount('0x' + PRIVATE_KEY)
        web3.eth.accounts.wallet.add('0x' + PRIVATE_KEY)
        // eslint-disable-next-line require-atomic-updates
        web3.eth.defaultAccount = account.address
      
        const tx = await contract.methods.depositCCOut(fromassethash, tochainid, amount, pk1, pk2,  
            encryptednote).send({ value: "0", from: web3.eth.defaultAccount, gas:2e6 }).then(transaction =>{
			
			console.log("Transaciton hash =" + JSON.stringify(transaction))
			
			global.globalTransactions.push({pk1: pk1, pk2: pk2, amount:amount, tochainid: tochainid, 
				fromassethash: fromassethash, encrypotednote: encryptednote, fromchainid:fromchainid, 
				userid: userid, noteid: 0, notereq:0, status:0, fromtx: transaction.transactionHash , 
				fromaddress: transaction.from, blockno: transaction.blockNumber, root:0, leaf:0,path0:0,path1:0, direction:[0,0]})

			// transactionReceipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
			// console.log("receipt =" + JSON.stringify(transactionReceipt))
			
		})

        //transactionReceipt = await web3.eth.getTransactionReceipt("0xe97d7e37f7d6cf989aef7daca602816ee25476501911652595c6ec29bc468266");
		//console.log("Transaciton hash =", tx)

        console.log('Deposited note request in handledeposit()')

        return null

    } catch (error) {
        console.log("handledeposit error: ", error)
    }
}

// function spendNote(uint[2] calldata a, uint[2][2] calldata b, uint[2] calldata c, uint[5] calldata input, bytes32 notereq, uint256 amount, address recipient) external payable returns (bool){
async function handlespend(noteid, notereq, amount, recipient, fromchainid, userid, proofprovided){

    try {
       
        console.log("handlespend: noteid =" +  noteid + " notereq= " + notereq + " amount= " + amount 
                    + " recipient=" +  recipient + " fromchainid=" +  fromchainid + " userid =" + userid)
        
        if (fromchainid ==2) {
            web3 = new Web3(new Web3.providers.HttpProvider(ETH_RPC_URL, { timeout: 5 * 60 * 1000 }), null, { transactionConfirmationBlocks: 1 })
        }else if(fromchainid ==79) {
            web3 = new Web3(new Web3.providers.HttpProvider(BSC_RPC_URL, { timeout: 5 * 60 * 1000 }), null, { transactionConfirmationBlocks: 1 })
        }else {
            throw new Error("Invalid chaind id in handlespend()")
        }

        contract = new web3.eth.Contract(ERC20TransferABI, BSC_NOTEPROXY_CONTRACT_ADDRESS)
        const account = web3.eth.accounts.privateKeyToAccount('0x' + PRIVATE_KEY)
        web3.eth.accounts.wallet.add('0x' + PRIVATE_KEY)
        // eslint-disable-next-line require-atomic-updates
        web3.eth.defaultAccount = account.address
      
		let proof
		data = fs.readFileSync("./notes/"+ noteid + '.json', 'utf8', null)
		note = JSON.parse(data);

		if (proofprovided.length == 0) {
			data = fs.readFileSync("./notes/"+ noteid + '-proof.json', 'utf8', null)
			proof = JSON.parse(data);
		}else {
			proof = JSON.parse(proofprovided);
		}
		console.log("Proof = ", proof)
		
		proofa =[BigInt(proof.proof.a[0]), BigInt(proof.proof.a[1])]
		proofb =[[BigInt(proof.proof.b[0][0]), BigInt(proof.proof.b[0][1])],[BigInt(proof.proof.b[1][0]), BigInt(proof.proof.b[1][1])]]
		proofc =[BigInt(proof.proof.c[0]), BigInt(proof.proof.c[1])]
		proofinputs =[BigInt(note.pk1), BigInt(note.pk2), BigInt(note.root), BigInt(note.path0), 1]

		console.log("proofa = ",proofa)
		console.log("proofb = ",proofb)
		console.log("proofc = ",proofc)
		console.log("proofinputs = ",proofinputs)

        const tx = await contract.methods.spendNote(proofa, proofb, proofc, proofinputs, notereq, amount,  
            recipient).send({ value: "0", from: web3.eth.defaultAccount, gas:2e6 }).then(transaction =>{
				console.log("Transaciton hash =", transaction)

			})

        console.log('spend note request')

        return tx

    } catch (error) {
        console.log("handlespend error: ", error)
    }
}

function u256tou32(digest) {
	var arr= []
	arr.push(parseInt(digest.slice(2,10), 16))
	arr.push(parseInt(digest.slice(10,18), 16))
	arr.push(parseInt(digest.slice(18,26), 16))
	arr.push(parseInt(digest.slice(26,34), 16))
	arr.push(parseInt(digest.slice(34,42), 16))
	arr.push(parseInt(digest.slice(42,50), 16))
	arr.push(parseInt(digest.slice(50,58), 16))
	arr.push(parseInt(digest.slice(58,66), 16))

	return arr
}
const util = require('util');
async function generateproof(userid, noteid){
	// var obj;
    // fs.readFile(noteid + '.json', 'utf8', function (err, data) {
	// 	if (err) throw err;
	// 	obj = JSON.parse(data);

	// 	// var spawn = require('child_process').spawn,
	// 	// free  = spawn('free', ['-m']);
	
	// 	// // 捕获标准输出并将其打印到控制台
	// 	// free.stdout.on('data', function (data) {
	// 	// 	console.log('标准输出：\n' + data);
	// 	// });
		
	// 	// // 捕获标准错误输出并将其打印到控制台
	// 	// free.stderr.on('data', function (data) {
	// 	// 	console.log('标准错误输出：\n' + data);
	// 	// });
		
	// 	// // 注册子进程关闭事件
	// 	// free.on('exit', function (code, signal) {
	// 	// 	console.log('子进程已退出，代码：' + code);
	// 	// });

    // });
	try {
		data = fs.readFileSync("./notes/"+ noteid + '.json', 'utf8', null)
		obj = JSON.parse(data);

		console.log("Note pk1= "+ obj.pk1 + " pk2=" + obj.pk2 + " root= " + obj.root + " leaf=" + obj.leaf + " path0=" +obj.path0 + 
		    " path1=" + obj.path1 + " direction[0]= " + obj.direction[0] + " direction[1]=" + obj.direction[1])

		rootarr = u256tou32(obj.root)
		leafarr = u256tou32(obj.leaf)
		path0arr = u256tou32(obj.path0)
		path1arr = u256tou32(obj.path1)
		console.log("rootarr = ", rootarr)

		// console.log("pk1=", BigInt(obj.pk1).toString(10))
		parameters = util.format("%s %s %s %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d", 
				BigInt(obj.pk1).toString(10), BigInt(obj.pk2).toString(10), "37232355431795428394424168963998030788617641514587324629047050974144141575298", rootarr[0], rootarr[1], rootarr[2], rootarr[3], rootarr[4], rootarr[5], rootarr[6], rootarr[7],
				leafarr[0], leafarr[1],leafarr[2],leafarr[3],leafarr[4],leafarr[5],leafarr[6],leafarr[7],
				path0arr[0],path0arr[1],path0arr[2],path0arr[3],path0arr[4],path0arr[5],path0arr[6],path0arr[7],
				path1arr[0],path1arr[1],path1arr[2],path1arr[3],path1arr[4],path1arr[5],path1arr[6],path1arr[7],
				obj.direction[0],obj.direction[1])
		console.log("parameters =", parameters)

		var exec = require('child_process').exec,
		last = exec('cd notes; zokrates compute-witness -a '+  parameters + '; zokrates generate-proof; mv proof.json ' + noteid +'-proof.json');

		last.stdout.on('data', function (data) {
			console.log('标准输出：' + data);
		});

		last.on('exit', function (code) {
			console.log('子进程已关闭，代码：' + code);
		});
    } catch (error) {
        console.log("generate proof  error: ", error)
    }


	// initialize().then((zokratesProvider) => {
	// 	// const source = "def main(private field a) -> field: return a * a";
	// 	const source = fs.readFileSync('./notes/withdraw.zok')

	// 	// compilation
	// 	const artifacts = zokratesProvider.compile(source);
	
	// 	// computation
	// 	const { witness, output } = zokratesProvider.computeWitness(artifacts, 
	// 		[17559621506966228669946200908540191909304602050620774623186985148217036891086,
	// 		 3499692685359225014642568034871893823673913644950320594232804843053171036306,
	// 		 37232355431795428394424168963998030788617641514587324629047050974144141575298,
	// 		 2750958632, 3860495517, 2694795054, 1180789744, 1942258783, 1698713166, 1678052419, 30359419,
	// 		 3280663902, 2870896982, 2870967870, 472011007, 359726217, 4254639460, 1845398842, 1208882838,
	// 		 0, 0, 0, 0, 0, 0, 0, 0,
	// 		 4121296194, 3513393200, 664334190, 3540621211, 1124089123, 551153896, 3935842729, 660208459,
	// 		 0, 0]);

	// 	console.log(witness); // Resulting witness which can be used to generate a proof
	// 	console.log(output); 

	// 	// // run setup
	// 	// const keypair = zokratesProvider.setup(artifacts.program);
	
	// 	// generate proof
	// 	const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);

	// 	return proof		
	// 	// // export solidity verifier
	// 	// const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk, "v1");
	// });
}

async function transactionTimer(){
    console.log("In transactionTimer()...")
    console.log("task length =" +  global.globalTransactions.length)

    // for(let i in global.globalTransactions){
    //     console.log(`i:${i},global.globalTransactions[i]:${JSON.stringify(global.globalTransactions)}`);
    // }
    try{

        for (var j=global.globalTransactions.length-1; j>=0 ; j--){
            task =  global.globalTransactions[j]
            console.log(JSON.stringify(task));

			if (task.status != 0 && task.status != 1){
				continue
			}	

            let chainid, noteproxy
			let bchainswitch =false

			if (task.status ==0) {
				chainid = task.fromchainid 
			}else{
				chainid = task.tochainid
			}

            // Connection    
            if (chainid == 2) { // 2
                web3 = new Web3(new Web3.providers.HttpProvider(ETH_RPC_URL, { timeout: 5 * 60 * 1000 }), null, { transactionConfirmationBlocks: 1 })
                noteproxy = ETH_NOTEPROXY_CONTRACT_ADDRESS
            }else if (chainid == 79) { // 79 ###
                web3 = new Web3(new Web3.providers.HttpProvider(BSC_RPC_URL, { timeout: 5 * 60 * 1000 }), null, { transactionConfirmationBlocks: 1 })
                noteproxy = BSC_NOTEPROXY_CONTRACT_ADDRESS
                console.log("URL="+ BSC_RPC_URL + " noteproxy = "+ noteproxy)
            }else {
                console.log("Invalid Chain ID in transactionTimer");
                continue
            };

            // start block
            // task.blockno = 15560000;
            let startblockno = task.blockno ;
            let curblockno = 0 ;
            if (task.blockno ==0 ){
                if (chainid == 2) {
                    startblockno = ETH_START_BLOCK
                }else  {
                    startblockno = BSC_START_BLOCK
                }
            }else {
                curblockno = await web3.eth.getBlockNumber();
                if (task.blockno > curblockno){
                    startblockno = curblockno;
                }
            }

            let toblockno = startblockno + Scan_Block_Number ;
            // console.log("Output=" + ZKPOUTPUT_EVENT + " Input =" + ZKPINPUT_EVENT)
            
			if (task.status == 0){ // sent
				let logs = await web3.eth.getPastLogs({fromBlock: startblockno, toBlock: toblockno, topics: [
					ZKPOUTPUT_EVENT ], address: noteproxy})
					.catch(function (e) {
						log4js.error('Inner Chain Check 查询交易记录出错: startBlock: ' + startblockno + ' -> endBlock: ' + toblockno);
						return null;
				});
				console.log("Inner Chain Check startBlock: " + startblockno + " -> endBlock:"  + toblockno + "  logs length = " + logs.length)

				// logs = transactionReceipt.logs
				// console.log("logs =" + logs.length)
		
				for (var i=0; i< logs.length; i++){
					// event ZKPOutputEvent(bytes32 noteid, bytes toAssetHash, address fromAssetHash, uint64 toChainId, uint256 amount, uint256 pk1, uint256 pk2, string encryptedNote, address fromaddress/*, bytes32[4] arr, bool[2] directionSelector*/);
					console.log("log item ["+ i +"] " + JSON.stringify(logs[i]))

					if (ZKPOUTPUT_EVENT == logs[i].topics[0] && task.fromtx == logs[i].transactionHash){
						// console.log("log item ["+ i +"] " + JSON.stringify(logs[i]))
		
						const typesArray = [
							{type: 'bytes32', name: 'noteid'}, 
							{type: 'bytes', name: 'toassethash'},
							{type: 'address', name: 'fromassethash'},
							{type: 'uint64', name: 'tochainid'},
							{type: 'uint256', name: 'amount'},
							{type: 'uint256', name: 'pk1'},
							{type: 'uint256', name: 'pk2'},
							{type: 'string', name: 'encryptednote'},
							{type: 'address', name: 'fromaddress'}
						];
						
						const decodedParameters = web3.eth.abi.decodeParameters(typesArray, logs[i].data);
						console.log(JSON.stringify(decodedParameters, null, 4));
		
						if (task.tochainid == 2) {
							web3alt = new Web3(new Web3.providers.HttpProvider(ETH_RPC_URL, { timeout: 5 * 60 * 1000 }), null, { transactionConfirmationBlocks: 1 })
						}else if(task.tochainid == 79) {
							web3alt = new Web3(new Web3.providers.HttpProvider(BSC_RPC_URL, { timeout: 5 * 60 * 1000 }), null, { transactionConfirmationBlocks: 1 })
						}else {
							console.log("Invalid To Chain ID =" + tochainid)
							throw new Error("Invalid To Chain ID")
						}
						altblockno = await web3alt.eth.getBlockNumber()
		
						task.blockno = altblockno;
						bchainswitch = true; 
						task.noteid = decodedParameters.noteid;
						curblockno=altblockno
						task.status =1 

						console.log("Transaction Included ... task = ", task)

						// global.globalTransactions.push({pk1: decodedParameters.pk1, pk2: decodedParameters.pk2, amount:decodedParameters.amount, tochainid: decodedParameters.tochainid, 
						// 	fromassethash: decodedParameters.fromassethash, encrypotednote: decodedParameters.encryptednote, fromchainid:decodedParameters.fromchainid, 
						// 	noteid: decodedParameters.noteid, status:1, fromtx: transactionReceipt.transactionHash , 
						// 	fromaddress: decodedParameters.fromaddress, blockno: blockno, root:0, leaf:0,path0:0,path1:0, direction:[0,0], userid:userid})
					}
				}	
			}else if (task.status == 1){ // included 
				let datas = await web3.eth.getPastLogs({fromBlock: startblockno, toBlock: toblockno, topics: [
					/*ZKPOUTPUT_EVENT,*/ ZKPINPUT_EVENT ], address: noteproxy})
					.catch(function (e) {
						log4js.error('查询交易记录出错: startBlock: ' + startblockno + ' -> endBlock: ' + toblockno);
						return null;
				});
				console.log("Cross Chain Check  startBlock: " + startblockno + " -> endBlock:"  + toblockno + "  datas length = " + datas.length)
			
				for (let i = 0; i < datas.length; i++) {
					let item = datas[i];
					console.log(JSON.stringify(item, null, 4));
	
					// ZKPInputEvent(bytes32 noteid, bytes32 reqhash, bytes toAssetHash, uint256 amount,bytes32[4] arr, bool[2] directionSelector);
					const typesArray = [
						{type: 'bytes32', name: 'noteid'}, 
						{type: 'bytes32', name: 'notereq'},
						{type: 'bytes', name: 'toAssetHash'},
						{type: 'uint256', name: 'amount'},
						{type: 'bytes32[4]', name: 'arr'},
						{type: 'bool[2]', name: 'directionSelector'}
					];
					
					const decodedParameters = web3.eth.abi.decodeParameters(typesArray, item.data);
					console.log(JSON.stringify(decodedParameters, null, 4));
	
					if (task.noteid == decodedParameters.noteid) {

						task.notereq = decodedParameters.notereq
						task.root = decodedParameters.arr[2]
						task.leaf = decodedParameters.arr[3]
						task.path0 = decodedParameters.arr[0]
						task.path1 = decodedParameters.arr[1]
						task.direction = decodedParameters.directionSelector
						task.status = 2 // Transferred

						// write note json file 
						let data = JSON.stringify(task,"","\t");
						fs.writeFileSync('./notes/'+ task.noteid + '.json', data);

						// Delete it
						global.globalTransactions.splice(j,1)

					}else{
						console.log("Found Event with same topic, but noteid not equal. So discard ... ")
					}

				}
			}

            if (bchainswitch == false) {
                let latestblockno = curblockno; // web3.eth().block_number().await.unwrap().as_u64();
                if (toblockno > latestblockno) {
                    task.blockno = latestblockno
                }else{
                    task.blockno = toblockno
                }
            }
        }
    } catch (error) {
        console.log("transactionTimer error: ", error)
    }
}

global.globalTransactions =[]
global.globalCompletedTransactions =[]

module.exports = {
    handlespend,
    handledeposit,
	transactionTimer,
	generateproof,
    BSC_RPC_URL,
    ETH_RPC_URL,
    BSC_NOTEPROXY_CONTRACT_ADDRESS,
    ETH_NOTEPROXY_CONTRACT_ADDRESS,
    ZKPOUTPUT_EVENT,
    ZKPINPUT_EVENT,
    ETH_START_BLOCK,
    BSC_START_BLOCK
}