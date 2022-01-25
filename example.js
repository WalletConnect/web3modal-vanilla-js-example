//"use strict";
//import { ttt } from "./test";

//i mport { contractjson } from "./cnt";
let contracttext =
  '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"Burn_Message","type":"string"},{"indexed":false,"internalType":"uint256","name":"Burnt_Amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Total_Burnt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Total_Supply_Left","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Time_Stamp","type":"uint256"}],"name":"BurnLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"recv1","type":"address"}],"name":"CLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"Exrate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ExRateBase","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Fees","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timeStamp","type":"uint256"}],"name":"ExRateLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"Referral_Bonus","type":"string"},{"indexed":false,"internalType":"uint256","name":"BonusDOGE_in_18decimals","type":"uint256"},{"indexed":false,"internalType":"address","name":"Awarded_To","type":"address"},{"indexed":false,"internalType":"uint256","name":"Total_Awarded_To","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Total_Awards","type":"uint256"}],"name":"ReferralBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"TxnLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"EventMessage","type":"string"},{"indexed":false,"internalType":"string","name":"game","type":"string"},{"indexed":false,"internalType":"uint256","name":"duuid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"offChainAnnouncement","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"which_function","type":"string"},{"indexed":false,"internalType":"address","name":"add1","type":"address"},{"indexed":false,"internalType":"address","name":"add2","type":"address"},{"indexed":false,"internalType":"bytes","name":"msgdata","type":"bytes"},{"indexed":false,"internalType":"uint256","name":"msgvalue","type":"uint256"}],"name":"print_addresses","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"a_a_Show_All_Info","outputs":[{"internalType":"uint256","name":"contract_weii","type":"uint256"},{"internalType":"uint256","name":"CirculatingSupply_18decimals","type":"uint256"},{"internalType":"uint256","name":"Previous_Burnt_Time","type":"uint256"},{"internalType":"uint256","name":"Previous_Burnt_Amount","type":"uint256"},{"internalType":"uint256","name":"Total_Burnt","type":"uint256"},{"internalType":"uint256","name":"current_milestone","type":"uint256"},{"internalType":"uint256","name":"next_milestone","type":"uint256"},{"internalType":"uint256","name":"curr_exchange_rate","type":"uint256"},{"internalType":"uint256","name":"next_exchange_rate","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"DeveloperPool","type":"uint256"},{"internalType":"uint256","name":"GamerPool","type":"uint256"},{"internalType":"uint256","name":"totalSupply_","type":"uint256"},{"internalType":"uint256","name":"total_refer_awarded","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"a_public_buyDOGE","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"a_public_getContractBalanceWeiTok","outputs":[{"internalType":"uint256","name":"weii","type":"uint256"},{"internalType":"uint256","name":"CirculatingSupply_18decimals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"weii","type":"uint256"}],"name":"a_public_getDOGEVal","outputs":[{"internalType":"uint256","name":"DOGE_in_18_decimal_places","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"DOGE_in_18_decimal_places","type":"uint256"}],"name":"a_public_getWeiVal","outputs":[{"internalType":"uint256","name":"weii","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"a_public_liqLockStatus","outputs":[{"internalType":"bool","name":"liqLockStatus","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"DOGE_in_18_decimal_places","type":"uint256"}],"name":"a_public_sellDOGE_Forced_30percentFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"DOGE_in_18_decimal_places","type":"uint256"}],"name":"a_public_sellDOGE_lowFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"whoReferredYou","type":"address"}],"name":"a_public_setReferrer","outputs":[{"internalType":"address","name":"set_Referrer","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"a_public_showBurnHistory","outputs":[{"internalType":"uint256","name":"Previous_Burnt_Time","type":"uint256"},{"internalType":"uint256","name":"Previous_Burnt_Amount","type":"uint256"},{"internalType":"uint256","name":"Total_Burnt","type":"uint256"},{"internalType":"uint256","name":"Total_Supply_Left","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"a_public_showContractWebsite","outputs":[{"internalType":"string","name":"website","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"a_public_showExRate","outputs":[{"internalType":"uint256","name":"ExRate","type":"uint256"},{"internalType":"uint256","name":"ExRateBase","type":"uint256"},{"internalType":"uint256","name":"Fees","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"a_public_showMilestone","outputs":[{"internalType":"uint256","name":"current_milestone","type":"uint256"},{"internalType":"uint256","name":"next_milestone","type":"uint256"},{"internalType":"uint256","name":"curr_exchange_rate","type":"uint256"},{"internalType":"uint256","name":"next_exchange_rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"a_public_showNetWeiTXN","outputs":[{"internalType":"uint256","name":"NetWeiTransacted","type":"uint256"},{"internalType":"uint256","name":"VolumeWeiTransacted","type":"uint256"},{"internalType":"uint256","name":"NumTransactions","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"a_public_showOwner","outputs":[{"internalType":"address","name":"ownerIs","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referree","type":"address"}],"name":"a_public_showReferrer","outputs":[{"internalType":"address","name":"who_referred_the_referree","type":"address"},{"internalType":"uint256","name":"Bonus_Earned_by_referrer","type":"uint256"},{"internalType":"uint256","name":"Bonus_Earned_by_referree","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"a_public_showSupplies","outputs":[{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"DeveloperPool","type":"uint256"},{"internalType":"uint256","name":"GamerPool","type":"uint256"},{"internalType":"uint256","name":"CommunityPool","type":"uint256"},{"internalType":"uint256","name":"AdminFunds","type":"uint256"},{"internalType":"uint256","name":"MarketingFunds","type":"uint256"},{"internalType":"uint256","name":"Individuals","type":"uint256"},{"internalType":"uint256","name":"totalSupply_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weii","type":"uint256"}],"name":"z_private_Withdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"message","type":"string"},{"internalType":"string","name":"game","type":"string"},{"internalType":"uint256","name":"duuid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"z_private_announcement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"z_private_liqLockToggle","outputs":[{"internalType":"bool","name":"liqLockStatus","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tok18","type":"uint256"},{"internalType":"address","name":"pool","type":"address"}],"name":"z_private_pool_burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"uint256","name":"tok18","type":"uint256"}],"name":"z_private_regenerate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"dev_","type":"address"},{"internalType":"address","name":"gamer_","type":"address"},{"internalType":"address","name":"com_","type":"address"},{"internalType":"address","name":"admin_","type":"address"},{"internalType":"address","name":"mark_","type":"address"},{"internalType":"address","name":"announcer_","type":"address"}],"name":"z_private_setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"website","type":"string"}],"name":"z_private_setContractInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ExRate_","type":"uint256"},{"internalType":"uint256","name":"ExRateBase_","type":"uint256"},{"internalType":"uint256","name":"Fees_","type":"uint256"}],"name":"z_private_setExRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"current_milestone","type":"uint256"},{"internalType":"uint256","name":"next_milestone","type":"uint256"},{"internalType":"uint256","name":"next_exchange_rate","type":"uint256"}],"name":"z_private_set_milestone","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tok18","type":"uint256"}],"name":"z_public_burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]';
