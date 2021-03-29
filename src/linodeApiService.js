const api = require('./LinodeApi'),
      CBLogger = require('@unplgtc/cblogger'),
      HttpRequest = require('@unplgtc/http-request');

const linodeApiService = {
	listClusters() {
		return this.execute(api.endpoints.lke().clusters());
	},

	listNodePools(clusterId) {
		return this.execute(api.endpoints.lke().clusters(clusterId).pools());
	},

	execute: async function(payload) {
		return Object.create(HttpRequest)
			.headers(api.headers)
			.url(payload.url)
			.body(payload.body)
			.json()
			.execute(payload.method);
	}
}

module.exports = linodeApiService;
