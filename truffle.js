module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*" // match any network
      },
      ropsten: {
        host: "127.0.0.1", // Random IP for example purposes (do not use)
        port: 8545,
        gas: 5000000,
        network_id: 3,        // Ethereum Ropsten test network

        // optional config values:
        // gas
        // gasPrice
        // from - default address to use for any transaction Truffle makes during migrations
        // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
        //          - function that returns a web3 provider instance (see below.)
        //          - if specified, host and port are ignored.
      }
    }
};
