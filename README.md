Simple node library to spawn/respawn/kill a bunch of child processes.

    // Reaper Factory with fixed command 
    var reaper = require('reaper');
    var my_reaper = reaper.Reaper({command: 'bot', cwd: 'here', failures: 5, sleep: 300});
    // report when one of our children has died
    // TODO should this influence whether we respawn? Or just leave that to the library?
    my_reaper.on('death', function(err, child) { sys.puts(child.name + " has died"); }

    // start up a monkey with spawn type of 'boot'
    var monkey = my_reaper.spawn({type: 'boot', name: 'fred'}, '--name', 'monkey');
    // to respawn on a name change
    monkey.respawn({type: 'change'}, '--name', 'gibbon');
    // to terminate the child process
    monkey.kill();

