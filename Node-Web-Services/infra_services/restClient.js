const logger = require('../resources/logging.js');
const request = require("request");

async function getRequest(options) {
    return new Promise((resolve, reject) => {
        
        request(options, (error, response) => {
            if (error) {
                reject(error)
                throw new Error("Service not responding")
            }
            try {
                if (response == undefined) {
                    reject("Service not responding")
                } else {
                    resolve(response.body);
                }
            } catch (error) {
                logger.logger.error(error);
                return "Service not responding"
            }
        });
    });
}

module.exports = { getRequest }