<template>
    <div>
        <v-btn text color="primary" @click="executePython()">
            <v-icon>mdi-script-text</v-icon>
            execute
            </v-btn>
        <v-btn text color="red" @click="recordPython">
            <v-icon>mdi-record</v-icon>
            record
        </v-btn>
    </div>

</template>
<script lang="ts">
    
    import { Vue, Component, Prop } from "vue-property-decorator";
    const { execFile, spawn } = require('child_process');
    const { ipcRenderer } = require('electron')
    import {decode} from "iconv-lite";
    import { Robot, Task } from "../../../../../types/Task";

    @Component
    export default class ExecutePython extends Vue {

        @Prop() public task!: any

        // mounted(){
        //     this.executePython()
        // }

        async recordPython () {
            // execFile()
            // const cmd = cp.spawn('cmd');
            // const result = await ipcRenderer.invoke("python-record");
            let me = this;
            const pythonChild = execFile('./public/static/main.exe', ["--mode", "record"], {encoding: "euc-kr"});
            // const pythonChild = execFile('./public/static/main.exe', ['from RPA.Browser.Selenium import Selenium\r\n\r\nbrowser_lib = Selenium()\r\n\r\n\r\ndef open_the_website(url):\r\n    browser_lib.open_available_browser(url)\r\n\r\n\r\ndef search_for(term):\r\n    input_field = \"css:input\"\r\n    browser_lib.input_text(input_field, term)\r\n    browser_lib.press_keys(input_field, \"ENTER\")\r\n\r\n\r\ndef store_screenshot(filename):\r\n    browser_lib.screenshot(filename=filename)\r\n\r\n\r\n# Define a main() function that calls the other functions in order:\r\ndef main():\r\n    try:\r\n        open_the_website(\"https:\/\/robocorp.com\/docs\/\")\r\n        search_for(\"python\")\r\n        store_screenshot(\"output\/screenshot.png\")\r\n    finally:\r\n        browser_lib.close_all_browsers()\r\n\r\n\r\n# Call the main() function, checking that we are running as a stand-alone script:\r\nif __name__ == \"__main__\":\r\n    main()'])
                pythonChild.stdout?.on("data", function (data: any) {
                    let result = decode(data,"euc-kr")
                    let tmp = result.split("--------------------------------------------------------------------------------")
                    const resultData = tmp[2]
                    console.log(resultData)
                    let tmpArray = resultData.split('\n')
                    let resultArray: string[] = []
                    tmpArray.forEach(function(keyword) {
                        if(keyword.trim().length > 0) {
                            resultArray.push(keyword)
                        }
                    })
                    me.$emit('record', resultArray)
                });
                pythonChild.stderr?.on("data", (data: any) => {
                    console.error(`stderr: ${data}`);
                    console.log(`stderr: ${data}`);
                });
                pythonChild.on("close", (code: any) => {
                    console.log(`child process exited with code ${code}`);
            });
        }

        executePython() {
            // console.log(this.task.toRobot(0))
            // const pythonChild = execFile('./public/static/main.exe', ["--mode", "execute", "--script", "*** Settings ***\r\nLibrary     RPA.Browser.Selenium\r\nLibrary     RPA.Excel.Files\r\nLibrary     RPA.HTTP\r\n\r\n\r\n*** Tasks ***\r\nSolve The Challenge\r\n    [Documentation]    Solve the first challenge at rpachallenge.com, which\r\n    ...    consists of filling a form that randomly rearranges itself,\r\n    ...    with data taken from a provided Microsoft Excel file.\r\n    Open Available Browser    http:\/\/rpachallenge.com\/\r\n    Download    http:\/\/rpachallenge.com\/assets\/downloadFiles\/challenge.xlsx    overwrite=${TRUE}\r\n    Click Button    Start\r\n    ${people}=    Read People From Excel File\r\n    FOR    ${person}    IN    @{people}\r\n        Fill And Submit Form    ${person}\r\n    END\r\n    Capture Element Screenshot    alias:Congratulations\r\n    Sleep    2 seconds\r\n    [Teardown]    Close All Browsers\r\n\r\n\r\n*** Keywords ***\r\nRead People From Excel File\r\n    Open Workbook    challenge.xlsx\r\n    ${table}=    Read Worksheet As Table    header=${TRUE}\r\n    Close Workbook\r\n    RETURN    ${table}\r\n\r\nFill And Submit Form\r\n    [Arguments]    ${person}\r\n    Input Text    alias:First Name    ${person}[First Name]\r\n    Input Text    alias:Last Name    ${person}[Last Name]\r\n    Input Text    alias:Company Name    ${person}[Company Name]\r\n    Input Text    alias:Role in Company    ${person}[Role in Company]\r\n    Input Text    alias:Address    ${person}[Address]\r\n    Input Text    alias:Email    ${person}[Email]\r\n    Input Text    alias:Phone Number    ${person}[Phone Number]\r\n    Click Button    Submit\r\n"], {encoding: "euc-kr"});
            const pythonChild = execFile('./public/static/main.exe', ["--mode", "execute", "--script", this.task.toRobot(0)], {encoding: "euc-kr"});
            pythonChild.stdout?.on("data", function (data: any) {
                    let result = decode(data,"euc-kr")
                    console.log(result)
                });
                pythonChild.stderr?.on("data", (data: any) => {
                    console.error(`stderr: ${data}`);
                    console.log(`stderr: ${data}`);
                });
                pythonChild.on("close", (code: any) => {
                    console.log(`child process exited with code ${code}`);
            });
        }
            
    }
</script>