module.exports = function(grunt) {

  var pack;
  pack = grunt.file.readJSON('package.json');

  // Project configuration.
  grunt.initConfig({
    pkg: pack,
    jshint: {
      options: {
        // Enforce === over ==
        eqeqeq: true,
        // Don't allow use of variables before definition, functions ok though
        latedef: 'nofunc',
        // Check for unused variables and parameters
        unused: 'strict',
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
          reporter: 'spec',
          clearRequireCache: true
        },
        src: ['**/test/*.test.js']
      }
    },
    jscs: {
      src: ['Gruntfile.js', '0**/**.js'],
      options: {
        fix: true,
        verbose: true,
        esnext: true,
        force: true,
        preset: 'google'
      }
    },
    watch: {
      options: {
        spawn: true,
        interrupt: true
      },
      files: ['Gruntfile.js', '*/**.js', '*/test/**.js'],
      tasks: ['mochaTest', 'jscs']
    }
  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-jscs');

  // Default task(s).
  grunt.registerTask('default', ['mochaTest', 'jscs']);

};
