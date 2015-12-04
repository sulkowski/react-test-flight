import React, {Component} from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
const logger = createLogger();

const createStoreWithDevTools = compose(
  applyMiddleware(thunk, promise, logger),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

class DevPackage extends Component {
  render() {
    return (
      <DebugPanel top right bottom>
        <DevTools store={this.props.store} monitor={LogMonitor} visibleOnLoad={false} />
      </DebugPanel>
    );
  }
}

export { createStoreWithDevTools, DevPackage };
