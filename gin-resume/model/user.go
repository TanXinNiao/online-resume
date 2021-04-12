package model

type User struct{
	UserId string `form:"userId" json:"userId" gorm:"column:user_id"`
	UserName string `form:"userName" json:"userName" gorm:"column:user_name"`
	UserPassword string `form:"userPassword" json:"userPassword" gorm:"column:user_password"`
}
