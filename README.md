# Pact-parser

[![Join the chat at https://gitter.im/ichyr/pact-parser](https://badges.gitter.im/ichyr/pact-parser.svg)](https://gitter.im/ichyr/pact-parser?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![TravisCI Master branch status](https://travis-ci.org/ichyr/pact-parser.svg?branch=master) 
[![Code Climate](https://codeclimate.com/github/ichyr/pact-parser/badges/gpa.svg)](https://codeclimate.com/github/ichyr/pact-parser)
[![Test Coverage](https://codeclimate.com/github/ichyr/pact-parser/badges/coverage.svg)](https://codeclimate.com/github/ichyr/pact-parser/coverage)

This application is devoted to parsing json files that represent [pacts](https://github.com/pact-foundation/pact-specification), spawning express server and replaying responses for requests read from pact files.

## How to use?

Clone the repository and run `npm install`.

1. To use as a command line tool you must run the following command.

`node index.js --path <path to your pact json files> (--port 3646) (--log warning)`

*Parameters in parenthesis are optional. More information about then can be found [here](#command-line-parameters).*

## Command line parameters

Application has some cli parameters used to customize it's behavior:

1. `path` - [REQUIRED] specifies **glob** pattern for the path where pact jsons are place in the system. 

`--path testData/*.json`

2. `log` - specifies the log level you want to have. Possible variants are: `trace`, `debug`, `info`, `warn`, `error`, `fatal`.
Setting this to a particular level implies that all log records at that level and above are logged. 
**E.g.** a logger set to level "info" will log records at level info and above (warn, error, fatal).

Default level is `info`. Default value is locatied in configuration file (`pact.config.json` in the root).

`--log debug`

3. `port` - specifies the port server would start. Defaults to `8080`. Default value is locatied in configuration file (`pact.config.json` in the root).

`--port 3646`

## Why we need such application?

Pacts are great at building the contracts for consumer-provider interaction, but they are also great in one more thing - **possibility to use them as data for consumer-side tests**. Current client-side approach for building pact files during front-end testing relies on the pair of libraries:

1. [Pact js consumer dsl](https://github.com/DiUS/pact-consumer-js-dsl) - whose primary goal is to describe the pacts and make requests to pact mock service.
2. [Pact mock service](https://github.com/bethesque/pact-mock_service) - whose main purpose is to create pacts and very that they are generated.
 
As **pact-mock-service*** is in-memory structure we should every time we would like to run tests generate from scratch all pact files. This is not very productive as pacts change a lot less frequent than test files are updates. Thus we need application that can run in background and act like server for each listed in pacts interaction pair: 
**if we query it with listed in pact files request -> we recieve correspondent response**. 

# Pact short introduction

["Pact"](https://github.com/realestate-com-au/pact) is an implementation of "consumer driven contract" testing that allows mocking of responses in the consumer codebase, and verification of the interactions in the provider codebase. The initial implementation was written in Ruby for Rack apps, however a consumer and provider may be implemented in different programming languages, so the "mocking" and the "verifying" steps would be best supported by libraries in their respective project's native languages. Given that the pact file is written in JSON, it should be straightforward to implement a pact library in any language, however, to get the best experience and most reliability of out mixing pact libraries, the matching logic for the requests and responses needs to be identical. There is little confidence to be gained in having your pacts "pass" if the logic used to verify a "pass" is inconsistent between implementations.

# ToDo List

1. Create more test pacts and create more api tests.
2. Update README with guide how to use the application.
3. Introduce logging and log level control via command line arguments.


# Done List

1. Simple json file parser that is able to respond to listed requests;
2. Align with pact v.1.0 specification for requests parsing;
3. Added possibility to specify port of the server at start-up;
