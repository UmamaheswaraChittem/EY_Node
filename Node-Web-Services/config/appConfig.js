const config = require('../props/app.config.json');

function getEnvironmentConfig() {
    const environment = 'Development';
    return config[environment];
}

function getUniversityDetailsUrl() {
    return getEnvironmentConfig()['TMFPipeline'];
}

module.exports = { getEnvironmentConfig, getUniversityDetailsUrl }