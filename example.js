window.addEventListener('load', async () => {
  const Web3Modal = window.Web3Modal.default;

  const WalletConnectProvider = window.WalletConnectProvider.default;

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {

        // Get a free hosted Ethereum node from https://quiknode.io
        // This API key is one provided by Mikko's personal account for this demo
        rpcURL: "https://twilight-morning-mountain.quiknode.pro/929901c69e24d67308666b8d5b0fcae3870fd8f5/"
      }
    }
  };

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });

  // Get a live wallet provider
  const provider = await web3Modal.connect();

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);

  // Get list of accounts of the connected wallet
  const accounts = await web3
    .eth
    .getAccounts();

  // Get a handl
  const template = document.querySelector('#template-balance');
  const accountContainer = document.querySelector("#accounts");

  // Go through all accounts and get their ETH balance
  accounts.map(address => {
    const balance = await web3.eth.getBalance(address);

    const clone = template.content.cloneNode(true);

    clone
      .querySelectorAll(".address")
      .textContent = address;

    clone
      .querySelectorAll(".balance")
      .textContent = balance;

    accountContainer.appendChild(clone);
  });