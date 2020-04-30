# Taphouse TV Dinners

Taphouse TV Dinners uses Jekyll for static assets and React to pull in information from Airtable.

## Install

 1. Set up RVM for Ruby https://rvm.io/rvm/install
 1. `rvm install 2.6.5`
 1. `gem install bundler`
 1. `bundle install`
 1. Install node using e.g. `brew install nodejs`
 1. Install yarn: `npm install -g yarn`
 1. In tv-dinners repo set yarn version to yarn v2 with: `yarn set version berry`
 1. Run `yarn`

## Development

 1. Add your AirTable API key to the file: `\/.airtable\/apiKey`
 1. To start the site locally, run `yarn start`
 1. To start the site with a watch, run `yarn run watch`
 1. If using Visual Studio Code/Codium and eslint extension is not working, run `yarn pnpify --sdk`

## Production

 1. Add your production AirTable API Key in `Settings -> Secrets` in the GitHub repository
