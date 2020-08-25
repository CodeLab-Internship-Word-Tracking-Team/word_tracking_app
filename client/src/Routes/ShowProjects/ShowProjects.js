// React Imports
import React from 'react';

// Material UI imports
import { Grid } from '@material-ui/core';

// Component Imports
import NewProjectModal from '../../Components/NewProjectModal';

export default function ShowProjects({ getToken, focusProject }) {
  return (
    <div>
      {/* Add New Project/ */}
      <Grid container alignItems="flex-start" justify="flex-end" direction="row">
        <NewProjectModal getToken={getToken} />
      </Grid>
    </div>
  );
}
