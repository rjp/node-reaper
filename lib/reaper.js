var sys = require('sys'),
    spawn = require('child_process').spawn;

function Reaper(options) {
    this.children = {};
    this.blocked = {};
    this.spawns = {};

    this.command = options.command;    
    this.cwd = options.cwd;
    return this;
}

Reaper.prototype.spawn = function(options, args) {
    this.name = options.name;
    sys.puts("I would "+options.type+"-spawn "+this.command+" as "+options.name);
}

Reaper.prototype.kill = function(options) {
    sys.puts("I would kill "+this.name);
}

exports.Reaper = Reaper;
