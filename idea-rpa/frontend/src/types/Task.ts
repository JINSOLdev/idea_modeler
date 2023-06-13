
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
        let delTask = child.find((obj: any) => obj.id == value.id)

        if (delTask != null) {
            child = child.filter((obj: any) => obj.id != value.id)
            
        } else {
            child.forEach((obj: any) => {
                if (obj.type == "IfTask") {
                    obj.property.conditions.forEach((condition: any) => {
                        condition.child = this.delChild(value, condition.child)
                    })

                } else if (obj.type == "TryExceptTask") {
                    if (obj.child.length > 0) {
                        obj.child = this.delChild(value, obj.child)
                    }
                    if (obj.property.except && obj.property.exceptChild.length > 0) {
                        obj.property.exceptChild = this.delChild(value, obj.property.exceptChild)
                    }
                    if (obj.property.elseBranch && obj.property.elseChild.length > 0) {
                        obj.property.elseChild = this.delChild(value, obj.property.elseChild)
                    }
                    if (obj.property.finallyBranch && obj.property.finallyChild.length > 0) {
                        obj.property.finallyChild = this.delChild(value, obj.property.finallyChild)
                    }

                } else {
                    obj.child = this.delChild(value, obj.child)

                }
            })
        }
        return child
    }
    
    public setProperty(value: any) {
    }

    public getKeywords() {
    }

    public delKeyword(value: any) {
    }

    public getVariables() {
    }

    public checkType(item: any): string {
        let text = ""
        if ((!item || item == null) ) {
            return text
        }
        
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
                if (item.defaultValue && item.defaultValue != null) {
                    text = `${item.defaultValue}`
                }
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

    public clone():any {
        let cloneObj = Object.create(this);
        return cloneObj;
    }   
}

class CallKeyword extends Construct{

    public toRobot(tab: number): string{
        let robot = Construct.tabs.substr(0, tab);
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
        itemVarName: [{
            name: "item",
            valueType: "Scalar",
            defaultValue: "item"
        }],
        iterationVarName: [{
            name: "items",
            valueType: "List",
            defaultValue: "items"
        }],
        type: "in"
    }

    public setProperty(value: any) {
        this.property.itemVarName = value.itemVarName
        this.property.iterationVarName = value.iterationVarName
    }

   
    public toRobot(tab: number): string{
        const name = this.name.toUpperCase()

        let robot = Construct.tabs.substr(0, tab) + `${name}` + Construct.tabs.substr(0, tab) 
        
        this.property.itemVarName.forEach((item: any) => {
            robot += this.checkType(item) + Construct.tabs.substr(0, tab)
        })
        
        robot += this.property.type.toUpperCase() + Construct.tabs.substr(0, tab)

        this.property.iterationVarName.forEach((item: any) => {
            robot += this.checkType(item) + Construct.tabs.substr(0, tab)
        })
        
        this.child?.forEach((child: any) => {
            robot += "\n"+ child.toRobot(tab + 1)
        });

        robot += "\n" + Construct.tabs.substr(0, tab) + "END";

        return robot; 
    }

}

class IfTask extends SeqTask{

    public property: any = {
        conditions: [
            {
                type: 'If',
                isAll: 0,
                child: [],
                terms: [{
                    variable: "",
                    terms: null,
                }]
            }
        ]
    }

    public setProperty(value: any) {
        this.property.terms = value.terms
    }

    public getConditions(condition: any): string {
        let text = ""
        if (condition.hasOwnProperty("isGroup")) {
            text += "("
        } else if (condition.hasOwnProperty("type") || condition.hasOwnProperty("variable")) {
            text += Construct.tabs.substr(0, 1)
        }

        if (condition.terms && condition.terms.length > 0) {
            const lastIndex = condition.terms.length - 1
            condition.terms.forEach((item: any, index: number) => {
                if (item.terms && item.terms.length > 0) {
                    text += this.getConditions(item)

                } else {
                    if (item.variable) {
                        if (item.isNot) {
                            text += "(not "
                            if (item.operator) {
                                text += this.checkType(item.variable) + `${item.operator}` + this.checkType(item.compareVariable)
                            } else {
                                text += this.checkType(item.variable)
                            }
                            text += ")"
                        } else {
                            if (item.operator) {
                                text += this.checkType(item.variable) + `${item.operator}` + this.checkType(item.compareVariable) + Construct.tabs.substr(0, 1)
                            } else {
                                text += this.checkType(item.variable) + Construct.tabs.substr(0, 1)
                            }
                        }
                    }
                }
                if (condition.isAll == 0 && index < lastIndex 
                        && text.length > 0
                        && text.replaceAll("\t", "").length > 0
                ) {
                    text += "and" + Construct.tabs.substr(0, 1)
                } else if (condition.isAll == 1 && index < lastIndex
                        && text.length > 0
                        && text.replaceAll("\t", "").length > 0
                ) {
                    text += "or" + Construct.tabs.substr(0, 1)
                }
            })
        }

        if (condition.hasOwnProperty("isGroup")) {
            text += ")"
        }

        if (text.length == 0 || text.replaceAll("\t", "").length == 0 || text.includes("()")) {
            text = ""
        }

        return text
    }
    
