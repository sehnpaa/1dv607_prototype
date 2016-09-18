var fs = require("fs");

function FileStorageModel() {
    this.filePath = "./storage.txt";
}

FileStorageModel.prototype.append = function(addition) {
    fs.appendFileSync(this.filePath, "\n"+addition);
};

FileStorageModel.prototype.read = function() {
    return fs.readFileSync(this.filePath, "utf8").trim();
};

module.exports = FileStorageModel;
