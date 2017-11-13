module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['*.js','*.html','*.css','Html/*.*'],
                tasks: ['resta'],
                options: {
                    spawn: false,
                },
            },
        },
        jshint:{
            allFiles: ['./*.js','Html/*.js',],
            options:{
                reporterOutput: "",
                ignores: ['gruntfile.js']
            }
        },
        copy:{
            acpri: {
                expand: true, 
                src: ['./'], 
                dest: '/Applications/MAMP/htdocs/cap/'
            },
            ctrl: {
                expand: true,
                src: ['./Controllers/*.js'],
                dest: '/Applications/MAMP/htdocs/',
                filter: 'isFile'
            },
            curs: {
                expand: true,
                src: ['./html/*.*'],
                dest: '/Applications/MAMP/htdocs',
                filter: 'isFile'
            }
        }
    });

    grunt.event.on('watch', function(action, filepath) {
        grunt.config('default', filepath);
      });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
    grunt.registerTask('resta', ['jshint','copy:acpri', 'watch']);
};