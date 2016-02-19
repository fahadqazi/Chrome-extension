module.exports = function(grunt){
	//project configuration
	grunt.initConfig({
		
		concat: {
			release:{
				src: ['js/values.js','js/prompt.js','getimages.js'],
				dest: 'release/main.js'
			}
		},
		copy:{
			release:{
				src: 'manifest.json',
				dest: 'release/manifest.json'
			}
		},
		jshint:{
			files: ['js/values.js','js/prompt.js','js/getimages.js']
		},
		watch:{
			files: ['<%= jshint.files %>','manifest.json'],
			tasks: ['default']
		}
	
	});

	//Grunt plugins go here
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Register Tasks here
	grunt.registerTask('default', ['jshint','concat','copy'])

};
