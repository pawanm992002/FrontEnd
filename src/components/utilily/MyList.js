import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function MyList({list}) {
    return (
        <List
          sx={{
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
          }}
          subheader={<li />}
        >
          {list.map(({ name, link }, i) => (
            <Link key={i} to={link}>
              <ListItem >
                <ListItemText primary={`${i + 1}. ${name}`} />
              </ListItem>
            </Link>
          ))}
        </List>)

}