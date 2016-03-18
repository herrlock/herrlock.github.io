module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        serve: {
            options: {
                port: 9000
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-serve');
    
}
