/*
 * Created by Eunjin Yang on 7/4/19 2:52 PM
 * Github : http://github.com/jinny920311
 * Copyright (c) 2019. All rights reserved.
 */

// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "~@/assets/style/utils.scss";`
      }
    }
  }
}
