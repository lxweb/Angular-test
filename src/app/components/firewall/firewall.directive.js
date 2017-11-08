// import routerConfig from './monitor.route';
// import MonitorController from './monitor.controller';
// import MonitorService from './monitor.service';
import FirewallTemplate from './firewall.html';

class MonitorDirective{
  constructor ($parse) {
   'ngInject';

   let directive = {
     restrict: "E",
     template: FirewallTemplate,
     replace: true
   };

   return directive;
 }

}

export default function newMonitorDirective($parse){
  'ngInject';
  return new MonitorDirective($parse);
}
