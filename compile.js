const solc = require('solc');
const path = require('path');
const fs = require('fs');



const inboxPath = path.resolve(__dirname, 'Inbox' , 'Inbox.sol');
const source = fs.readFileSync (inboxPath, 'utf8');

module.exports = solc.compile(source, 1).Inbox[':Inbox'];
