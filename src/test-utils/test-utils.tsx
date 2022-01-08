import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { persistor ,persistedReducer} from '../app/store';
import { PersistGate } from 'redux-persist/integration/react'

function render(
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  {
    initialState,store = createStore(persistedReducer,initialState),
    ...renderOptions
  }:any = {}
) {
  function Wrapper({ children }:any) {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }