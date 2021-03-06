/**
 * Create and export configuration variables
 */

// Container for all the environments
var environments = {};

// Staging (default) environment
environments.staging = {
	httpPort: 3000,
	httpsPort: 3001,
	envName: 'staging',
	hashingSecret: 'thisIsASecret',
	maxChecks: 5,
	twilio: {
		accountSid: 'AC7a58296214dba8a58a1e3f3ad3129edf',
		authToken: 'a682afec07bafb7127660ac2103bf0da',
		fromPhone: '+12057281654',
	},
	templateGlobals: {
		appName: 'UptimeChecker',
		companyName: 'NotARealCompany, Inc',
		yearCreated: '2018',
		baseUrl: 'http://localhost:3000/',
	},
};

// Production environment
environments.production = {
	httpPort: 5000,
	httpsPort: 5001,
	envName: 'production',
	hashingSecret: 'thisIsAlsoASecret',
	maxChecks: 5,
	twilio: {
		accountSid: 'AC7a58296214dba8a58a1e3f3ad3129edf',
		authToken: 'a682afec07bafb7127660ac2103bf0da',
		fromPhone: '+12057281654',
	},
	templateGlobals: {
		appName: 'UptimeChecker',
		companyName: 'NotARealCompany, Inc',
		yearCreated: '2018',
		baseUrl: 'http://localhost:5000/',
	},
};
// Determine which environment was passed as a command-line argument
var currentEnv = typeof process.env.NODE_ENV == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not, default to staging
var environmentToExport = typeof environments[currentEnv] == 'object' ? environments[currentEnv] : environments.staging;

// Export the module
module.exports = environmentToExport;
