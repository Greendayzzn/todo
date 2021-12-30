import React from 'react'
import { TabBar, BaseNavBar } from "./components/Layouts"
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./store"
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Input, Space } from 'antd';
const { Search } = Input;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <BaseNavBar />
        <div className='purple-theme'>
          {/* <Button type="primary">primary</Button> */}
          <Search placeholder="input search text"  style={{ }} />

        </div>
        <div className="main">
          {renderRoutes(routes)}
        </div>
        <TabBar />
      </Router>
    </Provider>
  )
}

export default App;