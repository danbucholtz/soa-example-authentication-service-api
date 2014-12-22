var Q = require("q");

var utils = require("soa-example-core-utils");

var config = require("soa-example-service-config").config();

var authenticateUserByAccessToken = function(token){
	var deferred = Q.defer();
	
	var url = utils.createBaseUrl(config.authenticationServiceIp, config.authenticationServicePort) + "/authenticate";

	var toPost = {
		accessToken : token
	};

	utils.postJson(toPost, url).then(function(response){
		deferred.resolve(response);
	});

	return deferred.promise;
};

var authenticateUserByEmailAddressAndPassword = function(emailAddress, password){
	var deferred = Q.defer();
	
	var url = utils.createBaseUrl(config.authenticationServiceIp, config.authenticationServicePort) + "/authenticate";

	var toPost = {
		emailAddress : emailAddress,
		password: password
	};

	utils.postJson(toPost, url).then(function(response){
		deferred.resolve(response);
	});

	return deferred.promise;
};

module.exports = {
	authenticateUserByAccessToken : authenticateUserByAccessToken,
	authenticateUserByEmailAddressAndPassword : authenticateUserByEmailAddressAndPassword
}