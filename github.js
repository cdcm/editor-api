const GitHub = require('github-api');
const config = require('./config');

// basic auth
const gh = new GitHub(config.githubCredentials);

const me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
me.listNotifications(function(err, notifications) {

    console.log(notifications);

});

const clayreimann = gh.getUser('clayreimann');
clayreimann.listStarredRepos(function(err, repos) {

    console.log(repos);

});