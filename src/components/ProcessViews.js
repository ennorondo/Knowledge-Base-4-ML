import React from "react"
import ScrollButton from "./features/Scrollbutton"
import UpArrow from "./icons/UpArrow.png"
import ToolButton from "./features/ToolButton"
import BestPracticesButton from "./features/BestPracticesButton"
import AntipatternsButton from "./features/AntipatternsButton"

//for Glossary Tables
import Table from './features/Table';
import buData from './data/BUTable'
import duData from "./data/DUTable"
import dpData from "./data/DPTable"
import modelingData from "./data/ModelingTable"
import evaluationData from "./data/EvaluationData"
import deploymentData from "./data/DeploymentData"

import './features/Table.css'


function ProcessView(props) {

  return (
    <div className={props.classname}>
      <div>
        <h1 className="title-process" id={props.id}>
          {props.title}
        </h1>
      </div>
      <h1 className="section-header">Related Processes:</h1>
      <div className="shortcut-overview">
        <ScrollButton         
          name={props.name}
          targetId={props.targetId}
        />
        <img src={UpArrow} alt="UpArrow" className="right-arrow-icon" />
        <ScrollButton         
          name={props.name2}
          targetId={props.targetId2}
        />
        <img src={UpArrow} alt="UpArrow" className="right-arrow-icon" />
        <ScrollButton         
          name={props.name3}
          targetId={props.targetId3}
        />
      </div>
      <h1 className="section-header">Description:</h1>
      <div>
        <p className="process-text">
          {props.text}
        </p>
      </div>
      <div className="process-menu-btns">
        <ToolButton />
        <BestPracticesButton />
        <AntipatternsButton />
      </div>
      <h1 className="section-header">Process Glossary:</h1>
    </div>
  )
}

