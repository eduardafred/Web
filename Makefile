
all: build run

build:
	@echo "#### $@ ####"
	javac -d bin Main.java
	javac -d bin prova/*.java

run: build
	@echo "#### $@ ####"
	@java -cp bin Main

clear:
	@echo "#### $@ ####"
	rm -r bin/*

git:
	@echo "=== Configuraçõe para Git ==="
	@bash -c ' read -p "Email: " EMAIL; git config --global user.email $$EMAIL '
	@bash -c ' read -p "Nome: "  NOME ; git config --global user.name  $$NOME  '