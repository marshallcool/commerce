'use strict';

module.exports = function*(next) {

  if (['POST', 'PATCH'].includes(this.method)) {
    if (this.user && this.user._id) {
      this.request.body.user = this.user._id;
    }
  }

  if (this.method !== 'GET') {
    this.query.json = {query: {user: this.user}, params: {}};
    return yield* next;
  }

  if (this.query.json) {
    this.query.originalJson = this.query.json;
    try {
      this.query.json = JSON.parse(this.query.originalJson);
    } catch (err) {
      this.query.json = {query: {}, params: {}};
    }
  } else {
    this.query.json = {query: {}, params: {}};
  }



  let qs = this.query.json;

  if (!qs.query) {
    qs.query = {};
  }

  if (!qs.params) {
    qs.params = {};
  }

  qs.query.user = this.user;

  qs.params.limit = qs.params.count > 100 ? 100 : qs.params.count || 100;
  qs.params.skip = qs.params.page > 1 ?
    qs.params.page*qs.params.count-qs.params.count : 0;


  if (typeof qs.params.sort === 'string') qs.params.sort = [qs.params.sort];

  if (qs.params.sort) {

    let descIndex = qs.params.sort.indexOf('-name');
    let ascIndex = qs.params.sort.indexOf('name');

    if (descIndex !== -1) qs.params.sort[descIndex] = 'name';
    else if (ascIndex !== -1) qs.params.sort[ascIndex] = '-name';

    qs.params.sort = qs.params.sort.join(' ');

  }

  yield* next;

};