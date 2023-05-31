# Local Setup for idea-rpa 
Please install :
1. Node.js v16.18.0 (https://nodejs.org/ko/download)
2. npm v7.23.0 (https://www.npmjs.com/get-npm)
3. python at least v3.6 (https://www.python.org/downloads/)

### How to change Node.js with a specific version
1. Check the version with ***node -v*** command in terminal
2. Install NVM (https://github.com/coreybutler/nvm-windows/)
3. Click ***Download Now!***  
4. Click and download ***npm-setup.zip***
5. After installing, check the available node.js version : ***nvm list available*** 
6. Type ***nvm install (verison)***
7. Change the version : ***nvm use (version)***


### How to change npm with a specific version
1. Open terminal and type ***npm install -g npm@(version)***

### Install Pyinstaller
1. ***pip install pyinstaller*** 


# npm 명령어 순서
main branch git clone 후에 :
1. 최상위 폴더에서 npm install
2. 실행할 루트 폴더로 이동해서 npm i vue
3. 설치되었다면 npm i electron
4. 실행 명령어 npm run electron:serve
5. 현재 electron으로 감싸져 있기 때문에 로컬에서 실행되지 않음


# Run python 
1. python -m robot (parameter)
- ex. python -m robot tasks.robot
</br>
