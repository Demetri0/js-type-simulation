# js-type-simulation

```javascript
// Example
ts.run({
	'selector': '.textPlace:nth-child(1)',
	'duration': 128,
	'strings': [
		'Some text...',
		'Other text...',
		'And third text...'
	],
	'endless': true
});

ts.run({
	'selector': '.textPlace:nth-child(2)',
	'duration': 64,
	'strings': [
		'Some text...    ',
		'Other text...   ',
		'And third text...      '
	],
	'endless': true
});

ts.run({
	'selector': '.textPlace:nth-child(3)',
	'duration': 128,
	'strings': [
		'Some text...    ',
		'Other text...   ',
		'And third text...      '
	],
	'endless': false
});

ts.run({
	'selector': '.textPlace:nth-child(4)',
	'duration': 256,
	'text': "One string.",
	'endless': false
});
```
