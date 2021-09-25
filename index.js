const ZebraCrossing = require('zebra-crossing');
const TicketParser = require('ticket-parser');
const fs = require("fs");

console.log(process.argv);
const path =  process.argv[2];

if (!path) {
 process.exit(1); 
}

ZebraCrossing.read(fs.readFileSync(path), { pureBarcode: true })
	.then(data => {
    TicketParser.parse(data.raw)
      .then(ticket => {
        console.log(ticket);
      })
  });
