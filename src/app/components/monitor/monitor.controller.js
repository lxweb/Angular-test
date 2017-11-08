class MonitorController {
  constructor(MonitorService) {
    'ngInject';
    const name = 'MonitorController'
    this.monitorService = MonitorService
    this.monitorService.getResources()
    .then( list => {
      this.resourcesList =  list
      this.resourcesList.map(item => {
        item.expanded = false
        return item
      })
    })
    .catch( e => {
      this.resourcesList = []
      this.err = e
    })
  }

  getResources(){
    this.monitorService.getResources()
    .then( list => {
      this.resourcesList =  list
    })
    .catch( e => {
      this.resourcesList = []
      this.err = e
    })
  }

  expandItem(id){
    this.resourcesList.map( item => {
      item.expanded = false
      if(item.id===id) item.expanded = true
      return item;
    })
  }

}

export default MonitorController;
