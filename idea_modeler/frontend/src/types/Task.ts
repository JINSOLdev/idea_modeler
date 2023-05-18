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

    public itemVarName: any = [ { value: "item" } ];
    public iterationVarName: string = "items";

    public setProperty(value: any) {
        this.itemVarName = value.itemVarName
        this.iterationVarName = value.iterationVarName
    }

   
    public toRobot(tab: number): string{
        const name = this.name.toUpperCase()

        let robot = Construct.tabs.substr(0, tab) + `${name}` + Construct.tabs.substr(0, tab+1) 
        
        this.itemVarName.forEach((item: any) => {
            robot += `\$\{${item.value}\}` + Construct.tabs.substr(0, tab+1)
        })
        robot += `IN` + Construct.tabs.substr(0, tab+1) + `\@\{${this.iterationVarName}\}`
        
        this.child?.forEach(child=> robot += "\n"+child.toRobot(tab+1));

        robot += "\n"+Construct.tabs.substr(0, tab)+"END";

        return robot; 
    }

}

class IfTask extends SeqTask{

    public conditions: any[] = [
        {
            type: 'If',
            variable: '',
            keywords: []
        }
    ];

    public setProperty(value: any) {
        this.conditions = value.conditions
    }
    
    public toRobot(tab: number): string{

        let robot = "";

        if (this.conditions.length > 0) {
            this.conditions.forEach((item: any, idx: number) => {
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

    public condition: any = {
        type: '',
        variable: '',
        keywords: [ '' ]
    };
    public limit: string = "";

    public setProperty(value: any) {
        this.condition = value.condition
        this.limit = value.limit
    }
    
    public toRobot(tab: number): string{
        const name = this.name.toUpperCase()

        let robot = Construct.tabs.substr(0, tab) + `${name}`;

        if (this.condition != null) {
            robot += this.condition.variable
            if (this.condition.operator) {
                robot += ' ' + this.condition.operator + ' ' + this.condition.compareVariable
            }
        }
        if (this.limit != '') {
            robot += ' limit=' + this.limit + '\n'
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
                        robot += Construct.tabs.substr(0, tab+1) + `\$\{${val.value}\}`
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


    public toRobot(tab: number): string {
        let robot = "";

        if (this.child.length > 0) {
            robot += "*** Settings ***\n";
            this.child.forEach((keyword: any) => {
                if (keyword.library && keyword.library != "") {
                    if (!robot.includes(keyword.library)) {
                        robot += "Library" + Construct.tabs.substr(0, tab+1) + `${keyword.library}\n`;
                    }
                }
            });
            robot+= "\n";
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

    public constructor(public name: string, public defaultValue: string){
        super(name);
        this.defaultValue = defaultValue;
    }

    public toRobot(tab: number): string{

        let robot = "${" + `${this.name}` + "}" + Construct.tabs.substr(0, tab) + `${this.defaultValue}\n`

        return robot; 
    }
}

class Keyword extends SeqTask {

    public property: any = {}
    public library: string = ""

    public setKeyValue() {
        let keys = Object.keys(this.property)
        keys = keys.filter((key: string) => key != 'returnVal')

        let values: any[] = []
        keys.forEach((key: string) => {
            values.push(this.property[key])
        })

        if (values.includes(undefined)) {
            return true
        } else {
            return false
        }
    }

    public toRobot(tab: number): string{

        let robot = Construct.tabs.substr(0, tab) + `${this.name}`

        if (this.type != "DefinitionKeyword" && Object.keys(this.property).length > 0) {

            let keys = Object.keys(this.property)

            if (keys.includes('returnVal') && this.property.returnVal.length > 0) {

                robot = ""

                this.property.returnVal.forEach((item: any) => 
                    robot += Construct.tabs.substr(0, tab+1) + `\$\{${item.value}\}=`
                )

                robot += Construct.tabs.substr(0, tab+1) + `${this.name}`

            }

            keys.forEach((key: string, index: number) => {
                if (key != 'returnVal') {
                    if (key == 'url') {
                        robot += Construct.tabs.substr(0, tab+1) + `${this.property[key]}`
                        return
                    }
                    if (key == 'locator') {
                        if (this.property[key].class && this.property[key].class != null) {
                            robot += Construct.tabs.substr(0, tab+1) + `class:${this.property[key].class}`
                        } else if (this.property[key].id && this.property[key].id != null) {
                            robot += Construct.tabs.substr(0, tab+1) + `id:${this.property[key].id}`
                        } else {
                            robot += Construct.tabs.substr(0, tab+1) + `alias:${this.property[key].ref}`
                        }
                        return
                    }
                    if (typeof this.property[key] == 'object' && this.property[key].length > 0) {
                        
                        this.property[key].forEach((val: any) => {
                            if (val != "" && val != undefined) {
                                if (val.key) {
                                    robot += Construct.tabs.substr(0, tab+1) + `${val.key}=${val.value}`
                                } else {
                                    robot += Construct.tabs.substr(0, tab+1) + `\$\{${val}\}`
                                }
                            }
                        })

                    } else {
                        if (this.setKeyValue()) {
                            if (this.property[key] != ""  && this.property[key] != undefined) {
                                robot += Construct.tabs.substr(0, tab+1) + `${key}=\$\{${this.property[key]}\}`
                            }
                        } else {
                            robot += Construct.tabs.substr(0, tab+1) + `${this.property[key]}`
                        }
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