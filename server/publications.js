/**
 * Created by yolanda on 16/6/8.
 */

Meteor.publish('posts', function(author) {
    return Posts.find();
    //return Posts.find({flagged:false , author: author} );
   //return Posts.find({flagged:false} , { fields : {
   //     url : false
   // }});
});

Meteor.publish('infoList', function(){
    return InfoList.find();
})

Meteor.publish('bidder' , function () {
    return Bidder.find();
})