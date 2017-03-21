'use strict';
const webpack = require('webpack');
const config = require('./config/index.js');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports =
{
	context: config.client.root,

	entry :
	{
		index: 	'./index.ts'
	},

	output:
	{
		path: config.server.public,
		filename: '[name].js'
	},

	resolveLoaders:
	{
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js']
	},

	/*
	watch: true,
	watchOptions:
	{
		aggregateTimeout: 500
	},
	*/

	//devtool: 'source-map',
	devtool: 'cheap-inline-module-source-map',

	module:
	{
		loaders:
		[
			{
				test: /\.pug$/,
				loader: 'pug-ng-html'
			},
			{
				test: /\.ts$/,
				loaders: [
					'awesome-typescript-loader',
					'angular2-template-loader',
					'angular-router-loader'
				],
				// exclude: [/\.(spec|e2e)\.ts$/]
				//exclude: /node_modules/,
				//loader: 'ts-loader'
			},
			// { 
			// 	test: /\.(html|css)$/, 
			// 	loader: 'raw-loader',
			// 	exclude: /\.async\.(html|css)$/
			// },
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
			},
			// {
			// 	//test: /\.scss(\?.*$|$)/,
			// 	test: /\.scss$/,
			// 	//exclude: /node_modules/,
			// 	loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 versions!sass')
			// 	//loader : 'style!css!sass'
			// 	//loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 versions!sass!scss')
			// },
			// {
			// 	test: /\.css$/,
			// 	loader: ExtractTextPlugin
			// 	.extract('style', 'css!autoprefixer?browsers=last 2 versions')
			// },
			{
				test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				//test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
				//test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				exclude: /\/node_modules\//,
				//loader: 'url?name=[path][name].[ext]&limit=4096'
				loader: 'url-loader?importLoaders=1&limit=100000'
				//loader: 'file'
				//loader: 'file?name=images/[name].[hash].[ext]'
			},
			{
				test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2).*$/,
				include: /images/,
				loader : 'url'
				//loader: 'file'
				//loader: 'file?name=images/[name].[hash].[ext]'
			}

			/*
			,
			{
				test: /\.js?$/,
				include: config.client.root,
				loader: 'ng-annotate?add=true!babel?presets[]=es2015'
			},
			{
				test: /\.?tmpl.pug$/,
				loader: 'pug'
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin
					.extract('style', 'css!autoprefixer?browsers=last 2 versions!less')
			},
			{
				//test: /\.scss(\?.*$|$)/,
				test: /\.scss$/,
				//exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 versions!sass')
				//loader : 'style!css!sass'
				//loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 versions!sass!scss')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin
				.extract('style', 'css!autoprefixer?browsers=last 2 versions')
			},
			{
				test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				//test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
				//test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				exclude: /\/node_modules\//,
				//loader: 'url?name=[path][name].[ext]&limit=4096'
				loader: 'url-loader?importLoaders=1&limit=100000'
			},
			{
				test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2).*$/,
				include: /images/,
				loader : 'url'
			}
			/*
			{
				test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2).*$/,
				include: /client/,
				//loader: 'file?name=[1]&regExp=node_modules/(.*)'
				loader: 'url'
				//loader: 'url-loader?limit=8192'
			}
			*/
			/*
			{
				test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2).*$/,
				//test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				include: ["/\/node_modules\//","/client/img/"],
				loader: 'file?name=[1]&regExp=node_modules/(.*)'
			}
			*/
		]
	},
	ts: {
      appendTsSuffixTo: [/\.pug$/]
    },
	plugins: [
      new CheckerPlugin()
  ],
	/*
	plugins:
	[
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin(
		{
			template: 'pug!./client/index.pug',
			inject: 'body'
		}),
		new ExtractTextPlugin('[name].css',
		{
			allChunks: true,
			disable: false
		})
		,new webpack.optimize.UglifyJsPlugin({
    		minimize: true,
			compress:
			{
				warnings: false
			}
    	})
	],
	*/

	devServer:
	{
		host: config.server.host,
		port: 9000,
		contentBase: config.server.public, // если html статика
		historyApiFallback:
		{
			index: '/'
		},
		hot: false,
		inline: true,
		proxy:
		[{
			path: '/api',
			target: 'http://localhost:3000'
		}],
		stats:
		{
			colors: true
		}
	},


	resolve:
	{
		extensions: ["",".js",".ts"]
	}

};