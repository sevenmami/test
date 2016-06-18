/**
 * Created by yolanda on 16/6/8.
 */
import { Match } from 'meteor/check';
import { check } from 'meteor/check';
//var postsData = [
//    {
//        title: 'Introducing Telescope',
//        url: 'http://sachagreif.com/introducing-telescope/'
//    },
//    {
//        title: 'Meteor',
//        url: 'http://meteor.com'
//    },
//    {
//        title: 'The Meteor Book',
//        url: 'http://themeteorbook.com'
//    }
//];
//Template.postsList.helpers({
//    posts: function(){
//        return Posts.find();
//}
//});
//Template.postItem.helpers({
//    domain: function() {
//        var a = document.createElement('a');
//        a.href = this.url;
//        return a.hostname;
//    }
//});


Template.listPage.helpers({
    infoList: function(){
        return InfoList.find();
    }

});
Template.bidderlist.helpers({
    bidder : function(){
        return Bidder.find({id : this.id},{ sort : { offer : -1 }}).fetch();
    }
});

Template.showPrice.events({
    'submit .form' : function(e){
        e.preventDefault();
        console.log("---this.curPrice old---" + this.curPrice);
        var initPrice = this.initPrice;
        var increments = this.increments;
        var curPrice = this.curPrice;

        ////check
        var offer = $('[name="offer"]').val();
        var offerRegulation = Match.Where(function(x){
            //console.log(".........."+((offer-initPrice)%increments == 0));
            //console.log("offer" + offer);
            //console.log("==offer > curPrice=="+(offer > curPrice));
            //check(x , Number);
            return ((offer-initPrice)%increments == 0) && (offer > curPrice);
        });
        check(offer,offerRegulation);
        //var offer = $('[name="offer"]').val();
        Bidder.insert({
            id : this.id,
            bidder: '',
            offer: offer
        });
        InfoList.update({id:this.id},{$set:{curPrice : offer}});
        console.log("---this.curPrice new---" + this.curPrice);
        $('[name="offer"]').val("") ;
    }

})

