# JavaScript to Ambients Compiler _(js2amb)_

> Compiles JavaScript to Ambient protocol syntax

## Background

[Ambients](https://ambients.org) is a protocol for distributed computation. It allows you to request and execute computation as easily as you can data inside OrbitDB. Think of it like AWS Lambda or Azure Cloud functions, but on a decentralized peer-to-peer network.

The protocol also includes guarantees as to the verfiability and safety of the code, all without a blockchain.

A working implementation of the Ambients protocol has two main functions:

1. Compile source language code into "byecode" DAG, and store it in a distributed, peer-to-peer network.
2. Retrieve the DAG from said network and safely + verfiably execute the code.

## Description

This code, while it can be executed on its own, stands to support the [`ambc`](https://github.com/aphelionz/ambc/) compiler by transliterating JavaScript code into Ambients syntax.

_This effort is very alpha_ and there's a LOT of work to be done in order to be able to parse JS syntax fully. If you want to help, please [seek us out on Gitter](https://gitter.im/ambientsprotocol/community) or by open an issue.

## Install

First, [install node.js](https://www.nodejs.org) Then:

```bash
$ git clone https://github.com/aphelionz/js2amb
$ cd js2amb
$ npm install
```

# Usage

There is currently rudimentary CLI support via src/bin.js:

```
$ ./src/bin.js path/to/js/file.js # outputs Ambients ASCII
```

To see it in action, you can run the tests.

```bash
% make test
```

# Contributing

Please do! If you're _at all_ interested in this topic you should definitely
[seek us out on Gitter](https://gitter.im/ambientsprotocol/community), open issues, and submit PRs.

# License

[MIT](LICENSE) © 2019 Haja Networks Oy
