const express = require('express');
const app = express();

app.set('port', 3000);
app.set('views', ['src/views','src/components']);
app.set('view engine', 'twig');


app.get('/', (req, res) => {
	res.render('index');
});

app.listen(app.get('port'), () => {
	console.log(`Express server listening on port ${app.get('port')}`);
});