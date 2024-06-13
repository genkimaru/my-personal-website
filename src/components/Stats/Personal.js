import React from 'react';
import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <h3>关于我的信息</h3>
    <Table data={data} />
  </>
);

export default PersonalStats;
