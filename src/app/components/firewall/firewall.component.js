import FirewallDirective from './firewall.directive'

let firewall = angular.module('app.component.firewall',[])
  .directive('firewall', FirewallDirective)

export default firewall;
