import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FeedPage from './containers/FeedPage'
import DraftsPage from './containers/DraftsPage'
import CreatePage from './containers/CreatePage'
import DetailPage from './containers/DetailPage'

export default () => (
  <React.Fragment>
    <div>
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route path="/drafts" component={DraftsPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/post/:id" component={DetailPage} />
      </Switch>
    </div>
  </React.Fragment>
)
