/**
 * NavCtrl
 * @param {type} param1
 * @param {type} param2
 */
adminApp.controller('NavCtrl', function($scope, $state) {
    $scope.active = $state;
    $scope.isActive = function(viewLocation) {
        var active = (viewLocation === $state.current.name);
        return active;
    };
})
/*
* Dashboard controller
*/
adminApp.controller('dashboardCtrl', function($scope) {
    
});

/**
 * AllUsersCtrl
 */
adminApp.controller('AllUsersCtrl', function($scope, userList,Users,$location) {
    console.log('userList')
    $scope.users = userList;
    $scope.activePost = false;
    $scope.setActive = function(user) {
        $scope.activeUser = user;
        console.log($scope.activeUser);
        
    }
    $scope.deleteUser = function(id) {
        $scope.data={};
         $scope.data.id=id;
         console.log($scope.data);
        Users.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                alert(res.message);
               // window.location.reload();
            } else {
                $scope.update = "error";
            }
        });
    }
});
/*
* Add user
*/
adminApp.controller('addUserCtrl',function($scope,Users){
    $scope.user = {}
    $scope.addUser = function(){
        console.log(this.user);
        $scope.newUser = {};
        $scope.newUser.email = this.user.email;
        $scope.newUser.password = this.user.password;
        $scope.newUser.firstname = this.user.firstname;
        $scope.newUser.lastname = this.user.lastname;
        $scope.newUser.dob = this.user.dob;
        $scope.newUser.role = this.user.role;
        $scope.newUser.status = this.user.status;

        Users.add($scope.newUser).then(function(res) {
            console.log(res);
        });
        console.log('added')
        // Users.add($scope.newPost);
        this.user = {};
        
    }
});
/**
 * EditUsersCtrl
 */
adminApp.controller('editUserCtrl', function($scope, Users, $stateParams) {
    $scope.user = {};
    $scope.params = {};
    $scope.params.path = $stateParams.paraml;
    Users.sigledata($scope.params).then(function(res) {
        if (res == null) {
            window.location.href = '/404';
        } else {
            // console.log(res);
            $scope.user.firstname = res.firstname;
            $scope.user.lastname = res.lastname;
            $scope.user.email = res.email;
            $scope.user.dob = res.dob;
            $scope.user.role = res.role;
            $scope.user.id = res._id;
        }
    });
    $scope.editPost = function() {

        $scope.newPost = {};
        $scope.newPost.firstname = this.user.firstname;
        $scope.newPost.lastname = this.user.lastname;
        $scope.newPost.email = this.user.email;
        $scope.newPost.dob = this.user.dob;
        $scope.newPost.role = this.user.role;
        $scope.newPost.id = this.post.id;
        Users.update($scope.newPost).then(function(res) {
            console.log(res);
            if (res) {
                $scope.update = res.message;
                alert(res.message);
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})
/**
 * AllUsersCtrl
 */

adminApp.controller('addGenerCtrl', function($scope,Gener) {
    $scope.post={};
    $scope.addPost = function() {
        console.log(this.post);
        $scope.newPost = {};
        $scope.newPost.name = this.post.name;
        // $scope.newPost.slug = this.post.slug;
        // $scope.newPost.description = this.post.description;
        Gener.add($scope.newPost).then(function(res) {
            console.log(res);
            
        });
        this.post = {};
    };
});

adminApp.controller('GenerListCtrl',function($rootScope,$scope,generList,Gener) {
    $rootScope.posts=generList;
    $scope.posts = generList;
    $scope.activePost = false;
    $scope.setActive = function(user) {
        $scope.activePost = user;
        console.log($scope.activePost);
    }
    $scope.deletepost = function(id) {
        $scope.data={};
         $scope.data.id=id;
        // console.log($scope.data);
        $('.'+id).css('display','none');
        Gener.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                alert(res.message);
             //   window.location.reload();
            } else {
                $scope.update = "error";
            }
        });
    }
});

/**
 * EditGenerCtrl
 */
adminApp.controller('editGenerCtrl', function($scope, Gener, $stateParams) {
    $scope.post = {};
    $scope.params = {};
    $scope.params.path = $stateParams.paraml;
    Gener.sigledata($scope.params).then(function(res) {
        console.log(res);
        if (res == null) {
            window.location.href = '/404';
        } else {
            // console.log(res);
            $scope.post.name = res.name;
            // $scope.post.slug = res.slug;
            // $scope.post.description = res.description;
            $scope.post.id = res._id;
        }
    });
	
    $scope.editPost = function() {
    $scope.newPost = {};
    $scope.newPost.name = this.post.name;
    // $scope.newPost.description = this.post.description;
     $scope.newPost.id = this.post.id;
    Gener.update($scope.newPost).then(function(res) {
    console.log(res);
            if (res) {
                $scope.update = res.message;
                alert(res.message);
            } else {
                $scope.update = "error";
            }
          //   console.log(res);
        });
    }
});


adminApp.controller('TrackListCtrl',function($scope,trackList,Track) {
    
    $scope.posts = trackList;
    $scope.activePost = false;
    $scope.setActive = function(user) {
        $scope.activePost = user;
        console.log($scope.activePost);
    }
    $scope.deletepost = function(id) {
        $scope.data={};
         $scope.data.id=id;
        // console.log($scope.data);
        $('.'+id).css('display','none');
        Track.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                alert(res.message);
             //   window.location.reload();
            } else {
                $scope.update = "error";
            }
        });
    }
});


adminApp.controller('editTrackCtrl', function($scope, Track, $stateParams) {
    $scope.post = {};
    $scope.params = {};
    $scope.params.path = $stateParams.paraml;
    Track.sigledata($scope.params).then(function(res) {
        console.log(res);
        if (res == null) {
            window.location.href = '/404';
        } else {
            // console.log(res);
            $scope.post.title = res.title;
            $scope.post.gener = res.gener;
            $scope.post.rating = res.rating;
            $scope.post.id = res._id;
        }
    });
	
    $scope.editPost = function() {
    $scope.newPost = {};
    $scope.newPost.title = this.post.title;
    $scope.newPost.rating = this.post.rating;
    $scope.newPost.id = this.post.id;
    Track.update($scope.newPost).then(function(res) {
             console.log(res);
            if (res) {
                $scope.update = res.message;
                alert(res.message);
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
});

adminApp.controller('addTrackCtrl', function($scope,Track) {
    $scope.post={};
    $scope.generList={};

    Track.get_gen().then(function(res) {
        if (res == null) {
    $scope.generList={};
            $scope.generList= "";
        } else {
            $scope.generList= res;
        }
    });
      
    $scope.addPost = function() {
        console.log(this.post);
        $scope.newPost = {};
        $scope.newPost.title = this.post.title;
        $scope.newPost.gener = this.post.gener;
        $scope.newPost.rating = this.post.rating;
        console.log($scope.newPost);
        Track.add($scope.newPost).then(function(res) {
            console.log(res);
            $scope.message="Saved";
        });
        this.post = {};
    };
});



