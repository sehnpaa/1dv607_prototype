function RegistryView() {

}

RegistryView.prototype.listMembers = function(members) {
    var enclosing = "-----------------";
    console.log(enclosing);
    members.forEach(function(member) {
        console.log(member);
    });
    console.log(enclosing);
};

RegistryView.prototype.welcomeMessage = function() {
    console.log("Please add a member (or print 'q' to exit or 'list' to list members):");
};

RegistryView.prototype.addFeedback = function(member) {
    console.log('You added:', member);
};

module.exports = RegistryView;
