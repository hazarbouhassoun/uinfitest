import React from 'react';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';
import Bikes from '../bikes/page';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Bikes/>
    </Layout>
  );
};

export default Dashboard;