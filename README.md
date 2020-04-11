This is a vanilla JavaScript example how to use Web3modal with different  wallet providers.

The purpose of this example is how to connect a cryptocurrency wallet
to a website that is build on traditional HTML technologies and does not
use any modern JavaScript framework. Uses cases would include:
static HTML sites, WordPress, content management systems,
tutorials and education.

* [View demo hosted on Github](https://web3modal.github.io/web3modal-vanilla-js-example/)

![screenshot](./screenshot.png)

# Web3 wallets and HTTPS hosting limitations

Because of limitations how wallet operate within a web browser
and security of remote API calls used by the wallets,
you should not run this example, or any Web3modal code,
out of your file system or unsecure HTTP protocol
(even on localhost).

The APIs of different wallet providers
will fail in funny and obscure way. MetaMask does not even show up.

The easiest way to get local HTTPS development
is to use [https-localhost](https://github.com/daquinoaldo/https-localhost).

Assuming you have a working Node environment set up:

```sh
npm i -g --only=prod https-localhost
sudo serve .
```

... in the folder of index.html file.

Then you can visit https://localhost to open the example.

# Publishing example on Github

To republish the example:

```sh
git push origin master:gh-pages
```

This will push `index.html` to https://web3modal.github.io/web3modal-vanilla-js-example/

