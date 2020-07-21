// React Imports
import React from 'react';

// Material UI Imports
import { Grid } from '@material-ui/core';

// Component Imports
import ProjectStatistic from '../ProjectStatistic/ProjectStatistic';

export default function ProjectStatistics({ project }) {
  const { word_count: wordCount, word_goal: wordGoal } = project;
  const progressPercentage = (wordCount / wordGoal) * 100;

  return (
    <Grid container justify="space-between">
      <ProjectStatistic statNum={wordCount} statLabel="total words submitted" />
      <ProjectStatistic statNum={wordGoal} statLabel="total word count goal" />
      <ProjectStatistic statNum={`${progressPercentage}%`} statLabel="progress toward goal" />
    </Grid>
  );
}
