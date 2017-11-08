class MonitorService {
  constructor ($http, constants) {
    'ngInject';

    const name = 'MonitorService';
    this.$http = $http;
    this.apiUrl = constants.API_URL;
    this.fakeList = [
      {id: 1, type: 'firewall', state: 'accepted', name: '432462',
        owner: 'jtuck',
        date: new Date(),
        metrics: 12,
        build: 50,
        UT: 60,
        FT: 15,
        data: {
          metrics: {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72
          },
          build: {
            date: new Date()
          },
          UT: {
            passed: 142,
            notpassed: 10,
            covered: 76
          },
          FT: {
            passed: 142,
            notpassed: 10,
            covered: 76
          }
        }
      },

      {id: 2, type: 'firewall', state: 'rejected', name: '432463',
        owner: 'jtuck',
        date: new Date(),
        metrics: 12,
        build: 50,
        UT: 60,
        FT: 15,
        data: {
          metrics: {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72
          },
          build: {
            date: new Date()
          },
          UT: {
            passed: 142,
            notpassed: 10,
            covered: 76
          },
          FT: {
            passed: 142,
            notpassed: 10,
            covered: 76
          }
        }
      },

      {id: 3, type: 'build', state: 'succeed', name: 'Tenrox-N1_1234',
        owner: 'jtuck',
        date: new Date(),
        metrics: 12,
        build: 50,
        UT: 60,
        FT: 15,
        data: {
          metrics: {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72
          },
          build: {
            date: new Date()
          },
          UT: {
            passed: 142,
            notpassed: 10,
            covered: 76
          },
          FT: {
            passed: 142,
            notpassed: 10,
            covered: 76
          }
        }
      },

      {id: 4, type: 'build', state: 'fail', name: 'Tenrox-N2_1235',
        owner: 'jtuck',
        date: new Date(),
        metrics: 12,
        build: 50,
        UT: 60,
        FT: 15,
        data: {
          metrics: {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72
          },
          build: {
            date: new Date()
          },
          UT: {
            passed: 142,
            notpassed: 10,
            covered: 76
          },
          FT: {
            passed: 142,
            notpassed: 10,
            covered: 76
          }
        }
      }

    ];
  }

  /**
   * For this example I'm using just promises because there is no backend
   * But there are 2 lines commented with the real code
   */
  getResources(){
    // const url = this.apiUrl + 'me';
    // return this.$http.get(url);
    return new Promise( (resolve, reject) => {
      if(this.fakeList.length){
        return resolve(this.fakeList)
      }
      return reject()
    });
  }

  updateSettings(data){
    // const url = this.apiUrl + 'me';
    // return this.$http({
    //   url,
    //   method: 'PUT',
    //   data
    // });

  }
}

export default MonitorService;
