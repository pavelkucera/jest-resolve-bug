
module.exports = {
    filePath: function() {
        return require.resolve('./foo');
    },

    dirPath: function dirPath() {
        return require.resolve('./foo/');
    }
};
