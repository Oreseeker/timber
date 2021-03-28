import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    fetch({ url, method = 'GET', mode, cache, credentials, headers, redirect, referrerPolicy, body, params }) {
      const baseUrl = 'http://localhost:3000/';
      let fullUrl = baseUrl + url;

      if (!headers) headers = { 'Content-Type': 'application/json' };

      if (method === 'GET' && params) {
        const paramsKeys = Object.keys(params);
        fullUrl += '?';
        paramsKeys.forEach((key, index) => {
          fullUrl += `${key}=${params[key]}`;
          if (index !== paramsKeys.length - 1) fullUrl += '&'
        });
      }
      return fetch(fullUrl, {
        method,
        mode,
        cache,
        credentials,
        headers,
        redirect,
        referrerPolicy,
        body: JSON.stringify(body)
      }).then(res => res.text()).then(res => {
        if (!res) {
          return null;
        } else {
          return JSON.parse(res);
        }
      });
    }
  }
});

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
