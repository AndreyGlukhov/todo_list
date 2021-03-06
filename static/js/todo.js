
var app = angular.module('toDo', []);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);

app.controller('toDoController', function($scope, $http) {
    // $scope.todoList = [{todoText: 'Первое сообщение', done: false}];
    $http.get('/todo/api/').then(function (response) {
        $scope.todoList = [];
        for (var i=0; i<response.data.length; i++) {
            var todo = {};
            todo.todoText = response.data[i].todo_text;
            todo.id = response.data[i].id;
            todo.done = response.data[i].done;
            $scope.todoList.push(todo);
        }
        // console.log(response.data);
    });
    $scope.saveData = function () {
        var data = {todo_text: $scope.todoInput, done: false};
        $http.put('/todo/api/', data)
    }
    $scope.todoAdd = function () {
        $scope.todoList.push({todoText: $scope.todoInput, done: false});
        $scope.todoInput = '';
    };
    $scope.remove = function () {
        var oldList = $scope.todoList;
         $scope.todoList = [];
         angular.forEach(oldList, function (x) {
             if (!x.done) $scope.todoList.push(x)
             else $http.delete('/todo/api/'+x.id+'/')
         })

    }
});