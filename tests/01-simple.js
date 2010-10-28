var sys = require('sys');
var reaper = require('reaper');

var my_reaper = new reaper.Reaper({command: 'bot', cwd: 'here', failures: 5, sleep: 300});
sys.puts(my_reaper);
sys.puts(my_reaper.command);

my_reaper.spawn({type:'boot', name:'fred'});
