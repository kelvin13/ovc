'use strict';

let querystring = require('querystring'), 
    request     = require('request');

let self = 'taylorswift'
let oauth_unsecured = {
    consumerKey: ''
}

window.onload = () => {
    let user  = document.createElement('label');
    user.appendChild(document.createTextNode('blog name: '));
    let entry = document.createElement('input');
    entry.setAttribute('type', 'text');
    entry.setAttribute('placeholder', 'taylorswift');
    user.appendChild(entry);
    user.appendChild(document.createTextNode('.tumblr.com'));
    
    document.body.appendChild(user);
    
    let trigger = document.createElement('button');
    trigger.setAttribute('type', 'button');
    trigger.addEventListener('click', getAvatar);
    trigger.appendChild(document.createTextNode('get avatar'));
    
    document.body.appendChild(trigger);
};

function getAvatar() {
    let query = querystring.stringify({api_key: oauth_unsecured.consumerKey});
    console.log(`https://api.tumblr.com/v2/blog/${self}/avatar/512?${query}`);
    request(`https://api.tumblr.com/v2/blog/${self}/avatar/512?${query}`, (error, response, body) => {
        console.log('error:', error);
        console.log('response:', response);
        console.log('body:', body);
    });
}
