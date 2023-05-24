
class Variables {

    public globalVariables: any[] = [
        'CURDIR',
        'EXECDIR',
        'TEMPDIR',
        'TRUE',
        'FALSE',
        'NONE',
        'NULL',
        'SPACE',
        'EMPTY',
        'SUITE NAME',
        'SUITE SOURCE',
        'SUITE DOCUMENTATION',
        'SUITE METADATA',
        'SUITE STATUS',
        'SUITE MESSAGE',
        'KEYWORD STATUS',
        'KEYWORD MESSAGE',
        'LOG LEVEL',
        'LOG FILE',
        'OUTPUT DIR',
        'OUTPUT FILE',
        'ROBOT_ROOT',
        'ROBOT_ARTIFACTS',
    ]
    public suiteVariables: any[] = []
    public taskVariables: any[] = []

    public getGlobalVariables() {
        return this.globalVariables;
    }

    public getSuiteVariables() {
        return this.suiteVariables;
    }

    public setSuiteVariables(variables: any) {
        this.suiteVariables = variables;
    }

    public getTaskVariables() {
        return this.taskVariables;
    }

    public setTaskVariables(variables: any) {
        this.taskVariables = variables;
    }

    public getVarList() {
        var varList = []
        
        if (this.suiteVariables.length > 0) {
            varList.push({
                text: 'Suite variables',
                disabled: true,
            })
            this.suiteVariables.forEach((item: any) => {
                varList.push({
                    text: item.name,
                    value: item.defaultValue,
                })
            })
        }

        varList.push({
            text: 'Global variables',
            disabled: true,
        })
        this.globalVariables.forEach((item: string) => {
            varList.push({
                text: item,
                value: item,
            })
        })

        return varList
    }

    
}

export { Variables }