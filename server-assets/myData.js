 var family = [
   {
 	name: 'Jackie',
 	age: 24,
 	relationship: 'wife'
  },

  {
 	name: 'Isabelle',
 	age: 1,
 	relationship: "daughter"
  }
   
 ];
 module.exports.getFamily = function() {
 	return family;
 };
 module.exports.addFamily = function(newFamily) {
 	family.push(newFamily);
 }

 var friends = [
    {
    	name: 'Monk',
    	age: 53,
    	yearMet: 2012
    },

    {   name: 'Shawn Spencer',
        age: 34,
        yearMet: 2013
    }
 ];
  module.exports.getFriends = function() {
  	return friends;

  };

  module.exports.addFriends = function(newFriend) {
  		friend.push(newFriend);
  }

 var activities = [
    {
    	name: 'Devin',
    	age: 24,
    	height: 6,
    	movie: 'Hobbit',
    	artist: 'Imagine Dragons',
    	food: 'pizza'
    }

];

module.exports.getActivities = function() {
	return activities;
};
module.exports.addActivities = function(newActivity) {
	 activities.push(newActivity);
};