//import { contractjson } from "./cnt.js";
//import contr from "./cnt2.js";
let wbnbcontracttext = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]';
//import "/js/cnt2.js";
//import { contractjson } from "./js/cnt2.js";
//let hehe = contractjson;
//let ccjss = require("./js/cnt2.js");
//console.log("loading sc", contractjson);
//console.log("loading script_emple", ttt);
//console.log("loading script_example", contractjson);
//console.log(cjs);
// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;
let web3Modal; // Web3modal instance
let provider; // Chosen wallet provider given by the dialog window
let selectedAccount; // Address of the selected account
let networkconnected;
let web3;
let DMcontract;
let DMcontractunlocked;
let contractAddress = "0x3C37ab18d0EC386d06dD68E3470e49bFDC0D46E8";
let accounts;
let currBNBPrice = 470;
let currDMpriceContract = 0.7 / 1000000;
let currDMpricePKswap = 0.7 / 1000000;
let web3DMpricecontract = new Web3("https://bsc-dataseed.binance.org/");
let DMpricecontract = new web3DMpricecontract.eth.Contract(
  JSON.parse(contracttext),
  contractAddress
);
let wbnbContract = new web3DMpricecontract.eth.Contract(
  JSON.parse(wbnbcontracttext),
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
);
/**
 * Setup the orchestra
 */
