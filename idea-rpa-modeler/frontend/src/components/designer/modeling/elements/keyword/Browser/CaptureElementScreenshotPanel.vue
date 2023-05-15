<template>
    <div>
        Locator
        <v-btn>capture</v-btn>
    </div>
    
</template>

<script lang="ts">
    import { Component, Mixins } from "vue-property-decorator"
    import KeywordPanel from '../../panels/KeywordPanel.vue'
    // import { remote, ipcMain, ipcRenderer } from 'electron';
    @Component({
        components: {
            KeywordPanel,
        }
    })
    export default class CaptureElementScreenshotPanel extends Mixins(KeywordPanel) {

        records: any[] = []

        // getXpath() {
        //         var me = this;
        //         const window = remote.getCurrentWindow()
        //         const appEl = this.$el
        //         // Open a new BrowserWindow with the Vue.js app embedded in an iframe
        //         const domPickerWindow = new remote.BrowserWindow({
        //             width: 800,
        //             height: 600,
        //             webPreferences: {
        //                 nodeIntegration: true,
        //                 contextIsolation : false,
        //                 enableRemoteModule: false,
        //             }
        //         })
        //         domPickerWindow.setIgnoreMouseEvents(true)
                
        //         domPickerWindow.loadURL("https://google.com")
        //         domPickerWindow.webContents.openDevTools()
        //         // const webFrame = require('electron').webFrame
        //         domPickerWindow.webContents.on('did-frame-finish-load', () => {
        //             // domPickerWindow.webContents.on('did-interact-with-keyboard', (event,result) => {
        //             // // console.log('Clicked at position:', x, y, 'with button:', button)
        //             // // Do whatever you want to do when the window is clicked
        //             // })
        //             const iframe = domPickerWindow.webContents
        //             const listener = ipcRenderer.on('fromMain', (msg, arg) => {
        //                 if(arg.type == 'close') {
        //                     domPickerWindow.close();
        //                 } else {
        //                     console.log(msg,arg);
        //                     me.records.push(arg)
        //                 }   
        //             })
        //             domPickerWindow.setIgnoreMouseEvents(false)
        //             iframe.executeJavaScript(`
        //                 console.log("init")
        //                 ElementPicker = require('html-element-picker')
        //                 const options = {
        //                         container: document.body,
        //                         selectors: "*",
        //                         background: "rgba(153, 235, 255, 0.5)",
        //                         borderWidth: 5,
        //                         transition: "all 150ms ease",
        //                         ignoreElements: [document.body],
        //                         action: {
        //                             trigger: "click",
        //                             callback: (function (target) {
        //                                 const obj = {
        //                                     type: 'msg',
        //                                     class: target.getAttribute('class'),
        //                                     ref: target.getAttribute('ref'),
        //                                     id: target.getAttribute('id')
        //                                 }
        //                                 require('electron').ipcRenderer.send('toMain', obj);
        //                             })
        //                         }
        //                     }
        //                 new ElementPicker(options);
        //                 document.querySelectorAll('[role="button"]').forEach(function (el){
        //                     var clonedElement = el.cloneNode(true);
        //                     el.parentNode.replaceChild(clonedElement, el);
        //                 });
        //                 window.addEventListener("keydown",(event) => {
        //                     if (event.defaultPrevented) {
        //                         return; // Should do nothing if the default action has been cancelled
        //                     } else if (event.keyCode == 27) {
        //                         // Handle the event with KeyboardEvent.keyCode
        //                         const obj = {
        //                             type: 'close'
        //                         }
        //                         require('electron').ipcRenderer.send('toMain', obj);
        //                     }
        //                 }, true);
        //             `)
                    
        //         })
        //     }
    }
</script>