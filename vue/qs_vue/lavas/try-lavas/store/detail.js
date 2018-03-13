import axios from 'axios'
const SET_WEATHER = 'setWeather';

export const state = () => ({
  weather: {
    text: '',
    temp: 0
  }
})
export const mutations = {
  [SET_WEATHER](state, { weatherText, weatherTemp }) {
    state.weather = {
      text: weatherText,
      temp: weatherTemp
    }
  }
}
export const actions = {
  async setWeather({commit}, params) {
    try {
      let url = `https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202151849&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
      let result = await axios(url);
      let condition = result.data.query.results.channel.item.condition;
      commit(SET_WEATHER, {
        weatherText: condition.text,
        weatherTemp: condition.temp
      })
    } catch(e) {
      console.log('error in setWeather');
      console.log(e);
    }
  }
}