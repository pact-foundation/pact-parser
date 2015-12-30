# Pact-parser

This application is devoted to parsing json files that represent [pacts](https://github.com/pact-foundation/pact-specification), spawning express server and replaying responses for requests read from pact files.

# Pact short introduction

["Pact"](https://github.com/realestate-com-au/pact) is an implementation of "consumer driven contract" testing that allows mocking of responses in the consumer codebase, and verification of the interactions in the provider codebase. The initial implementation was written in Ruby for Rack apps, however a consumer and provider may be implemented in different programming languages, so the "mocking" and the "verifying" steps would be best supported by libraries in their respective project's native languages. Given that the pact file is written in JSON, it should be straightforward to implement a pact library in any language, however, to get the best experience and most reliability of out mixing pact libraries, the matching logic for the requests and responses needs to be identical. There is little confidence to be gained in having your pacts "pass" if the logic used to verify a "pass" is inconsistent between implementations.

# ToDo List