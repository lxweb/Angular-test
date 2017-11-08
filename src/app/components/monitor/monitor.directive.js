import MonitorController from './monitor.controller'
import MonitorTemplate from './monitor.html'

class MonitorDirective{
  constructor ($parse) {
   'ngInject';

   let directive = {
     restrict: "E",
     template: MonitorTemplate,
     controller: MonitorController,
     controllerAs: 'vm'
   };
   return directive
 }

}

export default function newMonitorDirective($parse){
  'ngInject';
  return new MonitorDirective($parse);
}