function init() {
  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);
  console.log(
    "window.web3 is",
    window.web3,
    "window.ethereum is",
    window.ethereum
  );
  // Check that the web page is run in a secure context,
  // as otherwise MetaMask won't be available
  if (location.protocol !== "https:") {
    // https://ethereum.stackexchange.com/a/62217/620
    const alert = document.querySelector("#alert-error-https");
    alert.style.display = "block";
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled");
    return;
  }
  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    // walletconnect: {
    //   package: WalletConnectProvider,
    //   options: {
    //     // Mikko's test key - don't copy as your mileage may vary
    //     infuraId: "8043bb2cf99347b1bfadfb233c5325c0"
    //   }
    // }
    // ,
    // fortmatic: {
    //   package: Fortmatic,
    //   options: {
    //     // Mikko's TESTNET api key
    //     key: "pk_test_391E26A3B43A3350"
    //   }
    // }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false // optional. For MetaMask / Brave / Opera.
  });
  console.log("Web3Modal instance is", web3Modal);
}
/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
  // Get a Web3 instance for the wallet
  web3 = new Web3(provider);
  const bscweb3 = new Web3("https://bsc-dataseed.binance.org/");
  console.log("Web3 instance is", web3);
  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);
  networkconnected = chainData.name;
  if (networkconnected !== "Binance Smart Chain Mainnet") {
    document.querySelector("#network-not-BSC").innerHTML =
      `<strong style="color: darkred; font-weight: bold;">Wrong Network:</strong> Please Connect to Binance Smart Chain in MetaMask.`;
      alert("Please connect to Binance Smart Chain in MetaMask.");
  } else {
    document.querySelector("#network-not-BSC").innerHTML = "";
    DMcontractunlocked = new web3.eth.Contract(
      JSON.parse(contracttext),
      contractAddress
    );
  }
  document.querySelector("#network-name").textContent = chainData.name;
  // Get list of accounts of the connected wallet
  accounts = await web3.eth.getAccounts();
  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];
  document.querySelector("#selected-account").textContent = selectedAccount.substring(0, 8)+"..."+selectedAccount.substring(selectedAccount.length-6,selectedAccount.length);
  document.querySelector("#view-bsc-account").innerHTML = `<a href="https://bscscan.com/address/` + selectedAccount + `" target="_blank" class="text-info"> View account on BSC Scan</a>`;
  // Go through all accounts and get their ETH balance
  const rowResolvers = accounts.map(async (address) => {
    // set "loading" text
    document.querySelector("#BNBbal").textContent = "fetching data";
    document.querySelector("#DMbal").textContent = "fetching data";
    // fetch bnb balance
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    const busdvalue = (parseFloat(ethBalance) * currBNBPrice).toFixed(2);
    document.querySelector("#BNBbal").textContent = humanFriendlyBalance + " BNB ( ≈USD$" + busdvalue + " )";
    // fetch doge multi value
    DMcontract = new bscweb3.eth.Contract(
      JSON.parse(contracttext),
      contractAddress
    );
    DMcontract.methods
      .balanceOf(address)
      .call()
      .then((dictt) => {
        console.log(dictt, "balanceOf");
        const DMbal = web3.utils.fromWei(dictt, "ether");
        const humanFriendlyDMbal = parseFloat(DMbal).toFixed(4);
        if (parseFloat(DMbal) < 100000) {
          const busdvalue = (parseFloat(DMbal) * currDMpriceContract).toFixed(8);
          document.querySelector("#DMbal").textContent = humanFriendlyDMbal + " $DogeMulti ( ≈USD$" + busdvalue + " )";
        } else {
          const busdvalue = (parseFloat(DMbal) * currDMpriceContract).toFixed(2);
          document.querySelector("#DMbal").textContent = humanFriendlyDMbal + " $DogeMulti ( ≈USD$" + busdvalue + " )";
        }
      });
  });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);

  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";
  document.querySelector("#connectStatus").style.display = "none";
}

// api url
const api_url =
  "https://api.binance.com/api/v3/avgPrice?symbol=BNBBUSD";
