package handler

import (
	"fmt"
	"gin-resume/enum"
	"gin-resume/resp"
	"gin-resume/service"
	"github.com/gin-gonic/gin"
	"net/http"
)

type ResumeHandler struct {
	ResumeSrv service.ResumeSrv
}

type ResumeInput struct {
	ResumeId     string `form:"resumeId" json:"resumeId" binding:"required"`
	Key string `form:"key" json:"key" binding:"required"`
	Value string `form:"value" json:"value" binding:"required"`
}

func(h *ResumeHandler) ResumeEditHandler(c *gin.Context){
	entity := resp.Entity{
		Code:      int(enum.OperateFail),
		Msg:       "failure",
		Total:     0,
		Data:      nil,
	}
	var json ResumeInput //注意该结构接受的内容
	err := c.ShouldBind(&json)
	if err!=nil {
		return
	}
	resumeId:= json.ResumeId
	key := json.Key
	value := json.Value

	fmt.Println(json)

	flag, err := h.ResumeSrv.Edit(resumeId, key, value)
	if err!=nil {
		c.JSON(http.StatusOK, gin.H{"entity": entity})
		return
	}
	if flag {
		entity = resp.Entity{
			Code:      200,
			Msg:       "success",
			Total:     0,
			Data:      nil,
		}
		c.JSON(http.StatusOK, gin.H{"entity": entity})
		return
	}
	c.JSON(http.StatusOK, gin.H{"entity": entity})
	return
}

func(h *ResumeHandler) GetById(c *gin.Context){
	entity := resp.Entity{
		Code:      int(enum.OperateFail),
		Msg:       "failure",
		Total:     0,
		Data:      nil,
	}
	resumeId:= c.Param("resume_id")

	result := h.ResumeSrv.GetById(resumeId)
	if result != nil {
		entity = resp.Entity{
			Code:      200,
			Msg:       "success",
			Total:     0,
			Data:      result,
		}
		c.JSON(http.StatusOK, gin.H{"entity": entity})
		return
	}
	c.JSON(http.StatusOK, gin.H{"entity": entity})
	return
}

