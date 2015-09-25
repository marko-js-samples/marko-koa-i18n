'use strict';

module.exports = function(node, template, compiler) {

    // We will dynamically add a new <var name="i18n" value="out.global.i18n"> tag
    // at compile-time using this transformer.

    // Create a new <var> node with the required properties
    var varNode = template.createNode('var', {
        name: node.getProperty('name') || 'i18n',
        value: template.makeExpression('out.global.i18n')
    });

    // Replace the old <i18n-var> node with the new <var> node:
    node.parentNode.replaceChild(varNode, node);

    // NOTE: The Marko AST implements a DOM-like API
};
