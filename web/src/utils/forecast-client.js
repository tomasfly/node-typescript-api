import {client} from './api-client';

function create(forecastData) {
    return client('beaches', {body: forecastData});
}

function read() {
  console.log('fetching...');
  // return client('forecast');
  return Promise.resolve([
    // [])
      {"time":"2020-05-24T00:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.47,"swellHeight":0.79,"swellPeriod":13.47,"time":"2020-05-24T00:00:00+00:00","waveDirection":180.29,"waveHeight":6,"windDirection":198.36},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":99.8,"swellHeight":0.74,"swellPeriod":13.42,"time":"2020-05-24T00:00:00+00:00","waveDirection":164.04,"waveHeight":4.86,"windDirection":198.94}]},{"time":"2020-05-24T01:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.63,"swellHeight":0.81,"swellPeriod":13.43,"time":"2020-05-24T01:00:00+00:00","waveDirection":179.89,"waveHeight":6.07,"windDirection":198.61},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":99.93,"swellHeight":0.76,"swellPeriod":13.38,"time":"2020-05-24T01:00:00+00:00","waveDirection":163.67,"waveHeight":4.96,"windDirection":196.04}]},{"time":"2020-05-24T02:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.78,"swellHeight":0.83,"swellPeriod":13.38,"time":"2020-05-24T02:00:00+00:00","waveDirection":179.5,"waveHeight":6.13,"windDirection":198.87},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.05,"swellHeight":0.77,"swellPeriod":13.35,"time":"2020-05-24T02:00:00+00:00","waveDirection":163.29,"waveHeight":5.05,"windDirection":193.14}]},{"time":"2020-05-24T03:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.94,"swellHeight":0.85,"swellPeriod":13.34,"time":"2020-05-24T03:00:00+00:00","waveDirection":179.1,"waveHeight":6.2,"windDirection":199.12},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.18,"swellHeight":0.79,"swellPeriod":13.31,"time":"2020-05-24T03:00:00+00:00","waveDirection":162.92,"waveHeight":5.15,"windDirection":190.24}]},{"time":"2020-05-24T04:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.91,"swellHeight":0.86,"swellPeriod":13.27,"time":"2020-05-24T04:00:00+00:00","waveDirection":178.79,"waveHeight":6.24,"windDirection":199.36},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.16,"swellHeight":0.8,"swellPeriod":13.22,"time":"2020-05-24T04:00:00+00:00","waveDirection":162.8,"waveHeight":5.23,"windDirection":186.73}]},{"time":"2020-05-24T05:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.88,"swellHeight":0.86,"swellPeriod":13.19,"time":"2020-05-24T05:00:00+00:00","waveDirection":178.47,"waveHeight":6.27,"windDirection":199.59},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.13,"swellHeight":0.81,"swellPeriod":13.14,"time":"2020-05-24T05:00:00+00:00","waveDirection":162.68,"waveHeight":5.31,"windDirection":183.23}]},{"time":"2020-05-24T06:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.85,"swellHeight":0.87,"swellPeriod":13.12,"time":"2020-05-24T06:00:00+00:00","waveDirection":178.16,"waveHeight":6.31,"windDirection":199.83},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.11,"swellHeight":0.82,"swellPeriod":13.05,"time":"2020-05-24T06:00:00+00:00","waveDirection":162.56,"waveHeight":5.39,"windDirection":179.72}]},{"time":"2020-05-24T07:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.84,"swellHeight":0.88,"swellPeriod":13.06,"time":"2020-05-24T07:00:00+00:00","waveDirection":177.29,"waveHeight":6.21,"windDirection":199.78},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.39,"swellHeight":0.83,"swellPeriod":13,"time":"2020-05-24T07:00:00+00:00","waveDirection":162.05,"waveHeight":5.37,"windDirection":185.22}]},{"time":"2020-05-24T08:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.84,"swellHeight":0.88,"swellPeriod":13,"time":"2020-05-24T08:00:00+00:00","waveDirection":176.42,"waveHeight":6.12,"windDirection":199.73},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.66,"swellHeight":0.84,"swellPeriod":12.95,"time":"2020-05-24T08:00:00+00:00","waveDirection":161.54,"waveHeight":5.35,"windDirection":190.73}]},{"time":"2020-05-24T09:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.83,"swellHeight":0.89,"swellPeriod":12.94,"time":"2020-05-24T09:00:00+00:00","waveDirection":175.55,"waveHeight":6.02,"windDirection":199.68},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.94,"swellHeight":0.85,"swellPeriod":12.9,"time":"2020-05-24T09:00:00+00:00","waveDirection":161.03,"waveHeight":5.33,"windDirection":196.23}]},{"time":"2020-05-24T10:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.82,"swellHeight":0.89,"swellPeriod":13.42,"time":"2020-05-24T10:00:00+00:00","waveDirection":174.1,"waveHeight":5.87,"windDirection":198.93},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.79,"swellHeight":0.8,"swellPeriod":12.77,"time":"2020-05-24T10:00:00+00:00","waveDirection":160.06,"waveHeight":5.22,"windDirection":205.67}]},{"time":"2020-05-24T11:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.81,"swellHeight":0.9,"swellPeriod":13.9,"time":"2020-05-24T11:00:00+00:00","waveDirection":172.64,"waveHeight":5.71,"windDirection":198.18},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.63,"swellHeight":0.75,"swellPeriod":12.65,"time":"2020-05-24T11:00:00+00:00","waveDirection":159.08,"waveHeight":5.12,"windDirection":215.1}]},{"time":"2020-05-24T12:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.8,"swellHeight":0.9,"swellPeriod":14.38,"time":"2020-05-24T12:00:00+00:00","waveDirection":171.19,"waveHeight":5.56,"windDirection":197.43},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.48,"swellHeight":0.7,"swellPeriod":12.52,"time":"2020-05-24T12:00:00+00:00","waveDirection":158.11,"waveHeight":5.01,"windDirection":224.54}]},{"time":"2020-05-24T13:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":91.95,"swellHeight":0.91,"swellPeriod":14.34,"time":"2020-05-24T13:00:00+00:00","waveDirection":171.34,"waveHeight":5.48,"windDirection":196.43},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.63,"swellHeight":0.75,"swellPeriod":12.85,"time":"2020-05-24T13:00:00+00:00","waveDirection":157.25,"waveHeight":4.93,"windDirection":225.18}]},{"time":"2020-05-24T14:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":92.09,"swellHeight":0.91,"swellPeriod":14.3,"time":"2020-05-24T14:00:00+00:00","waveDirection":171.49,"waveHeight":5.4,"windDirection":195.44},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.79,"swellHeight":0.8,"swellPeriod":13.18,"time":"2020-05-24T14:00:00+00:00","waveDirection":156.39,"waveHeight":4.84,"windDirection":225.82}]},{"time":"2020-05-24T15:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":92.24,"swellHeight":0.92,"swellPeriod":14.26,"time":"2020-05-24T15:00:00+00:00","waveDirection":171.64,"waveHeight":5.32,"windDirection":194.44},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":100.94,"swellHeight":0.85,"swellPeriod":13.51,"time":"2020-05-24T15:00:00+00:00","waveDirection":155.53,"waveHeight":4.76,"windDirection":226.46}]},{"time":"2020-05-24T16:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":92.45,"swellHeight":0.92,"swellPeriod":14.15,"time":"2020-05-24T16:00:00+00:00","waveDirection":170.86,"waveHeight":5.28,"windDirection":193.44},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.3,"swellHeight":0.86,"swellPeriod":13.62,"time":"2020-05-24T16:00:00+00:00","waveDirection":157.21,"waveHeight":4.72,"windDirection":230.56}]},{"time":"2020-05-24T17:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":92.65,"swellHeight":0.92,"swellPeriod":14.04,"time":"2020-05-24T17:00:00+00:00","waveDirection":170.09,"waveHeight":5.24,"windDirection":192.43},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.66,"swellHeight":0.86,"swellPeriod":13.72,"time":"2020-05-24T17:00:00+00:00","waveDirection":158.9,"waveHeight":4.69,"windDirection":234.65}]},{"time":"2020-05-24T18:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":92.86,"swellHeight":0.92,"swellPeriod":13.93,"time":"2020-05-24T18:00:00+00:00","waveDirection":169.31,"waveHeight":5.2,"windDirection":191.43},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":102.02,"swellHeight":0.87,"swellPeriod":13.83,"time":"2020-05-24T18:00:00+00:00","waveDirection":160.58,"waveHeight":4.65,"windDirection":238.75}]},{"time":"2020-05-24T19:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":92.97,"swellHeight":0.91,"swellPeriod":13.81,"time":"2020-05-24T19:00:00+00:00","waveDirection":168.92,"waveHeight":5.18,"windDirection":191.42},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.74,"swellHeight":0.86,"swellPeriod":13.68,"time":"2020-05-24T19:00:00+00:00","waveDirection":160.17,"waveHeight":4.63,"windDirection":238.18}]},{"time":"2020-05-24T20:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":93.07,"swellHeight":0.91,"swellPeriod":13.68,"time":"2020-05-24T20:00:00+00:00","waveDirection":168.52,"waveHeight":5.16,"windDirection":191.4},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.47,"swellHeight":0.84,"swellPeriod":13.53,"time":"2020-05-24T20:00:00+00:00","waveDirection":159.77,"waveHeight":4.62,"windDirection":237.6}]},{"time":"2020-05-24T21:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":93.18,"swellHeight":0.9,"swellPeriod":13.56,"time":"2020-05-24T21:00:00+00:00","waveDirection":168.13,"waveHeight":5.14,"windDirection":191.39},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.19,"swellHeight":0.83,"swellPeriod":13.38,"time":"2020-05-24T21:00:00+00:00","waveDirection":159.36,"waveHeight":4.6,"windDirection":237.03}]},{"time":"2020-05-24T22:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":93.37,"swellHeight":0.9,"swellPeriod":13.49,"time":"2020-05-24T22:00:00+00:00","waveDirection":167.8,"waveHeight":5.12,"windDirection":193.31},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.54,"swellHeight":0.83,"swellPeriod":13.37,"time":"2020-05-24T22:00:00+00:00","waveDirection":159.16,"waveHeight":4.56,"windDirection":223.85}]},{"time":"2020-05-24T23:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":93.57,"swellHeight":0.89,"swellPeriod":13.42,"time":"2020-05-24T23:00:00+00:00","waveDirection":167.46,"waveHeight":5.11,"windDirection":195.23},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.89,"swellHeight":0.84,"swellPeriod":13.35,"time":"2020-05-24T23:00:00+00:00","waveDirection":158.95,"waveHeight":4.53,"windDirection":210.67}]},{"time":"2020-05-25T00:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":93.76,"swellHeight":0.89,"swellPeriod":13.35,"time":"2020-05-25T00:00:00+00:00","waveDirection":167.13,"waveHeight":5.09,"windDirection":197.15},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":102.24,"swellHeight":0.84,"swellPeriod":13.34,"time":"2020-05-25T00:00:00+00:00","waveDirection":158.75,"waveHeight":4.49,"windDirection":197.49}]},{"time":"2020-05-25T01:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":94.01,"swellHeight":0.88,"swellPeriod":13.26,"time":"2020-05-25T01:00:00+00:00","waveDirection":167.11,"waveHeight":5.12,"windDirection":199.49},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":102.01,"swellHeight":0.83,"swellPeriod":13.26,"time":"2020-05-25T01:00:00+00:00","waveDirection":158.69,"waveHeight":4.5,"windDirection":198.42}]},{"time":"2020-05-25T02:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":94.27,"swellHeight":0.88,"swellPeriod":13.17,"time":"2020-05-25T02:00:00+00:00","waveDirection":167.08,"waveHeight":5.15,"windDirection":201.84},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.78,"swellHeight":0.81,"swellPeriod":13.17,"time":"2020-05-25T02:00:00+00:00","waveDirection":158.63,"waveHeight":4.5,"windDirection":199.35}]},{"time":"2020-05-25T03:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":94.52,"swellHeight":0.87,"swellPeriod":13.08,"time":"2020-05-25T03:00:00+00:00","waveDirection":167.06,"waveHeight":5.18,"windDirection":204.18},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.55,"swellHeight":0.8,"swellPeriod":13.09,"time":"2020-05-25T03:00:00+00:00","waveDirection":158.57,"waveHeight":4.51,"windDirection":200.28}]},{"time":"2020-05-25T04:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":94.7,"swellHeight":0.85,"swellPeriod":12.95,"time":"2020-05-25T04:00:00+00:00","waveDirection":167.09,"waveHeight":5.25,"windDirection":203.13},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.67,"swellHeight":0.79,"swellPeriod":12.96,"time":"2020-05-25T04:00:00+00:00","waveDirection":158.76,"waveHeight":4.6,"windDirection":202.45}]},{"time":"2020-05-25T05:00:00+00:00","forecast":[{"lat":-33.75,"lng":151.3,"name":"Dee Why","position":"S","rating":3,"swellDirection":94.88,"swellHeight":0.83,"swellPeriod":12.82,"time":"2020-05-25T05:00:00+00:00","waveDirection":167.11,"waveHeight":5.31,"windDirection":202.08},{"lat":-33,"lng":151,"name":"Manly beach","position":"S","rating":3,"swellDirection":101.79,"swellHeight":0.78,"swellPeriod":12.83,"time":"2020-05-25T05:00:00+00:00","waveDirection":158.94,"waveHeight":4.69,"windDirection":204.61}]}]
  )
}

export {create, read}
