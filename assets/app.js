angular.module("app",[]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,s){t.addPost=function(){t.postBody&&s.create({username:"Brian",body:t.postBody}).success(function(s){t.posts.unshift(s),t.postBody=null})},s.fetch().success(function(s){t.posts=s})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(s){return t.post("/api/posts",s)}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsInVzZXJuYW1lIiwiYm9keSIsInN1Y2Nlc3MiLCJwb3N0IiwicG9zdHMiLCJ1bnNoaWZ0IiwiZmV0Y2giLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxVQ0FBRCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBQSxTQUFBLFdBQUEsU0FBQUMsRUFBQUMsR0FDQUQsRUFBQUUsUUFBQSxXQUNBRixFQUFBRyxVQUNBRixFQUFBRyxRQUNBQyxTQUFBLFFBQ0FDLEtBQUFOLEVBQUFHLFdBQ0FJLFFBQUEsU0FBQUMsR0FDQVIsRUFBQVMsTUFBQUMsUUFBQUYsR0FDQVIsRUFBQUcsU0FBQSxRQUtBRixFQUFBVSxRQUFBSixRQUFBLFNBQUFFLEdBQ0FULEVBQUFTLE1BQUFBLE9DZkFaLFFBQUFDLE9BQUEsT0FDQWMsUUFBQSxZQUFBLFFBQUEsU0FBQUMsR0FDQUMsS0FBQUgsTUFBQSxXQUNBLE1BQUFFLEdBQUFFLElBQUEsZUFFQUQsS0FBQVYsT0FBQSxTQUFBSSxHQUNBLE1BQUFLLEdBQUFMLEtBQUEsYUFBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFBvc3RzU3ZjKSB7XG4gICAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcbiAgICAgICAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICdCcmlhbicsXG4gICAgICAgICAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XG4gICAgICAgICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdClcbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFBvc3RzU3ZjLmZldGNoKCkuc3VjY2VzcyhmdW5jdGlvbiAocG9zdHMpIHtcbiAgICAgICAgJHNjb3BlLnBvc3RzID0gcG9zdHNcbiAgICB9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICAgIHRoaXMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdClcbiAgICB9XG59KVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=