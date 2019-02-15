module.exports = function  (grunt) {
	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 9090,
					base: 'build',
					livereload: true,
					open: true,
					hostname: 'localhost',
				}
			}
		},
		pug : {
			compile : {
				files : {
					"build/index.html" : "src/emailtemplate/template.pug",
				},
				options : {
					pretty : true,
				}
			}
		},

		watch : {
			options : {
				spawn : true, 
			},

			pug: {
				files : ["src/**/*.pug", "framework/**/*.pug"],
				tasks  :"pug",
			},
			livereload: {
				files: ['build/**/*.html', 'build/*.html', 'build/**/*.css', 'build/**/*.js'],
				tasks: [],
				options: {
					livereload: true,
				}
			},
			configFiles: {
				files: ['Gruntfile.js'],
				options: {
					reload: true
				}
			}
		},
		
		prettify: {
		  options: {
		     'unformatted' : ['pre', 'code'],
		    'indent' : 4,
		     "max_preserve_newlines": 3,
		     'preserve_newlines' : true,
		  },
		  // Prettify a directory of files 
		  all: {
		    expand: true,
		    cwd: 'build/',
		    ext: '.html',
		    src: ['*.html'],
		    dest: 'build/'
		  },
		}

	});

	grunt.registerTask('build',[ 'pug', 'prettify']);
	grunt.registerTask('serve', [
		'connect:server',
		'watch'
	]);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks("grunt-contrib-pug");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-prettify');
}