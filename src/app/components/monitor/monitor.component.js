import MonitorDirective from './monitor.directive'
import MonitorService from './monitor.service'
import MonitorRouter from './monitor.route'
import './monitor.scss'
import uiroute from 'angular-ui-router'

let monitor = angular.module('app.component.monitor',[uiroute])
   .directive('monitor', MonitorDirective)
   .service('MonitorService', MonitorService)

export default monitor;
