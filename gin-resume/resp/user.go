package resp

type User struct{
	UserId string `json:"userId" gorm:"column:user_id"`
	UserName string `json:"userName" gorm:"column:user_name"`
	UserPassword string `json:"userPassword" gorm:"column:user_password"`
}

