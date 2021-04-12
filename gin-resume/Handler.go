package main
import (
	"fmt"
	"gin-resume/model"
	"gin-resume/repository"
	"gin-resume/service"
	"log"

	"gin-resume/config"
	"gin-resume/handler"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/spf13/viper"
)

var (
	DB              *gorm.DB
	UserHandler     handler.UserHandler
	ResumeHandler   handler.ResumeHandler
)

func initViper() {
	if err := config.Init(""); err != nil {
		panic(err)
	}
}

func initDB() {
	fmt.Println("数据库 init")
	var err error
	conf := &model.DBConf{
		Host:     viper.GetString("database.host"),
		User:     viper.GetString("database.username"),
		Password: viper.GetString("database.password"),
		DbName:   viper.GetString("database.name"),
	}

	config := fmt.Sprintf("%s:%s@tcp(%s)/%s?parseTime=true&charset=utf8&parseTime=%t&loc=%s",
		conf.User,
		conf.Password,
		conf.Host,
		conf.DbName,
		true,
		"Local")

	DB, err = gorm.Open("mysql", config)
	if err != nil {
		log.Fatalf("connect error: %v\n", err)
	}
	DB.SingularTable(true)
	fmt.Println("数据库 init 结束...")
}

func initHandler() {

	UserHandler = handler.UserHandler{
		UserSrv: &service.UserService{
			Repo: &repository.UserRepository{
				DB: DB,
			},
		}}

	ResumeHandler = handler.ResumeHandler{
		ResumeSrv: &service.ResumeService{
			Repo: &repository.ResumeRepository{
				DB: DB,
			},
		}}
}

func init() {
	initViper()
	initDB()
	initHandler()
}
