import React from 'react'
import CourseSurveyReportTable from "./CourseSurveyReportTable"
import MainHead from '../MainHead'

const CourseSurveyMain = () => {
  return (
    <div>
        <MainHead topic="Course Survey Reports"/>
        <CourseSurveyReportTable/>
    </div>
  )
}

export default CourseSurveyMain