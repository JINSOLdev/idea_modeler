*** Settings ***
*** Variables ***

*** Tasks ****
New Task
	Append Rows To Worksheet		header=${true}		formattingAsEmpty=${true}		content=${CURDIR}		name=${TEMPDIR}		start=${SUITE DOCUMENTATION}
END

*** Keywords ****

