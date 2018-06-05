window.onload = () => {
    let user  = document.createElement('label');
    user.appendChild(document.createTextNode('blog name: '));
    let entry = document.createElement('input');
    entry.setAttribute('type', 'text');
    entry.setAttribute('placeholder', 'taylorswift');
    user.appendChild(entry);
    user.appendChild(document.createTextNode('.tumblr.com'));
    
    document.body.appendChild(user);
};
