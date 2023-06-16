<template>
    <div>
        <v-btn 
                @click="openURLDialog"
                outlined
                block
        >
            Locator Button
        </v-btn>

        <v-dialog v-model="urlDialog" max-width="600">
            <v-card>
                <v-card-title>
                    Locator URL
                </v-card-title>
                <v-card-text class="pb-0">
                    <v-text-field
                            v-model="urlText"
                            persistent-placeholder
                            placeholder="https://google.com"
                            outlined
                            dense
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="urlDialog = false"
                            text
                            color="red"
                    >
                        Cancel
                    </v-btn>
                    <v-btn @click="getXpath"
                            text
                            color="success"
                    >
                        Ok
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script lang="ts">
    import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
    import { remote, ipcRenderer } from "electron";

    @Component
    export default class OpenChildBrowser extends Vue {
        @Prop() public records!: any[]
        
        public listener: any
        public urlDialog: boolean = false
        public urlText: string = ""

        openURLDialog() {
            this.urlDialog = true
            this.urlText = ""
        }

        messageProcessing(msg: any, arg: any, domPickerWindow: any) {
            const me = this
            if(arg.type == 'close') {
                // me.listener = null
                domPickerWindow.destroy()
                // ipcRenderer.removeListener('fromMain', me.messageProcessing)
                ipcRenderer.removeAllListeners('fromMain')
                this.$emit('update:records',this.records)
                this.$emit('closeLocator')
            } else {
                if (arg.id || arg.class) {
                    if (!this.records.find((item: any) => item.id == arg.id || item.class == arg.class)) {
                        this.records.push(arg)
                    }
                }
            }   
        }

        getXpath() {
            let me = this
            me.urlText = me.urlText ? me.urlText : "https://google.com"
            me.urlDialog = false
            let domPickerWindow = new remote.BrowserWindow({
                width: 800,
                height: 600,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    enableRemoteModule: true,
                }
            })
    
            domPickerWindow.setIgnoreMouseEvents(true)
            domPickerWindow.loadURL(me.urlText)
            // domPickerWindow.loadURL("https://google.com")
            domPickerWindow.webContents.openDevTools()
            // const webFrame = require('electron').webFrame
            domPickerWindow.webContents.on('did-frame-finish-load', () => {
                // domPickerWindow.webContents.on('did-interact-with-keyboard', (event,result) => {
                // // console.log('Clicked at position:', x, y, 'with button:', button)
                // // Do whatever you want to do when the window is clicked
                // })
                let iframe = domPickerWindow.webContents
                this.listener = ipcRenderer.on('fromMain', (msg, arg) => {
                    me.messageProcessing(msg,arg,domPickerWindow)
                })
                domPickerWindow.setIgnoreMouseEvents(false)
                iframe.executeJavaScript(`
                    console.log("init")
                    ElementPicker = require('html-element-picker')
                    const options = {
                            container: document.body,
                            selectors: "*",
                            background: "rgba(153, 235, 255, 0.5)",
                            borderWidth: 5,
                            transition: "all 150ms ease",
                            ignoreElements: [document.body],
                            action: {
                                trigger: "click",
                                callback: (function (target) {
                                    const obj = {
                                        type: 'msg',
                                        class: target.getAttribute('class'),
                                        ref: target.getAttribute('ref'),
                                        id: target.getAttribute('id'),
                                    }
                                    console.log(target)
                                    require('electron').ipcRenderer.send('toMain', obj);
                                })
                            }
                        }
                    new ElementPicker(options);
                    document.querySelectorAll('[role="button"]').forEach(function (el){
                        var clonedElement = el.cloneNode(true);
                        el.parentNode.replaceChild(clonedElement, el);
                    });
                    window.addEventListener("keydown",(event) => {
                        if (event.defaultPrevented) {
                            return; // Should do nothing if the default action has been cancelled
                        } else if (event.keyCode == 27) {
                            // Handle the event with KeyboardEvent.keyCode
                            const obj = {
                                type: 'close'
                            }
                            require('electron').ipcRenderer.send('toMain', obj);
                        }
                    }, true);
                `)
                
            })
        }
    }
</script>