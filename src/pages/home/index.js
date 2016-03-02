var template = require('./template.marko');

module.exports = function *() {
    template.render({
            // Adding the `i18n` variable to $global is required so
            // that it will be available as `out.global.i18n` during
            // template rendering.
            $global: {
                i18n: this.i18n
            }
        },
        this.res);
};