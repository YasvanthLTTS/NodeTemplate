var configuration ={};


/**Node server port number */
configuration.Port = {
    "port" : process.env.port ||8080
};

module.exports = configuration;