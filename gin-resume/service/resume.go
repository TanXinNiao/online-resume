package service

import(
	"gin-resume/model"
	"gin-resume/repository"
)

type ResumeSrv interface {
	Edit(resumeId string, key string, value string) (bool, error)
	GetById(resumeId string) *model.Resume
}

type ResumeService struct {
	Repo repository.ResumeRepoInterface
}

func(srv *ResumeService) Edit(resumeId string, key string, value string) (bool, error){
	return srv.Repo.Edit(resumeId , key , value)
}

func(srv *ResumeService) GetById(resumeId string) *model.Resume{
	return srv.Repo.GetById(resumeId)
}
