// @flow
import React from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import InboxIcon from 'material-ui-icons/Inbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import { NavLink, Link } from 'react-router-dom'

export default () => (
  <React.Fragment>
    <List component="nav">
      <ListItem component={Link} to="/" button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItem>
      <ListItem component={NavLink} activeClassName="gray" exact to="/" button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Feed" />
      </ListItem>
    </List>
    <Divider />
    <List component="nav">
      <ListItem
        component={NavLink}
        activeClassName="gray"
        exact
        to="/drafts"
        button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem component={Link} to="/create" button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="+ Create Draft" />
      </ListItem>
    </List>
  </React.Fragment>
)
