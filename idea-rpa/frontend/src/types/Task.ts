import { Variables } from "./Variables";

class Construct{
    protected static tabs = "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
    
    constructor(protected name: string){
        this.name = name;
    }

    public toRobot(tab: number): string{
        return Construct.tabs.substr(0, tab)  + `${this.name}`
    }
    
}

class Task extends Construct{

    constructor(private id: any, name: string, public type: string, public child: Array<Task> = []){
        super(name);
        this.id = id;
        this.type = type;
        this.child = child;
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public setName(name: any) {
        this.name = name
    }

    public delChild(value: any, child: any) {
        let delTask
        delTask = child.find((obj: any) => obj.id == value.id)
        if (delTask != null) {
            child = child.filter((obj: any) => obj.id != value.id)
        } else {
            child.forEach((obj: any) => {
                obj.child = this.delChild(value, obj.child)
            })
        }
        return child
    }
    
    public setProperty(value: any) {
    }

    public delKeyword(value: any) {
    }

    public getVariables() {
    }


    public clone():any {

        let cloneObj = Object.create(this);
       // var cloneObj = new (this.constructor() as any)(this.id, this.name);
        // cloneObj.id = id;
        // cloneObj.name = name;
        // for (var attribut in this) {
        // if (typeof this[attribut] === "object") {
        //     cloneObj[attribut] = this[attribut].clone();
        // } else {
        //     cloneObj[attribut] = this[attribut];
        // }
    
       return cloneObj;
    }   
}

class CallKeyword extends Construct{
    public inputVariableNames: string[] = ["a","b", "c"];
    public outputVariableName: string = "invitations";

   
    public toRobot(tab: number): string{
        let robot = Construct.tabs.substr(0, tab);
        
        if(this.outputVariableName)
            robot += "${" + this.outputVariableName + "} = ";
        
        robot 
            += `${this.name} `;

        if(this.inputVariableNames){
            this.inputVariableNames.forEach(inputVarName => {
                robot += "${" + inputVarName + "} ";
            })
        }

        return robot;
    }
     
}

class SeqTask extends Task {

    public toRobot(tab: number): string{

        let robot = super.toRobot(tab);

        
        this.child?.forEach(child=> robot += "\n"+child.toRobot(tab + 1));

        robot += "\n";
        

        return robot; 
    }
}

class ForTask extends SeqTask{

    public property: any = {
        itemVarName: [ { value: "item" } ],
        iterationVarName: "items"
    }

    public setProperty(value: any) {
        this.property.itemVarName = value.itemVarName
        this.property.iterationVarName = value.iterationVarName
    }

   
    public toRobot(tab: number): string{
        const name = this.name.toUpperCase()

        let robot = Construct.tabs.substr(0, tab) + `${name}` + Construct.tabs.substr(0, tab) 
        
        this.property.itemVarName.forEach((item: any) => {
            robot += `\$\{${item.value}\}` + Construct.tabs.substr(0, tab)
        })
        robot += `IN` + Construct.tabs.substr(0, tab) + `\@\{${this.property.iterationVarName}\}`
        
        this.child?.forEach((child: any) => {
            robot += "\n"+ child.toRobot(tab)
        });

        robot += "\n"+Construct.tabs.substr(0, tab)+"END";

        return robot; 
    }

}

class IfTask extends SeqTask{

    public property: any = {
        conditions: [
            {
                type: 'If',
                variable: '',
                keywords: []
            }
        ]
    }

    public setProperty(value: any) {
        this.property.conditions = value.conditions
    }
    
    public toRobot(tab: number): string{

        let robot = "";

        if (this.property.conditions.length > 0) {
            this.property.conditions.forEach((item: any, idx: number) => {
                const name = item.type.toUpperCase()

                if (item.operator) {
                    robot += Construct.tabs.substr(0, tab) + `${name}` + Construct.tabs.substr(0, tab) + `"${item.variable}" `
                        + `${item.operator} "${item.compareVariable}"`;
                    
                } else if (item.type != "Else" && item.variable) {
                    robot += Construct.tabs.substr(0, tab) + `${name}` + Construct.tabs.substr(0, tab) + `$${item.variable}`;
                } else {
                    robot += Construct.tabs.substr(0, tab) + `${name}`
                }
                item.keywords.forEach((child: any) => robot += "\n" + child.toRobot(tab + 1))
                robot += "\n" 
            })
        }

        robot += Construct.tabs.substr(0, tab) + "END"
        
        return robot; 
    }

}

class WhileTask extends SeqTask{

    public property: any = {
        condition: {
            type: '',
            variable: '',
            keywords: [ '' ]
        },
        limit: ""
    }

    public setProperty(value: any) {
        this.property.condition = value.condition
        this.property.limit = value.limit
    }
    
