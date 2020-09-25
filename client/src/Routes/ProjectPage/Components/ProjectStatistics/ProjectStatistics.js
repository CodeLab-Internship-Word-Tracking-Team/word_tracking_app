// React Imports
import React from 'react';

// Material UI Imports
import { Grid } from '@material-ui/core';

// Component Imports
import ProjectStatistic from '../ProjectStatistic/ProjectStatistic';

export default function ProjectStatistics({ project }) {
  if (project.length > 0) {
    const { wordCount, wordGoal } = project[0];
    const progressPercentage = ((wordCount / wordGoal) * 100).toFixed(2);

    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={10} lg={3}>
          <ProjectStatistic statNum={wordCount} statLabel="total words submitted" />
        </Grid>
        <Grid item xs={10} lg={3}>
          <ProjectStatistic statNum={wordGoal} statLabel="total word count goal" />
        </Grid>
        <Grid item xs={10} lg={3}>
          <ProjectStatistic statNum={`${progressPercentage}%`} statLabel="progress toward goal" />
        </Grid>
      </Grid>
    );
  }

  return null;
}
