import MonitorTemplate from './monitor.html';

function routerConfig ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('monitor.list', {
      url: '/',
      template: MonitorTemplate,
      controller: 'MonitorController',
      controllerAs: 'monitor',
      resolve: {
        monitorData(MonitorService){
          'ngInject';
            return MonitorService.getResources();
        }
      }
    });

}

export default routerConfig;
