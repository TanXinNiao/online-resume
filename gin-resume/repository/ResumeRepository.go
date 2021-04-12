package repository

import (
	"gin-resume/model"
	"github.com/jinzhu/gorm"
)

type ResumeRepository struct{
	DB *gorm.DB
}

type ResumeRepoInterface interface {
	Edit(resumeId string, key string, value string) (bool, error)
	GetById(resumeId string) *model.Resume
}


func (repo *ResumeRepository) Edit(resumeId string, key string, value string) (bool, error) {
	var respResume model.Resume
	err := repo.DB.Model(&respResume).Where("resume_id = ?", resumeId).Updates(map[string]interface{}{
		key: value}).Error
	//err := repo.DB.Save(&user).Error
	if err != nil {
		return false, err
	}
	return true, nil
}

func(repo *ResumeRepository) GetById(resumeId string) *model.Resume{
	var respResume[] model.Resume
	repo.DB.Where("resume_id = ?", resumeId).Find(&respResume)
	if len(respResume)>0{
		return &respResume[0]
	}
	return nil
}