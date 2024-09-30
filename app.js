const express = require('express')
const app = express()

app.get('/',(req,res) => {
	res.status(200).json({messgae: 'Hello, GitHub Actions!'});
});

app.get('/sum',(req,res) => {
	const a = parseInt(req.query.a);
	const b = parseInt(req.query.b);
	const sum = a + b;
	res.status(200).json({sum});
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
	app.listen(PORT, () => {
		console.log(`Server is running in port ${PORT}`);
	});
}

module.exports = app;
