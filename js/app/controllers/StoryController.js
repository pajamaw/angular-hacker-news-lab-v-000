function StoryController(story) {
   this.data = story.data;

  ct

  StoryService
    .getTopStoriesId('')
    .then(function (res){
      ctrl.topStoriesId = res.data;
   

      for(var i=0; i < ctrl.topStoriesId.length; i++){

        StoryService
          .getItems(ctrl.topStoriesId[i])
          .then(function(res){
            ctrl.topStories.push(res.data);
          })
        }
   });

  PostService
    .getPostInfo(id)
   .then(function (res) {
      ctrl.storyData = res.data;
    });

}



angular
  .module('app')
  .controller('StoryController', StoryController);