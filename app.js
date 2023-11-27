const express = require('express');
const app = express();

//% Impostazioni Express

//, Impostazioni personalizzate
app.set('appName', 'Express app');
console.log(app.get('appName'));

//, Impostazioni predefinite
app.set('port', process.env.PORT || 3000);
app.enable('case sensitive routing');
app.disable('x-powered-by');

app.get('/api', (req, res) => res.send('Richiesta ricevuta\n'))
.listen(app.get('port'), () => {
    console.log(`Server attivo su http://localhost:${app.get('port')}/`);
});