    public toRobot(tab: number): string{
        const name = this.name.toUpperCase()

        let robot = Construct.tabs.substr(0, tab) + `${name}`;

        if (this.property.condition != null) {
            robot += this.property.condition.variable
            if (this.property.condition.operator) {
                robot += ' ' + this.property.condition.operator + ' ' + this.property.condition.compareVariable
            }
        }
        if (this.property.limit != '') {
            robot += ' limit=' + this.property.limit + '\n'
        }
        this.child?.forEach(child=> robot += "\n"+child.toRobot(tab + 1));

        robot += '\n' + Construct.tabs.substr(0, tab) + "END";

        return robot; 
    }

}

class BreakTask extends SeqTask{
    
    public toRobot(tab: number): string{
        
        const name = this.name.toUpperCase();

        let robot = Construct.tabs.substr(0, tab) + `${name}`;

        return robot;
    }
}

class ContinueTask extends SeqTask{
    
    public toRobot(tab: number): string{

        const name = this.name.toUpperCase();

        let robot = Construct.tabs.substr(0, tab) + `${name}`;

        return robot;
    }
}

class ReturnTask extends SeqTask{

    public property: any = {}
    
    public toRobot(tab: number): string{

        const name = this.name.toUpperCase();

        let robot = Construct.tabs.substr(0, tab) + `${name}`;

        let keys = Object.keys(this.property)

        if(keys.length > 0) {
            keys.forEach((key: string) => {
                this.property[key].forEach((val: any) => {
                    if (val != "" && val != undefined) {
                        robot += Construct.tabs.substr(0, tab) + `\$\{${val.value}\}`
                    }
                })
            })
        }

        return robot;
    }
}

class TryExceptTask extends SeqTask{

    public property: any = {
        exceptChild: [],
        elseBranch: false,
        elseChild: [],
        finallyBranch: true,
        finallyChild: []
    }
    
    public toRobot(tab: number): string{

        let robot = Construct.tabs.substr(0, tab) + `TRY`;
        
        this.child?.forEach(child=> robot += "\n"+child.toRobot(tab + 1));

        if (this.property.except) {
            robot += "\n" + Construct.tabs.substr(0, tab) + `EXCEPT`

            this.property.except?.forEach((except: string)=> robot += Construct.tabs.substr(0, tab) + `\$\{${except}\}`)

            this.property.exceptChild?.forEach((child: any)=> robot += "\n"+child.toRobot(tab + 1))
        }

        if (this.property.elseBranch) {
            robot += "\n" + Construct.tabs.substr(0, tab) + `ELSE`

            this.property.elseChild?.forEach((child: any)=> robot += "\n"+child.toRobot(tab + 1))
        }

        if (this.property.finallyBranch) {
            robot += "\n" + Construct.tabs.substr(0, tab) + `FINALLY`

            this.property.finallyChild?.forEach((child: any)=> robot += "\n"+child.toRobot(tab + 1))
        }

        robot += '\n' + Construct.tabs.substr(0, tab) + "END";

        return robot
    }
}

class Robot extends SeqTask{

    public variables: Variable[] = [];
    public keywords: Keyword[] = [];

    public getVariables() {
        return this.variables;
    }

    public setProperty(value: any) {
        if (value.variables) {
            this.variables = value.variables
        }

        if (value.keywords) {
            let newKeywords = this.keywords
            newKeywords = newKeywords.concat(value.keywords)
            this.keywords = newKeywords
        }
    }

    public delKeyword(value: any) {
        this.keywords = this.keywords.filter((obj: any) => obj.id != value.id)
    }

    public setLibrary(child: any, tab: number): string {
        let text = "";
        
        child.forEach((item: any) => {
            if (item.library && item.library != "") {
                if (!text.includes(item.library)) {
                    text += "Library" + Construct.tabs.substr(0, tab+1) + `${item.library}\n`;
                }
            }

            if (item.child && item.child.length > 0) {
                text += this.setLibrary(item.child, tab)
            }
        })

        return text
    }


    public toRobot(tab: number): string {
        let robot = "";

        if (this.child.length > 0) {
            robot += "*** Settings ***\n" + this.setLibrary(this.child, tab) + "\n"
        }
        
        if (this.variables.length > 0) {
            robot+= "\n*** Variables ***\n";
        
            this.variables.forEach(
                variable => robot += variable.toRobot(tab+1)
            );
            robot+= "\n";
        }
        
        robot+="\n*** Tasks ***\n";

        robot+=super.toRobot(tab) + "\n";

        if (this.keywords.length > 0) {
            robot+="\n*** Keywords ***\n";

            this.keywords.forEach(keyword => {
                robot += keyword.toRobot(tab) + "\n";

                if (keyword.child.length > 0) {
                    keyword.child.forEach(child => robot += child.toRobot(tab+1) + "\n")
                }
            });
        }

        robot+="\n";

        return robot;
    }

}

class Variable extends Construct{

    public constructor(public name: string, public valueType: string, public defaultValue: any){
        super(name);
        this.valueType = valueType;
        this.defaultValue = defaultValue;
    }

