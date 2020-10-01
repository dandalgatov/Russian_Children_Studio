import React from 'react'
import {withRouter} from 'react-router';


import ClassesAccordion from '../../components/classesAccordion'

function ChildrenLearningCenter() {
    return (
        <div style={{paddingTop: '12px'}}>
            <ClassesAccordion/>

        </div>
    )
}
export default withRouter(ChildrenLearningCenter)