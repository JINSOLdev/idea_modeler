*** Settings ***


*** Variables ***
@{ROBOT}	Bender	Johnny5	Terminator	Robocorp


*** Tasks ***
CONTINUE_modify
	FOR	${robot}	IN	@{ROBOT}	
		IF	$robot == 'Terminator'
			CONTINUE
			Log	${robot}
		END
	END


