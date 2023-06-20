import { Education } from "../components/EducationCard";

type WorkExperience = {
    name: String,
    designation: String,
    fromDate: String,
    toDate: String,
    accomplishments: [String]
  };
  
  type RatingModel = {
      name: String,
      rating: number
  }
  
  type Skills = {
      languages: Array<RatingModel>,
      uiFrameworks: Array<RatingModel>,
      database: Array<RatingModel>,
      arch: Array<RatingModel>,
      tools: Array<RatingModel>,
      analyticTools: Array<RatingModel>,
      versionControl: Array<RatingModel>,
      otherLibs: Array<RatingModel>,
      otherSkills: Array<RatingModel>
  }
  
  type ResumeData = {
    summary: Array<string>,
    workExperience: Array<WorkExperience>,
    skills: Skills,
    education: Array<Education>,
    interests: Array<RatingModel>
  }

  export type { ResumeData, Skills, RatingModel, Education, WorkExperience} ;