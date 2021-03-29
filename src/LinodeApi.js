'use strict';

const {
	apiKey,
	baseUrl
} = require('../config/linodeConfig');

const LinodeApi = {
	get headers() {
		return {
			'Authorization': `Bearer ${apiKey}`,
			'Content-type': 'application/json; charset=utf-8'
		}
	},

	endpoints: {
		lke: () => ({
			clusters: (clusterId) => {
				return clusterId == null
				? {
					url: `${baseUrl}/lke/clusters`,
					method: 'get'
				}
				: {
					pools: (poolId) => {
						return poolId == null
						? {
							url: `${baseUrl}/lke/clusters/${clusterId}/pools`,
							method: 'get'
						} : {}
					}
				}
			}
		})
	}
}

module.exports = LinodeApi;
