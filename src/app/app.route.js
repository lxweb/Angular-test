import layout from './app.html'

const AppRoute = ($stateProvider, $urlRouterProvider, $locationProvider) => {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('monitor', {
      url: '/',
      template: layout
    });
}

export default AppRoute
