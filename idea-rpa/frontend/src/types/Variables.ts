
class Variables {

    public globalVariables: any[] = [
        {
            name: 'CURDIR',
            valueType: 'Scalar',
            defaultValue: 'CURDIR',
        },
        {
            name: 'EXECDIR',
            valueType: 'Scalar',
            defaultValue: 'EXECDIR',
        },
        {
            name: 'TEMPDIR',
            valueType: 'Scalar',
            defaultValue: 'TEMPDIR',
        },
        {
            name: 'TRUE',
            valueType: 'Scalar',
            defaultValue: 'TRUE',
        },
        {
            name: 'FALSE',
            valueType: 'Scalar',
            defaultValue: 'FALSE',
        },
        {
            name: 'NONE',
            valueType: 'Scalar',
            defaultValue: 'NONE',
        },
        {
            name: 'NULL',
            valueType: 'Scalar',
            defaultValue: 'NULL',
        },
        {
            name: 'SPACE',
            valueType: 'Scalar',
            defaultValue: 'SPACE',
        },
        {
            name: 'EMPTY',
            valueType: 'Scalar',
            defaultValue: 'EMPTY',
        },
        {
            name: 'SUITE NAME',
            valueType: 'Scalar',
            defaultValue: 'SUITE NAME',
        },
        {
            name: 'SUITE SOURCE',
            valueType: 'Scalar',
            defaultValue: 'SUITE SOURCE',
        },
        {
            name: 'SUITE DOCUMENTATION',
            valueType: 'Scalar',
            defaultValue: 'SUITE DOCUMENTATION',
        },
        {
            name: 'SUITE METADATA',
            valueType: 'Scalar',
            defaultValue: 'SUITE METADATA',
        },
        {
            name: 'SUITE STATUS',
            valueType: 'Scalar',
            defaultValue: 'SUITE STATUS',
        },
        {
            name: 'SUITE MESSAGE',
            valueType: 'Scalar',
            defaultValue: 'SUITE MESSAGE',
        },
        {
            name: 'KEYWORD STATUS',
            valueType: 'Scalar',
            defaultValue: 'KEYWORD STATUS',
        },
        {
            name: 'KEYWORD MESSAGE',
            valueType: 'Scalar',
            defaultValue: 'KEYWORD MESSAGE',
        },
        {
            name: 'LOG LEVEL',
            valueType: 'Scalar',
            defaultValue: 'LOG LEVEL',
        },
        {
            name: 'LOG FILE',
            valueType: 'Scalar',
            defaultValue: 'LOG FILE',
        },
        {
            name: 'OUTPUT DIR',
            valueType: 'Scalar',
            defaultValue: 'OUTPUT DIR',
        },
        {
            name: 'OUTPUT FILE',
            valueType: 'Scalar',
            defaultValue: 'OUTPUT FILE',
        },
        {
            name: 'ROBOT_ROOT',
            valueType: 'Environment',
            defaultValue: 'ROBOT_ROOT',
        },
        {
            name: 'ROBOT_ARTIFACTS',
            valueType: 'Environment',
            defaultValue: 'ROBOT_ARTIFACTS',
        },
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
                    type: item.valueType,
                    value: item.defaultValue,
                })
            })
        }

        if (this.taskVariables.length > 0) {
            varList.push({
                text: 'Task variables',
                disabled: true,
            })
            this.taskVariables.forEach((item: any) => {
                varList.push({
                    text: item.name,
                    type: item.valueType,
                    value: item.defaultValue,
                })
            })
        }

        varList.push({
            text: 'Global variables',
            disabled: true,
        })
        this.globalVariables.forEach((item: any) => {
            varList.push({
                text: item.name,
                type: item.valueType,
                value: item.defaultValue,
            })
        })

        return varList
    }

    
}

export { Variables }