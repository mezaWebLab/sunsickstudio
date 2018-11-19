const path = require('path');

module.exports = {
  entry: ["./js/app.js", "./scss/app.scss"],
  output: {
    filename: "../bundle.js"
  },
  watch: true,
  mode: "production",
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
  	}]
  }
}