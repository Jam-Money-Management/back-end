# Money Management Application Back End

[![Build Status](https://app.travis-ci.com/Jam-Money-Management/back-end.svg?branch=master)](https://app.travis-ci.com/Jam-Money-Management/back-end)
[![Build status](https://ci.appveyor.com/api/projects/status/cyjcfcwpvufhbpw4/branch/main?svg=true)](https://ci.appveyor.com/project/marcolagos/back-end/branch/main)
[![Coverage Status](https://coveralls.io/repos/github/Jam-Money-Management/back-end/badge.svg?branch=main)](https://coveralls.io/github/Jam-Money-Management/back-end?branch=main)
[![Maintainability](https://api.codeclimate.com/v1/badges/f45e5c8c6f45b75ec899/maintainability)](https://codeclimate.com/github/Jam-Money-Management/back-end/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f45e5c8c6f45b75ec899/test_coverage)](https://codeclimate.com/github/Jam-Money-Management/back-end/test_coverage)

## Setting up repository locally

1. Clone the repository
1. Create a `.env` file and define the following environment variables
  
    1. CONNECTION_STRING (required): This is the connection string to a MongoDB database.
    1. PORT (optional): The port to serve the app from.

1. start the dev server with `yarn startdev`.
1. Start the production server with `yarn start`. The command outputs a production build, then serves it.

## How to test

1. Run the command `yarn test`