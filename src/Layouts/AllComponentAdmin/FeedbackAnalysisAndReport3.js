import React from 'react'
import ReportCard from '../../components/AdministratorComponents/ReportCard'
import MainHead from '../../components/AdministratorComponents/MainHead';
import TrendsTable from '../../components/AdministratorComponents/TrendsTable';
import AnonymousCard from '../../components/AdministratorComponents/AnonymousCard';

const FeedbackAnalysisAndReport3 = () => {
  return (
    <div>
      <MainHead topic="Feedback Analysis And Report"/>
      <ReportCard />
      <TrendsTable/>
      <AnonymousCard/>
    </div>
  );
}

export default FeedbackAnalysisAndReport3