/**
 * fetch latest price from binance https://api.binance.com/api/v3/avgPrice?symbol=BNBBUSD
 * /api/v3/ticker/24hr
 * https://api.binance.com/api/v3/ticker/24hr?symbol=BNBBUSD
 */
async function getprice(url) {
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
  let bnbprice = Number.parseFloat(data.price).toFixed(2);
  DMpricecontract.methods
    .a_public_showExRate()
    .call()
    .then((dictt) => {
      console.log(dictt, "ExRate");
      const ExRate = Number.parseFloat(dictt.ExRate);
      const ExRateBase = Number.parseFloat(dictt.ExRateBase);
      currDMpriceContract = bnbprice / (ExRateBase / ExRate);
      const humanFriendlyRate = (1000000 * currDMpriceContract).toFixed(4); // one bnb gives this amount
      document.querySelector("#currDMpriceContract").textContent = "USD$ " + humanFriendlyRate + " per Million $DogeMulti (Contract)";
    });
  wbnbContract.methods.balanceOf("0xCF758d3570874375878682b54d5798073fE982A1").call().then((dictt) => {
    const pkswapbnbval = web3DMpricecontract.utils.fromWei(dictt, "ether");
    //alert("bnb staked in pancake pair"+Number(pkswapbnbval).toFixed(4)); 
    DMpricecontract.methods
      .balanceOf("0xCF758d3570874375878682b54d5798073fE982A1")
      .call()
      .then((dictt) => {
        //console.log(dictt, "doge multi in pancakeswap");
        const pkswapDMval = web3DMpricecontract.utils.fromWei(dictt, "ether");
        //alert("dogemulti staked in pancake pair"+Number(pkswapDMval).toFixed(4)); 
        //const ExRate = Number.parseFloat(dictt.ExRate);
        //const ExRateBase = Number.parseFloat(dictt.ExRateBase);
        currDMpricePKswap = bnbprice / (pkswapDMval / pkswapbnbval);
        const humanFriendlyRate = (1000000 * currDMpricePKswap).toFixed(4); // one bnb gives this amount
        document.querySelector("#currDMpricePKswap").textContent = "USD$ " + humanFriendlyRate + " per Million $DogeMulti (Pancakeswap)";
      });
  });
}
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab = Number.parseFloat(data.price).toFixed(2);
  currBNBPrice = Number.parseFloat(data.price);
  document.getElementById("currBNBprice").innerHTML = "USD$ " + tab + " per BNB";
}
/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
getprice(api_url);

