'use strict';
import logger from "../utils/logger.js";
import hhh from "../models/hhh.js";
const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const viewData={
      title: "About the Playlist App",
      employee: hhh.getAppInfo()[0]
    };
    
    response.render('about', viewData);   
  },
};

export default about;