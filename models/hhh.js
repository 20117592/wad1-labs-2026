'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const hhh = {

  store: new JsonStore('./models/hhh.json', { info: {} }),
  collection: 'employees',

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default hhh;
