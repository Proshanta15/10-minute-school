
import { Route, Switch } from "react-router-dom";
import Study from './components/study/Study';
import Skill from './components/skill/Skill';
import HomePage from "./components/landing/HomePage";
import Navbar from "./components/landing/Navbar";
import StudyVideoPage from "./components/study/StudyVideoPage";
import Admission from "./components/admission/Admission";
import SkillCourseDetails from "./components/skill/SkillCourseDetails";
import SscHscCrash from "./components/crashCourse/SscHscCrash";
import AdmissionDetails from "./components/admission/AdmissionDetails";
import Book from "./components/books/Book";
import BookMore from "./components/books/BookMore";
import BookAcademic from "./components/books/BookAcademic";
import BookCreative from "./components/books/BookCreative";
import BookDetails from "./components/books/BookDetails";
import Privacy from "./components/Privacy";


const App = () => {
  return (
    <>
      <Navbar />
       
 
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/study" component={Study}/>
          <Route exact path="/skill" component={Skill}/>
          <Route exact path="/book" component={Book}/>
          <Route exact path="/bookMore" component={BookMore}/>
          <Route exact path="/bookDetails" component={BookDetails}/>
          <Route exact path="/bookMoreAcademic" component={BookAcademic}/>
          <Route exact path="/bookMoreCreative" component={BookCreative}/>
          <Route exact path="/studyVideo" component={StudyVideoPage}/>
          <Route exact path="/admission" component={Admission}/>
          <Route exact path="/skillDetails" component={SkillCourseDetails}/>
          <Route exact path="/crashCourse" component={SscHscCrash}/>
          <Route exact path="/admissionDetails" component={AdmissionDetails}/>
          <Route exact path="/privacy" component={Privacy}/>

      </Switch>



       
        
            
     
    </>
  );
}

export default App;
