'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            development: {
                files: {
                    './assets/css/main.css': './less/_extend.less'
                }
            }
        },
        watch: {
            less: {
                files: ["./less/components/*.less", "./less/*.less"],
                tasks: ['less']
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Register tasks
    grunt.registerTask('default', [
        'less'
    ]);

    grunt.registerTask('dev', [
        'watch'
    ]);

};
