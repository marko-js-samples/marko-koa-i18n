module.exports = function *() {
    this.response.body = require('./template.marko').renderSync({
        // Adding the `i18n` variable to $global is required so
        // that it will be available as `out.global.i18n` during
        // template rendering.
        $global: {
            i18n: this.i18n
        }
    });
};