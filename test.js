import test from 'ava';
import m from '.';

test('invalid input', t => {
	t.throws(() => m(123), 'Expected `origin` to be of type `string`, got `number`');
});

test('set cors header', t => {
	const ctx = {
		headers: {}
	};

	m('https://foo.io')(ctx);

	t.deepEqual(ctx, {
		headers: {
			'Access-Control-Allow-Origin': 'https://foo.io'
		}
	});
});
