package model

type Resume struct{
	ResumeId string `json:"resumeId" gorm:"column:resume_id"`
	UserId string `json:"userId" gorm:"column:user_id"`
	ResumeBasicName string `json:"resumeBasicName" gorm:"column:resume_basic_name"`
	ResumeBasicAge string `json:"resumeBasicAge" gorm:"column:resume_basic_age"`
	ResumeBasicPhonenumber string `json:"resumeBasicPhonenumber" gorm:"column:resume_basic_phonenumber"`
	ResumeBasicEmail string `json:"resumeBasicEmail" gorm:"column:resume_basic_email"`
	ResumeBasicWorkage string `json:"resumeBasicWorkage" gorm:"column:resume_basic_workage"`
	ResumeBasicImg string `json:"resumeBasicImg" gorm:"column:resume_basic_img"`
	ResumeBasicGender string `json:"resumeBasicGender" gorm:"column:resume_basic_gender"`
	ResumeBasicMarried string `json:"resumeBasicMarried" gorm:"column:resume_basic_married"`
	ResumeIntentionJob string `json:"resumeIntentionJob" gorm:"column:resume_intention_job"`
	ResumeIntentionCity string `json:"resumeIntentionCity" gorm:"column:resume_intention_city"`
	ResumeIntentionSalary string `json:"resumeIntentionSalary" gorm:"column:resume_intention_salary"`
	ResumeIntentionTime string `json:"resumeIntentionTime" gorm:"column:resume_intention_time"`
	ResumeEducationSchool string `json:"resumeEducationSchool" gorm:"column:resume_education_school"`
	ResumeEducationSubject string `json:"resumeEducationSubject" gorm:"column:resume_education_subject"`
	ResumeEducationStart string `json:"resumeEducationStart" gorm:"column:resume_education_start"`
	ResumeEducationEnd string `json:"resumeEducationEnd" gorm:"column:resume_education_end"`
	ResumeEducationDegree string `json:"resumeEducationDegree" gorm:"column:resume_education_degree"`
	ResumeEducationDescription string `json:"resumeEducationDescription" gorm:"column:resume_education_description"`
	ResumeProjectName string `json:"resumeProjectName" gorm:"column:resume_project_name"`
	ResumeProjectRole string `json:"resumeProjectRole" gorm:"column:resume_project_role"`
	ResumeProjectStart string `json:"resumeProjectStart" gorm:"column:resume_project_start"`
	ResumeProjectEnd string `json:"resumeProjectEnd" gorm:"column:resume_project_end"`
	ResumeProjectDescription string `json:"resumeProjectDescription" gorm:"column:resume_project_description"`

	ResumeWorkCompany string `json:"resumeWorkCompany" gorm:"column:resume_work_company"`
	ResumeWorkRole string `json:"resumeWorkRole" gorm:"column:resume_work_role"`
	ResumeWorkStart string `json:"resumeWorkStart" gorm:"column:resume_work_start"`
	ResumeWorkEnd string `json:"resumeWorkEnd" gorm:"column:resume_work_end"`
	ResumeWorkDescription string `json:"resumeWorkDescription" gorm:"column:resume_work_description"`

	ResumeInternCompany string `json:"resumeInternCompany" gorm:"column:resume_intern_company"`
	ResumeInternRole string `json:"resumeInternRole" gorm:"column:resume_intern_role"`
	ResumeInternStart string `json:"resumeInternStart" gorm:"column:resume_intern_start"`
	ResumeInternEnd string `json:"resumeInternEnd" gorm:"column:resume_intern_end"`
	ResumeInternDescription string `json:"resumeInternDescription" gorm:"column:resume_intern_description"`

	ResumeCampusName string `json:"resumeCampusName" gorm:"column:resume_campus_name"`
	ResumeCampusRole string `json:"resumeCampusRole" gorm:"column:resume_campus_role"`
	ResumeCampusStart string `json:"resumeCampusStart" gorm:"column:resume_campus_start"`
	ResumeCampusEnd string `json:"resumeCampusEnd" gorm:"column:resume_campus_end"`
	ResumeCampusDescription string `json:"resumeCampusDescription" gorm:"column:resume_campus_description"`

	ResumeSkillDescription string `json:"resumeSkillDescription" gorm:"column:resume_skill_description"`

	ResumeHonourDescription string `json:"resumeHonourDescription" gorm:"column:resume_honour_description"`

	ResumeEvaluationDescription string `json:"resumeEvaluationDescription" gorm:"column:resume_evaluation_description"`

}
