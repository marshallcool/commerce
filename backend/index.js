'use strict';

const app = require('./app');
const config = require('../config');
const db = require('./modules/db').mongoose;
const os = require('os');

const server = app.listen(config.server.port, config.server.host);
process.on('SIGINT', shutDown);
function shutDown()
{
    console.log('Shutdown');
    process.removeListener(os.constants.signals.SIGTERM, shutDown);

    server.close(error =>
    {
        if (error)
        {
            console.error(error);
        }
        db.disconnect(err =>
        {
            if (err)
            {
                console.error(err);
            }
            setTimeout(process.exit(err || error ? 1 : 0), 300);
        });
    });
}
