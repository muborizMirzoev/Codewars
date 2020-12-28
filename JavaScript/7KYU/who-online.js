// https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript

// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

const whosOnline = (friends) => {
  if (friends.length === 0) return {}
  
  const result = {
    online: [],
    offline: [],
    away: []
  };

  friends.forEach((item) => {
    if (item.status === 'offline') {
      result.offline.push(item.username)
    } else if (item.status === 'online' && item.lastActivity > 10){
      result.away.push(item.username)
    } else {
      result.online.push(item.username)
    }
  })

  for (let key in result) {
    if (result[key].length === 0) {
      delete result[key]
    }
  }
  return result
}
