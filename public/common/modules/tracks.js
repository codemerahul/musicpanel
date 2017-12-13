var tracksModule = angular.module('fwrk.tracks', []);

tracksModule.service('Track', function($http) {
    return {
        all: function() {
            return $http.get('/api/tracks').then(function(postList) {
                return postList.data;
            });
        },

        get_gen: function() {
                    console.log( "in the player get_gener");

        return $http.get('/api/get_gen').then(function(geners) {
                 console.log(geners);
                return geners.data;
            }).catch(function(err) {
                console.error('Something went wrong getting gener!');
                console.error(err);
                return err;
            });;
        },




        add: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/tracks',
                data: newPost
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },
        remove: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/deletetrack',
                data: newPost
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },
        update: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/get_track',
                data: newPost
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });

        },
        sigledata: function(parmal) {
            console.log(parmal)
            console.log('simer')
            return $http({
                method: 'post',
                url: '/api/parmaltrack',
                data: parmal
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        }
    };
});