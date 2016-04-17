module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        // Enforce === over ==
        eqeqeq: true,
        // Don't allow use of variables before definition, functions ok though
        latedef: "nofunc",
        // Check for unused variables and parameters
        unused: "strict",
        globals: {
          mocha: true,
          node: true
        },
        force: true,
      },
      all: ['Gruntfile.js', '0**/**.js']
    },
    mochaTest: {
      test: {
        options: {
          reporter: "spec",
          clearRequireCache: true
        },
        src: ['**/test/*.test.js']
      }
    },
    watch: {
      options: {
        spawn: true,
        interrupt: true
      },
      files:['Gruntfile.js', '*/**.js', '*/test/**.js'],
      tasks: ['jshint', 'mochaTest']
    }
  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'mochaTest']);

};
