
const requiringFile = require('./requiringFile');
const spawn = require('child_process').spawn;

it('path differs', function(done) {
    const expectedLines = [];

    const lines = [
        requiringFile.filePath(),
        requiringFile.dirPath()
    ];

    const indexProcess = spawn('node', ['src/index.js']);
    indexProcess.stdout.on('data', function(data) {
        expectedLines.push(data.toString().trim());
    });

    indexProcess.on('close', function() {
        expect(lines).toBe(expectedLines);
        done();
    });
});
