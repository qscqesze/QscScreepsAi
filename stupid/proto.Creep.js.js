// this creates a static property that allows us to access the role methods without having
// a creep object. I'm doing this because I like to keep all the role methods together in
// one file, even though create() has no creep object to act upon, but run() does.
Creep.roles = {
    "harvester": require('role.Harvester.js'),
    "builder": require('role.Builder.js'),
    "miner": require('role.Miner.js'),
    "charger": require('role.Charger.js'),
    "worshiper": require('role.Worshiper.js'),
    "mule": require('role.Mule.js'),
};

Creep.prototype.act = function() {

    // simply call the run method on this creep's role
    Creep.roles[this.memory.role].run(this);

};