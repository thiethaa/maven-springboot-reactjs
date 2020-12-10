import React from 'react'
import { BrowserRouter ,Route,Switch} from 'react-router-dom'
import CheckList from './components/CheckList'
import Questionnare from './components/Questionnare'
import Layout from './layout/Layout';

export default function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/checklist" component={CheckList} />
            <Route path="/questionnare" component={Questionnare} />
          </Switch>
        </Layout>
      </BrowserRouter>
  )
}
