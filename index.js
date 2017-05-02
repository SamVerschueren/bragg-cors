'use strict';
module.exports = origin => {
	if (typeof origin !== 'string') {
		throw new TypeError(`Expected \`origin\` to be of type \`string\`, got \`${typeof origin}\``);
	}

	return ctx => {
		ctx.headers['Access-Control-Allow-Origin'] = origin;
	};
};
