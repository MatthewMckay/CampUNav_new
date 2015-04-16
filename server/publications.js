/**
 * Created by matthewmckay on 4/11/15.
 */
Meteor.publish("rmsSaved", function () {
    return SavedRooms.find({ createdBy: this.userId });
});

Meteor.publish("courses", function() {
   return Courses.find();
});

Meteor.publish("rooms", function() {
    return Rooms.find();
});

Meteor.publish("teacher", function() {
    return Teacher.find();
});
Meteor.publish("waypoint", function() {
    return Waypoint.find();
});

