import React from 'react'
import {Link} from 'react-router-dom'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { MenuItem } from 'material-ui/Menu'

import StarIcon from 'material-ui-icons/Star'



export const DrawerMenuItems = (
  <div>
    <Divider />
    <List>
      <Link className="linkStyle" to="/recharts">
      <ListItem button>
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <ListItemText primary="ReCharts" />
      </ListItem>
      </Link>
      <Link className="linkStyle" to="/victory">
      <ListItem button>
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Victory" />
      </ListItem>
      </Link>
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </List>
  </div>
)


function btn_logout() {
  console.log("CLICK!")
}

const AppBarMenuItems = ({ onClick, logout }) => (
  <div>
    <MenuItem onClick={() => { onClick(); btn_logout(); }}>My account</MenuItem>
    <MenuItem onClick={() => { onClick(); btn_logout(); }}>Logout</MenuItem>
  </div>
)



export const AppBarMenuItemsExport = AppBarMenuItems;
