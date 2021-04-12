package repository

import (
	"gin-resume/model"
	"github.com/jinzhu/gorm"
)

type UserRepository struct{
	DB *gorm.DB
}

type UserRepoInterface interface {
	Get(user model.User) (*model.User, error)
	Exist(user model.User) *model.User
	ExistByUserId(id string) *model.User
}

func (repo *UserRepository)ExistByUserId(id string) *model.User{
	var user model.User
	repo.DB.Where("user_id = ?", id).First(&user)
	return &user
}

func (repo *UserRepository) Get(user model.User) (*model.User, error) {
	if err := repo.DB.Where(&user).Find(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (repo *UserRepository) Exist(user model.User) *model.User {
	var respUser[] model.User
	repo.DB.Where("user_name = ? and user_password = ?", user.UserName, user.UserPassword).Find(&respUser)
	if len(respUser)>0{
		return &respUser[0]
	}
	return nil
}
