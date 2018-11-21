const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: ["./js/app.js", "./scss/app.scss"],
  output: {
    filename: "../bundle.js"
  },
  watch: true,
  mode: "development",
  module: {
  	rules: [
    	{
    		test: /\.scss$/,
    		use: [
    			{
    				loader: "file-loader",
    				options: {
    					name: "../style.css"
    				}
    			},
    			{
    				loader: "extract-loader"
    			},
  		    {
  		    	loader: "css-loader?-url"
  		    },
  		    {
  		    	loader: "postcss-loader"
  		    },
    			{
    				loader: "sass-loader"
    			}
    		]
    	},
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      }
    ]
  },
  plugins : [
    new VueLoaderPlugin()
  ]
}