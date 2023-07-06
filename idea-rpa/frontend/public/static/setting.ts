import { ipcRenderer, remote } from 'electron';
import * as path from 'path';
import { SETTING_SAVE_DATA_NEEDED } from '../../src/types/Types.ts';
import * as fs from 'fs';

const userDataPath = remote.app.getPath('userData');
const filePath = path.join(userDataPath, 'SETTINGs.json');
const usersStyles = JSON.parse(fs.readFileSync(filePath, 'utf8'));

for (const style in usersStyles) {
  (document.querySelector(`input[name="${style}"]`) as HTMLInputElement).value = usersStyles[style];
  (document.querySelector(`label[for="${style}"]`) as HTMLLabelElement).style.backgroundColor = usersStyles[style];
}

const inputs = document.getElementsByTagName('input');
let SETTINGs: { [key: string]: string } = {};

for (let i = 0; i < inputs.length; i++) {
  (document.querySelector(`label[for="${inputs[i].name}"]`) as HTMLLabelElement).style.backgroundColor = inputs[i].value;
  SETTINGs[inputs[i].name] = inputs[i].value;

  inputs[i].onkeyup = (e: KeyboardEvent) => {
    SETTINGs[e.target.name] = (e.target as HTMLInputElement).value;
    (document.querySelector(`label[for="${e.target.name}"]`) as HTMLLabelElement).style.backgroundColor = (e.target as HTMLInputElement).value;
    ipcRenderer.send(SETTING_SAVE_DATA_NEEDED, SETTINGs);
  };
}

document.getElementById('defaultValues')?.addEventListener('click', function (e: MouseEvent) {
  e.preventDefault();
  SETTINGs = {};
  for (let i = 0; i < inputs.length; i++) {
    SETTINGs[inputs[i].name] = inputs[i].defaultValue;
    (document.querySelector(`label[for="${inputs[i].name}"]`) as HTMLLabelElement).style.backgroundColor = inputs[i].defaultValue;
    inputs[i].value = inputs[i].defaultValue;
    ipcRenderer.send(SETTING_SAVE_DATA_NEEDED, SETTINGs);
  }
});
