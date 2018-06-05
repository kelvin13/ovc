const {app, BrowserWindow} = require('electron')

let window = null

app.on('ready', () => {
    window = new BrowserWindow({
        width: 1200, 
        height: 600, 
        backgroundColor: '#ff3096', 
        show: false
    });
    
    window.loadFile('index.html');
    window.webContents.openDevTools();
    
    window.on('closed', () => {
        window = null;
    });
    
    window.on('ready-to-show', () => {
        window.show();
    });
});

app.on('window-all-closed', () => {
    app.quit();
});
