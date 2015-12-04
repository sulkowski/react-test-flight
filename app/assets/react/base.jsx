import React from 'react'
import { Provider } from 'react-redux'
import CounterPage from './pages/counter_page'
import configureStore from './store/configure_store'
import renderApp from './components/render_app';
const store = configureStore()

// import HelloMessage from './components/hello_message';
import ContactForm from './components/contact_form';

let body = (
  <Provider store={store}>
    <CounterPage />
  </Provider>
)

renderApp(body, { name: 'root'})
if (__DEVELOPMENT__) {
  var { DevPackage } = require('./components/dev_package');
  renderApp(<DevPackage store={store} />, 'dev_tools');
};
