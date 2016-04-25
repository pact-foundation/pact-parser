// Pact object: { provider, consumer, interaction }
var Pact = function(options) {
	this.provider = options.provider;
	this.consumer = options.consumer;

	this.interactions = [];
	this.metadata = {
    "pactSpecificationVersion": "1.0.0"
  };
}