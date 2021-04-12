package handler

import (
	"fmt"
	"gin-resume/enum"
	"gin-resume/model"
	"gin-resume/resp"
	"gin-resume/service"
	"github.com/gin-gonic/gin"
	"net/http"
)

type UserHandler struct {
	UserSrv service.UserSrv
}

func(h *UserHandler) GetEntity(result model.User) resp.User{
	return resp.User{
		UserId: result.UserId,
		UserName: result.UserName,
		UserPassword: result.UserPassword,
	}
}

func (h *UserHandler) UserLoginHandler(c *gin.Context) {
	user := model.User{}
	entity := resp.Entity{
		Code:      int(enum.OperateFail),
		Msg:       enum.OperateFail.String(),
		Total:     0,
		Data:      nil,
	}
	err := c.ShouldBind(&user)
	if err != nil {
		c.JSON(http.StatusOK, gin.H{"entity": entity})
		return
	}
	userName := user.UserName
	password := user.UserPassword
	fmt.Println("hello", user)
	if userName == "" {
		c.JSON(http.StatusInternalServerError, gin.H{"entity": entity})
		return
	}
	u := model.User{
		UserName:userName,
		UserPassword:password,
	}
	result := h.UserSrv.Exist(u)
	if result == nil{
		entity = resp.Entity{
			Code:      http.StatusOK,
			Msg:       "failure",
			Total:     0,
			TotalPage: 0,
			Data:      nil,
		}
		c.JSON(http.StatusOK, gin.H{"entity": entity})
		return
	}

	r := h.GetEntity(*result)

	entity = resp.Entity{
		Code:      http.StatusOK,
		Msg:       "success",
		Total:     0,
		TotalPage: 0,
		Data:      r,
	}
	c.JSON(http.StatusOK, gin.H{"entity": entity})
}

func (h *UserHandler) UserInfoHandler(c *gin.Context) {
	entity := resp.Entity{
		Code:      int(enum.OperateFail),
		Msg:       enum.OperateFail.String(),
		Total:     0,
		TotalPage: 1,
		Data:      nil,
	}
	userId := c.Param("id")
	if userId == "" {
		c.JSON(http.StatusInternalServerError, gin.H{"entity": entity})
		return
	}
	u := model.User{
		UserId: userId,
	}
	result, err := h.UserSrv.Get(u)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"entity": entity})
		return
	}

	r := h.GetEntity(*result)

	entity = resp.Entity{
		Code:      http.StatusOK,
		Msg:       "OK",
		Total:     0,
		TotalPage: 0,
		Data:      r,
	}
	c.JSON(http.StatusOK, gin.H{"entity": entity})
}