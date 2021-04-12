package config

import (
	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
	"log"
)

const PAGE_SIZE int = 10

type Config struct {
	Name string
}

func(c *Config) initConfig() error{
	if c.Name!="" {
		viper.SetConfigFile(c.Name)
	}else{
		viper.AddConfigPath("conf")
		viper.SetConfigName("config")
	}
	viper.SetConfigType("yaml")
	if err:=viper.ReadInConfig();err!=nil {
		return err
	}
	return nil
}

func(c* Config) watchConfig(){
	viper.WatchConfig()
	viper.OnConfigChange(func(in fsnotify.Event){
		log.Printf(("Config File is Change"))
	})
}

func Init(name string) error{
	c:=Config{Name: name}
	if err:=c.initConfig();err!=nil{
		return err
	}
	c.watchConfig()
	return nil
}