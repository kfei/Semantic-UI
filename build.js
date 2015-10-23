// Note:
//   npm install -g gulp
//   npm install
//   # Rebase onto upstream master
//   node build.js
//   cp src/theme.config.example src/theme.config
//   gulp build

;(function() {
    var fs = require('fs');
    var path = require('path');

    // Load minimum component set
    var components = require('./components.json').components;

    // Patch default semantic.json
    function patch(config) {
        var outputPath = path.join(__dirname, 'semantic.json');
        fs.writeFile(outputPath, JSON.stringify(config, null, 4), function(err) {
            if (err) throw err;
            console.log('Done.');
        });
    }

    var filePath = path.join(__dirname, 'semantic.json.example');
    var configData = fs.readFile(filePath, 'utf-8', function(err, data) {
        if (err) throw err;
        var config = JSON.parse(data);
        config.components = components;
        patch(config);
    });
})();
