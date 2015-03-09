module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    connect:
      server:
        options:
          keepalive: true

    coffee:
      dist:
        src: './src/angular-clndr.coffee'
        dest: './angular-clndr.js'

    sass:
      dist:
        src: './src/angular-clndr.sass'
        dest: './angular-clndr.css'

    ngAnnotate:
      dist:
        src: './angular-clndr.js'
        dest: './angular-clndr.js'

    uglify:
      options:
        preserveComments: 'some'
      dist:
        src: './angular-clndr.js'
        dest: './angular-clndr.min.js'

    watch:
      coffee:
        files: './src/angular-clndr.coffee'
        tasks: ['coffee']
      sass:
        files: './src/angular-clndr.sass'
        tasks: ['sass']

  grunt.registerTask('default', ['coffee', 'ngAnnotate', 'uglify', 'sass'])
  grunt.registerTask('server', ['default', 'connect', 'watch'])