    public toRobot(tab: number): string{

        let robot = ""

        if (this.valueType.includes("Scalar")) {
            robot += `\$\{${this.name}\}` + Construct.tabs.substr(0, tab) + `${this.defaultValue}\n`

        } else if (this.valueType == "List") {
            robot += `\@\{${this.name}\}`
            
            this.defaultValue.forEach((item: any) => {
                robot += Construct.tabs.substr(0, tab) + `${item.value}`
            })
            
            robot += "\n"

        } else if (this.valueType == "Dictionary") {
            robot += `\&\{${this.name}\}`

            this.defaultValue.forEach((item: any) => {
                robot += Construct.tabs.substr(0, tab) + `${item.key}=${item.value}`
            })
            
            robot += "\n"
        
        } else if (this.valueType == "Environment") {
            robot += `\$\{${this.name}\}` + Construct.tabs.substr(0, tab) + `\%\{${this.defaultValue}\}\n`
        
        }

        return robot; 
    }
}

class Keyword extends SeqTask {

    public property: any = new Map()
    public library: string = ""

    public setProperty(value: any) {
        if (value) {
            this.property = value
        }
    }

    public setKeyValue(key: string, index: number): string {
        let text = ""
        let keys = Object.keys(this.property)
        
        if (index > 0) {
            let res = keys.some((str: string, idx: number) =>
                idx < index && (
                    (!this.property[str] || this.property[str] == null || this.property[str] == undefined) ||
                    (this.property[str] && typeof this.property[str] == "object" && 
                        (!this.property[str].defaultValue || this.property[str].defaultValue == null || this.property[str].defaultValue == undefined)
                    )
                ) &&
                str != "returnVal"
            )

            if (res && this.property[key] &&
                    typeof this.property[key] == "object" && (this.property[key].length > 0 ||
                    (this.property[key].defaultValue && 
                    this.property[key].defaultValue != null &&
                    this.property[key].defaultValue != undefined))
            ) {
                text += `${key}=`
            }
        }

        return text
    }

    public checkType(item: any): string {
        let text = ""

        if (typeof item == "object" && item.valueType) {
            if (item.valueType == "Scalar") {
                text = `\$\{${item.name}\}`
    
            } else if (item.valueType == "List") {
                text = `\@\{${item.name}\}`
                
            } else if (item.valueType == "Dictionary") {
                text = `&\{${item.name}\}`
                
            } else if (item.valueType == "Environment") {
                text = `\%\{${item.name}\}`
                
            } else {
                text = `${item.defaultValue}`
    
            }
        } else if (typeof item == "string" || typeof item == "number") {
            text = `${item}`

        } else if (typeof item == "boolean") {
            item = String(item).toUpperCase()
            text = `\$\{${item}\}`

        } else {
            text = `${item}`
            
        }

        return text
    }

    public toRobot(tab: number): string{

        let robot = Construct.tabs.substr(0, tab) + `${this.name}`

        if (this.type != "DefinitionKeyword" && Object.keys(this.property).length > 0) {

            let keys = Object.keys(this.property)

            if (keys.includes('returnVal') && this.property.returnVal.length > 0) {

                robot = ""

                this.property.returnVal.forEach((item: any) => 
                    robot += Construct.tabs.substr(0, tab) + `\$\{${item.value}\}=`
                )

                robot += Construct.tabs.substr(0, tab) + `${this.name}`

            }

            keys.forEach((key: string, index: number) => {
                if (key != 'returnVal') {
                    if (this.property[key] == null || this.property[key] == undefined) {
                        return false
                        
                    } else if (key == 'locator') {
                        if (this.property[key].id && this.property[key].id != null) {
                            robot += Construct.tabs.substr(0, tab) + `id:${this.property[key].id}`
                        } else if (this.property[key].class && this.property[key].class != null) {
                            robot += Construct.tabs.substr(0, tab) + `class:${this.property[key].class}`
                        } else {
                            robot += Construct.tabs.substr(0, tab) + `${this.property[key].ref}`
                        }

                    } else if (typeof this.property[key] == "object" && this.property[key].length > 0) {

                        this.property[key].forEach((val: any) => {
                            if (val != "" && val != undefined) {
                                if (val.key) {
                                    robot += Construct.tabs.substr(0, tab) + `${val.key}=` + this.checkType(val.value)
                                } else {
                                    robot += Construct.tabs.substr(0, tab) + this.checkType(val)
                                }
                            }
                        })

                    } else {
                        robot += Construct.tabs.substr(0, tab) + this.setKeyValue(key, index)
                            + this.checkType(this.property[key])

                    }
                }
            })
        }

        return robot; 
    }

}


export {
    Robot, 
    Task, 
    SeqTask, 
    ForTask, 
    IfTask, 
    WhileTask, 
    BreakTask,
    ContinueTask,
    ReturnTask,
    TryExceptTask,
    Keyword, 
    CallKeyword, 
    Variable
}