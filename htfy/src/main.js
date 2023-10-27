import { createApp } from 'vue'
import App from './App.vue'
import './style.css'


const express = require('express');
const path = require('path'); // Módulo para lidar com caminhos de arquivo

var client_id = '2092b9ea3bbb4a07bd382a633eb8ce14';
var redirect_uri = 'http://localhost:5173/playlists';

var app = express();

app.get("/login", function (req, res) {
    var state = generateRamdomString(16);
    var scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
        response_type: 'code',
        client_id: '2092b9ea3bbb4a07bd382a633eb8ce14',
        scope: scope,
        redirect_uri: 'http://localhost:5173/playlists',
        state: state
    }));
});

// Defina a pasta de build da sua aplicação Vue.js
const staticPath = path.join(__dirname, 'dist'); // Supondo que seus arquivos Vue.js estejam na pasta 'dist'

app.use(express.static(staticPath)); // Serve os arquivos estáticos do Vue.js

// Todas as outras solicitações serão tratadas pela aplicação Vue.js
app.get('*', function (req, res) {
    res.sendFile(path.join(staticPath, 'index.html'));
});

const port = process.env.PORT || 5173;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

createApp(App).mount('#app'); // index.html div "id=app"

createApp(App).mount('#app'); // index.html div "id=app"
