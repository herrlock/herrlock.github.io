module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        serve: {
            // using default configuration
        }
    });
    
    grunt.loadNpmTasks('grunt-serve');
    
}
