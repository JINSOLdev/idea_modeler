*** Settings ***
Library	RPA.Windows


*** Variables ***
${SONE_NAME}	Monody


*** Tasks ***
DESKTOP_SPOTIFY
	Windows Search	Spotify
	Sleep	3s
	Send Keys	keys={CTRL}l
	Send Keys	keys=${SONE_NAME}
	Sleep	3s
	Send Keys	keys={ENTER}{TAB}{ENTER}
	Sleep	3s
	Send Keys	keys={ENTER}


