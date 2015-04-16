/**
 * Created by matthewmckay on 4/15/15.
 */
if(Meteor.isClient) {

    Meteor.subscribe("rmsSaved");
    Meteor.subscribe("rooms");
    Meteor.subscribe("courses");
    Meteor.subscribe('teacher');
    Meteor.subscribe('waypoint');

    /*-------------------------------------------------------LOGIN PAGE JS */
    Template.register.events({
        'submit form': function (event, template) {
            event.preventDefault();
            var emailVar = template.find('#rEml').value;
            var passwordVar = template.find('#rPwd').value;
            console.log('Form Submitted');
            Accounts.createUser({
                email: emailVar,
                password: passwordVar
            });
            if (Meteor.user()) {
                console.log("congrats");
                Router.go('/myrooms');
            }
            else {
                console.log('something went wrong')
            }
        }
    });

    Template.login.events({
        'submit form': function (event, template) {
            event.preventDefault();
            var emailVar = template.find('#lEml').value;
            var passwordVar = template.find('#lPwd').value;
            console.log('Form Submitted');
            Meteor.loginWithPassword(emailVar, passwordVar, function () {
                if (Meteor.user()) {
                    console.log("congrats");
                    Router.go('/myrooms');
                }
                else {
                    console.log('something went wrong')
                }
            });
        }
    });
    /*-------------------------------------------------------END LOGIN PAGE JS */


    /*-------------------------------------------------------MY ROOMS PAGE JS */
    Template.ftr.events({
        'click .logout': function (event) {
            event.preventDefault();
            Meteor.logout(function () {
                Router.go('/');
            });
        }
    });

    Template.roomcontent.events({
        'click .list-bar': function (event, template) {
            event.preventDefault();
            console.log(event.currentTarget.id)
            var x = "#" + event.currentTarget.id + "1"
            console.log(x);
            if (template.find(x).style.height == "195px") {
                template.find(x).style.height = "0";
            }
            else {
                var course = document.getElementsByClassName('list-frame');
                for (var i = 0; i < course.length; i++) {
                    course[i].style.height = "0";
                }
                template.find(x).style.height = "195px";
            }
        }
    });

    Template.MyRoomsLayout.helpers({
        x: function () {
            var x = Rooms.find({}, {
                _id: 0,
                building: 1,
                roomNum: 0,
                roomID: 0,
                latitude: 0,
                longitude: 0
            }).fetch();
            return x.valueOf();
        }
    });
    /*-------------------------------------------------------END MY ROOMS PAGE JS */
}