import React from 'react';
import { Grid, Header, Segment, Sidebar, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import LogOutButton from '../LogOutButton';
import { useAuthContext } from '../../firebaseUtils/useAuthContext';
import styles from './navBar.module.css';

export default function NavBar({ linksAndTitles }) {
  const { open, setOpen } = useAuthContext();
  return (
    <div className={styles.container}>
      <Sidebar
        as={Segment}
        animation="scale down"
        direction="left"
        visible={open}
        className={styles.nav}>
        <Grid textAlign="center">
          <Grid.Column Rows={linksAndTitles.length}>
            {linksAndTitles.map((object) => (
              <Grid.Row key={object.title} href={object.link}>
                <Header className="nav-link">{object.title}</Header>
                <Grid.Column Columns={1}>
                  <Grid.Row></Grid.Row>
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid.Column>
        </Grid>
        <LogOutButton className={styles.logout} />
      </Sidebar>
    </div>
  );
}
