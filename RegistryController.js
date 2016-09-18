var readline = require('readline');
var fs = require('fs');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function RegistryController(m, v) {
    this.m = m;
    this.v = v;
}

RegistryController.prototype.start = function() {
    this.v.welcomeMessage();
    r.on('line', (member) => {
        if (this.m.shouldQuit(member)) {
            r.close();
        } else if (this.m.shouldList(member)) {
            this.v.listMembers(this.m.getMembers());
        } else {
            this.m.addMember(member);
            this.v.addFeedback(member);
        }
    });
}


module.exports = RegistryController;
