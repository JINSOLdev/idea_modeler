*** Settings ***
Library	RPA.Windows


*** Variables ***
${keys}	Hello world
&{ggmail}	Get Text=gmail
${Name}	새 탭


*** Tasks ***
windows
	Windows Run	notepad.exe
	Set Global Timeout	1
	Send Keys	keys=${keys}
	${element}=	Get Element	텍스트 편집
	Maximize Window	*제목 없음 - Windows 메모장
	Minimize Window	*제목 없음 - Windows 메모장
	Restore Window	*제목 없음 - Windows 메모장
	Foreground Window	*제목 없음 - Windows 메모장
	Control Window	*제목 없음 - Windows 메모장
	Close Current Window
	Windows Run	CHROME
	Print Tree	Google 검색 또는 URL 입력
	${undefined}=	Get Attribute	Google 검색 또는 URL 입력	Name
	${version}=	Get Os Version
	${VALUE}=	Get Value	Google 검색 또는 URL 입력
	${text}=	Get Text	Google 검색 또는 URL 입력
	${windows}=	List Windows
	${attributes}=	List Attributes	Google 검색 또는 URL 입력
	Select	Google 검색 또는 URL 입력	Google 검색 또는 URL 입력
	Click	Google 검색 또는 URL 입력
	Right Click	Google 검색 또는 URL 입력
	Clear Anchor
	Windows Search	calc
	Set Anchor	계산기
	Screenshot	1.jpg	계산기
	Control Child Window	계산기
	Close Window	계산기


