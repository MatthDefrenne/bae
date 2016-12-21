'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      all_files: {
        src: [
          'bower_components/angular/angular.js',
          'bower_components/angular-route/angular-route.js',
          'bower_components/ngInfiniteScroll/ng-infinite-scroll.js',
          'assets/prod/app.js',
          'components/**/*.js',
          'services/**/**/*.js',
          'services/**/*.js',
          'assets/template/templates.js',
        ],
        dest: 'assets/drinky.min.js'
      },
    },
    html2js: {
      options: {
        rename: function (moduleName) {
          console.log(moduleName);
          return moduleName.replace('../', '');
        }
      },
      main: {
        src: [
            '**/*.html',
          '!assets/*.html',
          '!*.html',
          '!assets/**/*.html',
          '!bower_components/**/*.html',
          '!node_modules/**/*.html',
        ],
        dest: 'assets/template/templates.js'

      },
    },
    copy: {
      indexDev: {
        nonull: true,
        flatten: true,
        expand: true,
        cwd: './assets/',
        src: ['dev/index.html'],
        dest: ''
      },
      indexProd: {
        nonull: true,
        flatten: true,
        expand: true,
        cwd: './assets/',
        src: ['prod/index.html'],
        dest: ''
      },
    },
    injector: {
      dev: {
        options: {
          relative: false,
          destFile: 'assets/dev/index.html',
          transform: function (file) {
            return '<script src=\"' + file.replace('/', '/') + '"></script>';
          }
        },
        files: [
          {
            expand: true,
            cwd: '',
            src: [
              '**/**/*.js',
              '**/*.js',
              '!assets/*.js',
              '!assets/**/*.js',
              '!assets/cache/*.js',
              '!bower_components/**/*.js',
              '!node_modules/**/*.js',
              '!app.js',
              '!GruntFile.js'
            ]
          }
        ]
      },
    }

  })
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('dev', ['injector', 'copy:indexDev']);
  grunt.registerTask('prod', ['injector', 'copy:indexProd', 'html2js', 'uglify']);
};
