var RegistryModel = require("./RegistryModel.js");
var RegistryView = require("./RegistryView.js");
var RegistryController = require("./RegistryController.js");

var m = new RegistryModel();
var v = new RegistryView(m);
var c = new RegistryController(m, v);

c.start();
