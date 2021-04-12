package service

import (
	"gin-resume/model"
	"gin-resume/repository"
)

type UserSrv interface {
	Get(user model.User) (*model.User, error)
	Exist(user model.User) *model.User
	ExistByUserId(id string) *model.User
}

type UserService struct {
	Repo repository.UserRepoInterface
}

func (srv *UserService) Get(user model.User) (*model.User, error) {
	return srv.Repo.Get(user)
}
func (srv *UserService) Exist(user model.User) *model.User {
	return srv.Repo.Exist(user)
}

func (srv *UserService) ExistByUserId(id string) *model.User {
	return srv.Repo.ExistByUserId(id)
}