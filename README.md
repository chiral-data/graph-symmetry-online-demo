# Online Demo - Symmetry Perception and Canonical SMILES for Molecules

This is an onlnie demo to show the methods of Symmetry Perception and Canonical SMILES. Details can be found from the paper "A Computationally-Realizable Rigorous Canonical Numbering Algorithm for Chemical Graphs with its Open-Source Implementation in Rust". Welcome to check [our site](https://chiral-data.github.io/)

[![Edit graph-symmetry-online-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/chiral-data/graph-symmetry-online-demo/tree/master/?fontsize=14)


## Dependencies
- Rust crate [graph-symmetry](https://github.com/chiral-data/rust-graph-symmetry): codes of the methods from the paper.
- WASM binding of Crate graph-symmetry [graph_symmetry_wasm_binding](https://github.com/chiral-data/rust-graph-symmetry-webassembly) for Javascript.
- This demo built based on robinwieruch's [React with Webpack Tutorial](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/).