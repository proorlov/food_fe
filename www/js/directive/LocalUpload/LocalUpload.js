//inject directives and services.
angular.module('food.LocalUpload', ['ngFileUpload'])
    .controller('LocalUpload', ['$scope', 'Upload', function ($scope, Upload) {
  // upload later on form submit or something similar
  $scope.submit = function() {
    if ($scope.form.file.$valid && $scope.file) {
      $scope.upload($scope.file);
    }
  };

  // upload on file select or drop
  $scope.upload = function (file) {
    Upload.upload({
      url: 'upload/url',
      data: {file: file, 'username': $scope.username}
    }).then(function (resp) {
      console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    }, function (resp) {
      console.log('Error status: ' + resp.status);
    }, function (evt) {
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });
  };
  // for multiple files:
  $scope.uploadFiles = function (files) {

  }
}]);
