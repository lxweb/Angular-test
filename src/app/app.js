import angular from 'angular'
import route from './app.route'
import monitor from './components/monitor/monitor.component'

import '../style/app.scss'

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  'app.component.monitor'
])
  .constant('constants', process.env)
  .config(route)

export default MODULE_NAME
