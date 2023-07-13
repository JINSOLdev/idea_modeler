*** Settings ***


*** Tasks ***
TEST_0713
	${value}=	Call Method	Name=
	${result}=	Convert To Octal	base=None	prefix=None	length=None
	${result}=	Convert To Boolean
	${result}=	Convert To Octal	base=None	prefix=None	length=None
	${result}=	Convert To Integer	base=None


