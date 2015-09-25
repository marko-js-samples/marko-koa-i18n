module.exports = function *() {
    this.response.body = require('./template.marko').renderSync({
        $global: {
            i18n: this.i18n
        }
    });
};