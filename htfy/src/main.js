import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
// import express, { query } from 'express';


// var client_id = '2092b9ea3bbb4a07bd382a633eb8ce14';
// var redirect_uri = 'http://localhost:5173/playlists'

// var app = express();

// App.get("/login", function (req, res) {
//     var state = generateRamdomString(16);
//     var scope = 'user-read-private user-read-email';

//     res.redirect('https://accounts.spotfy.com/authorize?' +
//     querystrin.stringfy({
//         response_type: 'code',
//         client_id: client_id,
//         scope: scope,
//         redirect_uri:redirect_uri,
//         state: state
//     }));
// });


createApp(App).mount('#app') //index.html div "id=app"