    public toRobot(tab: number): string{

        let robot = "";

        if (this.property.conditions.length > 0) {
                this.property.conditions.forEach((item: any, idx: number) => {
                const name = item.type.toUpperCase()
                robot += Construct.tabs.substr(0, tab) + `${name}`

                robot += this.getConditions(item)
                // if (item.operator) {
                //     robot += Construct.tabs.substr(0, tab) + `${name}` 
                //             + Construct.tabs.substr(0, tab) + `"${item.variable}" `
                //             + `${item.operator} "${item.compareVariable}"`;
                    
                // } else if (item.type != "Else" && item.variable) {
                //     robot += Construct.tabs.substr(0, tab) + `${name}` 
                //             + Construct.tabs.substr(0, tab) + `$${item.variable}`;
                // } else {
                //     robot += Construct.tabs.substr(0, tab) + `${name}`
                // }

                item.child.forEach((keyword: any) => robot += "\n" + keyword.toRobot(tab + 1))
                
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
            variable: ''
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
                robot += Construct.tabs.substr(0, tab) + this.property.condition.operator 
                        + Construct.tabs.substr(0, tab) + this.property.condition.compareVariable
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
            this.keywords = this.keywords.concat(value.keywords)
        }
    }

    public getKeywords() {
        return this.keywords;
    }
    
    public delKeyword(value: any) {
        this.keywords = this.keywords.filter((obj: any) => obj.id != value.id)
    }

    public setLibrary(child: any, tab: number): string {
        let text = "";
        
        child.forEach((item: any) => {
            if (item.library && item.library != "" && item.library != "User Keyword") {
                if (!text.includes(item.library)) {
                    text += "Library" + Construct.tabs.substr(0, tab + 1) + `${item.library}\n`;
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
                variable => robot += variable.toRobot(tab + 1)
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
                    keyword.child.forEach(child => robot += child.toRobot(tab + 1) + "\n")
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
        var me = this
        let text = ""
        let keys = Object.keys(this.property)
        
        if (index > 0 && key != "locator") {
            var res = false
            keys.forEach((str: string, idx: number) => {
                if (idx < index && str != "returnVal") {
                    if ((!me.property[str] ||
                            me.property[str] == "" ||
                            me.property[str] == null || 
                            me.property[str] == undefined
                    ) || (
                        me.property[str] && 
                        typeof me.property[str] == "object" && (
                            !me.property[str].defaultValue || 
                            me.property[str].defaultValue == "" ||
                            me.property[str].defaultValue == null || 
                            me.property[str].defaultValue == undefined
                        )
                    )) {
                        res = true
                    }
                }
            })

            if (res && this.property[key]) {

                if (typeof this.property[key] == "object" && (this.property[key].length > 0 ||
                    (this.property[key].defaultValue && 
                    this.property[key].defaultValue != null &&
                    this.property[key].defaultValue != undefined))
                ) {
                    text += `${key}=`

                } else if (typeof this.property[key] == "boolean" || typeof this.property[key] == "string") {
                    text += `${key}=`
                }
            }
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

                robot += Construct.tabs.substr(0, 1) + `${this.name}`

            }

            keys.forEach((key: string, index: number) => {
                if (key != 'returnVal') {
                    if (this.property[key] == null || this.property[key] == undefined) {
                        return false
                        
                    } else if (key == 'locator') {
                        if (this.property[key].defaultValue && this.property[key].defaultValue != "") {
                            if (this.property[key].name != "ref") {
                                robot += Construct.tabs.substr(0, 1) + 
                                    `${this.property[key].name}:${this.property[key].defaultValue}`
                            } else {
                                robot += Construct.tabs.substr(0, 1) + `${this.property[key].defaultValue}`
                            }
                        }

                    } else if (typeof this.property[key] == "object" &&
                            !this.property[key].defaultValue &&
                            this.property[key].length > 0
                    ) {

                        this.property[key].forEach((val: any) => {
                            if (val != "" && val != undefined) {
                                if (val.key) {
                                    robot += Construct.tabs.substr(0, 1) + `${val.key}=` + this.checkType(val.value)
                                } else {
                                    robot += Construct.tabs.substr(0, 1) + this.checkType(val)
                                }
                            }
                        })

                    } else {
                        var text = this.setKeyValue(key, index) + this.checkType(this.property[key])
                        if (text && text.length > 0) {
                            robot += Construct.tabs.substr(0, 1) + text
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