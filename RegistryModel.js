var Storage = require("./FileStorageModel.js");

function RegistryModel() {
    this.storage = new Storage();
}

RegistryModel.prototype.shouldQuit = function(command) {
    return command == "q";
}

RegistryModel.prototype.shouldList = function(command) {
    return command == "list";
}

RegistryModel.prototype.getMembers = function(command) {
    var fileContent = this.storage.read();
    return fileContent.split("\n");
}

RegistryModel.prototype.addMember = function(member) {
    this.storage.append(member);
}

module.exports = RegistryModel;
