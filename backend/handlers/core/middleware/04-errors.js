'use strict';

const isTest = process.env.NODE_ENV === 'testing';
const log = require('../../../modules/logger').log;

module.exports = function*(next) {
    try {
        yield* next;
        if (404 == this.response.status && !this.response.body) this.throw(404);

    } catch (err) {
        this.set('X-Content-Type-Options', 'nosniff');
        this.type = 'application/json';
        this.status = err.status || 500;
        this.body = {success: false};
        // this.app.emit('error', err, this);

        if (err.name === 'ValidationError') {
            this.status = 409;
            this.body.errors = Object.keys(err.errors)
                .map(e => err.errors[e].message)
                .filter(e => !e.includes('with user: "'));
        } else {
            this.body.errors = [err.message];
        }

        if (isTest) return;
        if (err.status == 404 || err.expose) return;
        log.error(err.stack || err.toString());

    }
};
