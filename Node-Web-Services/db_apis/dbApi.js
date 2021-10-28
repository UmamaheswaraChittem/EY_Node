const dbClient = require('../infra_services/dbClient.js');
const queries = require('../resources/queries.js');

async function getUniversitiesDetails(req){
    return await dbClient.executeQuery(queries.getUniversitiesDetails);    
} 

module.exports = { getUniversitiesDetails }