/**
 * Created by yolanda on 16/6/8.
 */
Router.configure({
   // layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn : function(){ return Meteor.subscribe('infoList');}//Meteor.subscribe('posts');}
});


Router.route('/', {name : 'listPage'});
Router.route('/pages/:_id', {name : 'detailPage', data : function(){

    return InfoList.findOne(this.params._id)
}});


Router.route('/pages/:_id/offer', {name : 'offerPage',data : function(){
    return InfoList.findOne(this.params._id)
}});

//Router.route('/', {name : 'postsList'});

//此处为什么只有_id管用，换成title之类的其他参数不行

Router.route('/posts/:_id' , {name : 'postPage', data : function(){
    return Posts.findOne(this.params._id)
}});
Router.route('/submit' , {name : 'postSubmit'} );

Router.onBeforeAction('dataNotFound', {only: 'postPage'});

