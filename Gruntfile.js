/* eslint-disable linebreak-style */
/* eslint-disable global-require */
const sass = require('sass');

module.exports = (grunt) => {
    const config = grunt.file.readJSON('package.json');
    const development = grunt.option('mode') !== 'production';

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    const gruntConfig = {
        pkg: config,

        clean: {
            files: ['dist/*', '!dist/bundle.js', '!dist/bundle.min.js', '!dist/bundle.min.obfsc.js', '!dist/bundle.min.css', '!dist/*html'],
        },

        concat: {
            js: {
                files: {
                    'dist/bundle.js': [
                        'src/js/*',
                    ],
                },
            },
        },

        sass: {
            dist: {
                options: {
                    implementation: sass,
                    outputStyle: 'compressed',
                },
                files: {
                    'dist/bundle.min.css': [
                        'src/styles/style.scss',
                        'src/styles/bootstrap-table.css',
                    ],
                },
            },
        },

        uglify: {
            js: {
                src: 'dist/bundle.js',
                dest: 'dist/bundle.min.js',
            },
        },

        obfuscator: {
            task1: {
                files: {
                    'dist/bundle.min.obfsc.js': [
                        'dist/bundle.min.js',
                    ],
                },
            },
        },
    };

    grunt.initConfig(gruntConfig);

    grunt.registerTask('default', ['clean', 'sass']);

    if (!development) {
        grunt.registerTask('default', ['sass', 'concat', 'uglify', 'obfuscator', 'clean']);
    }
};