export default function AllProcessViews() {
  return (
    <div>
      <ProcessView classname="bu-container" 

        id="scrollTarget-BU"

        title="Business Understanding"

        name="Evaluation"
        targetId="scrollTarget-E"

        name2="Business Understanding"
        targetId2="scrollTarget-BU"

        name3="Data Understanding"
        targetId3="scrollTarget-DU"

        text="The initial step involves gaining a clearer understanding of the business needs that must be derived from data.
        To accomplish this, the analyst must grasp the true objectives of the customer from a business perspective.   
        This is crucial because without a deep understanding of the customer's goals, it's challenging to deliver valuable insights.        
        Frequently, the customer has various competing goals and constraints that require careful coordination.        
        Balancing these conflicting priorities is often one of the first challenges in the data analysis process.
        In addition, the phase of comprehending the business entails outlining the precise objectives and prerequisites for data mining.
        This step sets the foundation for the entire project.
        The outcome of this phase is the formulation of the task and a rough outline of the procedure needed to achieve both business and data mining objectives.
        This early planning is like charting a course for a journey, helping to ensure that you're headed in the right direction.
        This also encompasses the preliminary selection of tools and techniques.
        Choosing the right tools and methods at this stage can significantly impact the project's efficiency and effectiveness.
        Furthermore, in this phase, you establish the criteria for business success that will be used to evaluate the project's success from a business standpoint.
        Defining success criteria is essential for setting clear expectations and measuring progress.
        The outputs of this stage include important reports.
        These reports serve as a communication tool, helping stakeholders understand the project's objectives and progress.
        Within this step, you compile an inventory of resources, which encompasses all the resources available for the project.
        Identifying and organizing resources is fundamental to project management.
        These resources may encompass individuals (not only data analysts but also those possessing expertise in the business problem, data managers, technical support, and others), data, hardware, and software.
        Effective resource management ensures that the project runs smoothly.
        You document requirements, assumptions, and constraints, where requirements might encompass a project completion schedule, legal and security obligations, and criteria for acceptable final work.
        Clear documentation helps prevent misunderstandings and missteps down the road.
        Additionally, you identify potential causes for project delays and develop contingency plans for each of them.
        Anticipating and planning for potential roadblocks is a hallmark of successful project management.
        A crucial component is establishing a shared understanding of terminology.
        You can create a glossary containing definitions of business and data mining terms relevant to your project to ensure that everyone involved has a common understanding of these terms.
        This common language is essential for effective collaboration and problem-solving.
        Furthermore, you prepare a cost-benefit analysis.
        Understanding the potential return on investment is essential for decision-makers.
        If the benefits do not significantly outweigh the costs, it is advisable to pause and reevaluate both the analysis and the project.
        Subsequently, you also define the criteria for data mining success, which consist of technical standards required to support the business success criteria.
        These criteria should ideally be defined quantitatively, such as model accuracy or predictive improvements compared to existing methods.
        These technical criteria provide a concrete basis for assessing the project's performance and impact on the business."
      />
      <div className='table-container'>
        <Table data={buData} />
      </div>
      <ProcessView classname="du-container"

        id="scrollTarget-DU"

        title="Data Understanding"

        name="Business Understanding"
        targetId="scrollTarget-BU"

        name2="Data Understanding"
        targetId2="scrollTarget-DU"

        name3="Data Preparation"
        targetId3="scrollTarget-DP"

        text="During the data understanding phase, the primary objective is to gain an initial understanding of the available data and assess their quality.
        This entails verifying the availability of all necessary data to meet the Data Mining objectives and devising a plan to determine the missing data.
        Initially, you provide a description of the acquired data, including its format, quantity (e.g., record and field counts in each table), field identities, and any observed surface-level characteristics. This involves evaluating whether the acquired data align with your requirements.
        If some desired data is missing, decisions must be made on how to address this issue. Possible approaches include substituting with alternative data sources, narrowing the project scope, or collecting new data.
        Importing the data into the chosen data-mining platform is essential to confirm feasibility and understanding of the process. During this trial, potential software or hardware limitations, such as case or memory constraints and compatibility issues with data formats, may surface unexpectedly.
        Subsequently, data exploration commences using querying, data visualization, and reporting techniques. This may involve investigating attribute distributions, performing basic aggregations, and conducting simple statistical analyses.
        To preempt potential issues, an analysis of data quality is conducted. This phase aims to identify problems with the quality of existing data in relation to the task defined in the previous phase.
        Key questions arise in this phase:
        Is the data complete, covering all necessary cases?
        Is the data correct, or does it contain errors, and if so, how widespread are these errors?
        Are there missing values within the data?
        This assessment is crucial for ensuring the reliability and suitability of the data for subsequent analysis and modeling."
      />
      <div className='table-container'>
        <Table data={duData} />
      </div>
      <ProcessView classname="dp-container"

        id="scrollTarget-DP"

        title="Data Preparation"

        name="Data Understanding"
        targetId="scrollTarget-DU"

        name2="Data Preparation"
        targetId2="scrollTarget-DP"

        name3="Modeling"
        targetId3="scrollTarget-M"

        text="In this phase, the focus is on getting the data ready for the subsequent data mining process. Data preparation stands out as one of the most critical and often time-consuming aspects of data mining. In fact, it's estimated that data preparation typically consumes 50-70% of the time and effort in a project.
        Business decisions heavily rely on analytics. However, if the data is inaccurate or incomplete, it can lead to incorrect business decisions. Poor analytics, in turn, results in suboptimal business choices.
        Hence, data from various sources undergoes merging and cleanup to eliminate any duplicate, erroneous, or incomplete entries. Actions are taken, such as tracking down the sources to make specific data corrections, excluding certain cases, or replacing some data items with default values.
        The deliverable for this phase is the data-cleaning report, which meticulously documents every decision and action taken during the data cleaning process. This report should encompass and reference each data quality issue identified during the data understanding phase.
        The subsequent step involves preparing the data's content, which entails transforming the data into usable formats. This might involve adding derived attributes, which are new attributes constructed from one or more existing attributes within the same record, aggregating data, or introducing entirely new attributes.
        Furthermore, it is imperative to define selection criteria. This encompasses selecting specific attributes (columns) as well as determining which records (rows) to include in a table. The criteria used to make these decisions encompass the relevance of the data to your data mining objectives, the data's quality, and technical constraints, such as limitations on data volume or data types.
        The data preparation phase serves the purpose of creating a final data set that will serve as the foundation for the subsequent modeling phase."
      />
      <div className='table-container'>
        <Table data={dpData} />
      </div>
      <ProcessView classname="modeling-container"

        id="scrollTarget-M"

        title="Modeling"

        name="Data Preparation"
        targetId="scrollTarget-DP"

        name2="Modeling"
        targetId2="scrollTarget-M"

        name3="Evaluation"
        targetId3="scrollTarget-E"

        text="Modeling serves as the analytical heart of the data mining process, where the selection and application of modeling techniques come into play.
        Prior to constructing an actual model, it's customary to divide the dataset into distinct train, test, and validation sets. This separation facilitates robust model development and assessment.
        Subsequently, the models are constructed using the train set as a foundation. It's important to note that various modeling techniques may assume specific characteristics of the data, such as uniform attribute distributions or the absence of missing values. Moreover, many modeling tools offer a multitude of adjustable parameters. Therefore, it's essential to document any assumptions made and to list the parameters along with their selected values.
        The models derived undergo a technical evaluation phase, during which their accuracy and generality are thoroughly assessed. This evaluation entails applying the discovered rules to test data records that were not utilized during the model-building process. Consequently, you compile a comprehensive list of the qualities exhibited by your generated models, often measured in terms of accuracy, and rank their quality relative to one another.
        The modeling process typically involves iterative steps aimed at gradually approaching the final model. At this stage, only marginal improvements can be expected from a data analytical perspective. It's about fine-tuning and refining the model to achieve optimal results."
      />
      <div className='table-container'>
        <Table data={modelingData} />
      </div>
      <ProcessView classname="evaluation-container"
      
        id="scrollTarget-E"

        title="Evaluation"

        name="Modeling"
        targetId="scrollTarget-M"

        name2="Evaluation"
        targetId2="scrollTarget-E"

        name3="Deployment"
        targetId3="scrollTarget-D"

        text="The evaluation phase plays a critical role in precisely comparing the generated data models against the project's objectives and selecting the most appropriate model.
        To achieve this, the outcomes of preceding steps are rigorously assessed, taking into account the business criteria established at the project's outset. Essentially, this phase focuses on determining whether the data mining solution effectively addresses the business problem and investigates any potential business-related shortcomings in a model.
        Additionally, another approach is to test the model(s) in real-world applications, assessing their performance in the workplace to ensure they function as effectively as indicated in your tests, provided time and budget constraints allow for this.
        This juncture also offers an opportunity for process review. It's a chance to identify any overlooked issues or potential flaws in the work completed thus far, allowing for corrective action before deployment.
        Finally, the model may be deemed ready for deployment, or it may be judged more beneficial to revisit certain steps and make further refinements in an effort to enhance its performance.
        "
      />
      <div className='table-container'>
        <Table data={evaluationData} />
      </div>
      <ProcessView classname="deployment-container"

        id="scrollTarget-D"

        title="Deployment"

        name="Evaluation"
        targetId="scrollTarget-E"

        name2="Deployment"
        targetId2="scrollTarget-D"
        
        name3="Finished!"
        targetId3="scrollTarget-BU"

        text="Following data preparation, model building, and model verification, the selected model enters the deployment phase.
        However, it's crucial to understand that generating a model doesn't typically mark the end of the project. Even if the initial goal was to gain a deeper understanding of the data, the knowledge acquired needs to be processed and presented to the customer in a usable manner.
        The nature of this development phase can vary significantly based on requirements. It could involve creating a simple report or implementing a sophisticated, repeatable data mining process company-wide.
        Effective preparation of a maintenance strategy is essential to prevent extended periods of incorrect usage of data mining results. To monitor the deployment of data mining results, a project requires a detailed monitoring process plan tailored to the specific deployment type.
        Lastly, it's advisable for the data mining team to conduct a comprehensive review of their work. This is an opportunity to outline successful work methods for future reference, document any process improvements, and identify and address problems or challenges encountered during the project, along with recommendations to avoid similar issues in the future.
        "

      />
      <div className='last-table-container'>
        <Table data={deploymentData} />
      </div>
    </div>
  )
}