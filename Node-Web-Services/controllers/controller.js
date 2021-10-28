const logger = require('../resources/logging.js');
//const dbApi = require('../db_apis/dbApi.js');
const restClient = require('../infra_services/restClient.js');
const config = require('../config/appConfig.js');

async function getUniversitiesDetails(req, res, next) {
    try {
        //const response = await dbApi.getUniversitiesDetails(req); with DB fetching
        const options = {
            method: 'GET',
            url: config.getEnvironmentConfig()+`?country=${req.query.country}`
        }
        const response = await restClient.getRequest(options);
        res.status(200).json(JSON.parse(response));
    } catch (err) {
        logger.logger.error(`error occurred while fetching University Details: ${err}`);
        res.status(500).json(err);
    }
}

module.exports = { getUniversitiesDetails }