async function refreshAccountData() {
  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled");
  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled");
}
async function onBuy() {
  let val2 = document.getElementById("qbnb").value;
  //console.log(val2, "buy button pressed");
  //alert(val2+"buy button pressed");
  if (networkconnected !== "Binance Smart Chain Mainnet") {
    alert("Please connect to the Binance Smart Chain Mainnet.");
    return;
  }
  const weii = web3.utils.toWei(val2, "ether");
  //alert("number in weii"+weii);
  DMcontractunlocked.methods.a_public_buyDOGE().send({ 'from': accounts[0], "gas": 201230, "value": weii }).then((receipt) => {
    if (receipt) {
      console.log(receipt["transactionHash"], "transactionHash");
      alert("Success! You now enjoy +10% Bonus.\nTranscation sent to blockchain, Txn Hash: " + receipt["transactionHash"]);
    }
  }).catch((error) => {
    if (error["code"] == 4001) {
      alert("Transaction rejected by user.\nMessage: " + error["message"]);
    } else if (error["code"] == -32603) {
      alert("Not enough gas.\nMessage: " + error["message"]);
    } else {
      console.log(error, "txn error");
      alert("Transaction error,\ncode: " + error["code"] + "\nMessage: " + error["message"]);
    }
  });
}
async function onSellLowFee() {
  let val2 = document.getElementById("qDM").value;
  //console.log(val2, "sell button pressed");
  //alert(val2+"sell low fee button pressed");
  window.alert("This function will unlock when milestones are achieved.\nSell with high fee if you really need to.");
  return;
  if (networkconnected !== "Binance Smart Chain Mainnet") {
    alert("Please connect to the Binance Smart Chain Mainnet.");
    return;
  }
  const weii = web3.utils.toWei(val2, "ether");//alert("number in weii"+weii);
  DMcontractunlocked.methods.a_public_sellDOGE_lowFee(weii).send({ 'from': accounts[0], "gas": 201230 }).then((receipt) => {
    if (receipt) {
      console.log(receipt["transactionHash"], "transactionHash");
      alert("Success!\nTranscation sent to blockchain, Txn Hash: " + receipt["transactionHash"]);
    }
  }).catch((error) => {
    if (error["code"] == 4001) {
      alert("Transaction rejected by user.\nMessage: " + error["message"]);
    } else if (error["code"] == -32603) {
      alert("Not enough gas.\nMessage: " + error["message"]);
    } else {
      console.log(error, "txn error");
      alert("Transaction error,\ncode: " + error["code"] + "\nMessage: " + error["message"]);
    }
  });
}
async function onSellForced() {
  let val2 = document.getElementById("qDM").value;
  //console.log(val2, "sell button pressed");
  //alert(val2+"sell forced button pressed");
  if (networkconnected !== "Binance Smart Chain Mainnet") {
    alert("Please connect to the Binance Smart Chain Mainnet.");
    return;
  }
  const weii = web3.utils.toWei(val2, "ether");
  //alert("number in weii"+weii);
  DMcontractunlocked.methods.a_public_sellDOGE_Forced_30percentFee(weii).send({ 'from': accounts[0], "gas": 201230 }).then((receipt) => {
    if (receipt) {
      console.log(receipt["transactionHash"], "transactionHash");
      alert("Success! Transcation sent to blockchain, Txn Hash: " + receipt["transactionHash"]);
    }
  }).catch((error) => {
    if (error["code"] == 4001) {
      alert("Transaction rejected by user.\nMessage: " + error["message"]);
    } else if (error["code"] == -32603) {
      alert("Not enough gas.\nMessage: " + error["message"]);
    } else {
      console.log(error, "txn error");
      alert("Transaction error,\ncode: " + error["code"] + "\nMessage: " + error["message"]);
    }
  });
}
async function onSetReferrer() {
  let val2 = document.getElementById("refAddr2").value;
  var patt = new RegExp(/^0x[a-fA-F0-9]{40}$/);
  if (!patt.test(val2)) {
    alert("Please enter a valid wallet address. (starts with '0x...') ");
    return;
  }
  if (networkconnected !== "Binance Smart Chain Mainnet") {
    alert("Please connect to the Binance Smart Chain Mainnet.");
    return;
  }
  DMcontractunlocked.methods.a_public_setReferrer(val2).send({ 'from': accounts[0], "gas": 64243 }).then((receipt) => {
    if (receipt) {
      console.log(receipt["transactionHash"], "transactionHash");
      alert("Success! You now enjoy +10% Bonus.\nTranscation sent to blockchain, Txn Hash: " + receipt["transactionHash"]);
    }
  }).catch((error) => {
    if (error["code"] == 4001) {
      alert("Transaction rejected by user.\nMessage: " + error["message"]);
    } else if (error["code"] == -32603) {
      alert("Not enough gas.\nMessage: " + error["message"]);
    } else {
      console.log(error, "txn error");
      alert("Transaction error,\ncode: " + error["code"] + "\nMessage: " + error["message"]);
    }
  });
}
/**
 * Connect wallet button pressed.
 */
async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
    //refreshAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
    //refreshAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
    //refreshAccountData();
  });

  await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {
  console.log("Killing the wallet connection", provider);

  // TODO: Which providers have close method?
  if (provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  // Set the UI back to the initial state
  document.querySelector("#prepare").style.display = "block"; //justify-content: center;  
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#connectStatus").style.display = "block";
}

/**
 * Main entry point.
 */
window.addEventListener("load", async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-buy").addEventListener("click", onBuy);
  document.querySelector("#btn-sell-low-fee").addEventListener("click", onSellLowFee);
  document.querySelector("#btn-sell-forced").addEventListener("click", onSellForced);
  document.querySelector("#btn-setreferrer2").addEventListener("click", onSetReferrer);
  document.getElementById("qbnb").addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
      event.preventDefault();
      onBuy();
    }
  });
  document
    .querySelector("#btn-disconnect")
    .addEventListener("click", onDisconnect);
});
