const myobject={
    js: 'jabvascript',
    cpp: 'c++',
    rb:'ruby',
}

for (const key in myobject) {
    console.log(key)
    
}


for (const key in myobject) {
    
    console.log(`${key} for shortcut is ${myobject[key]}`)
}

const programming = ['java','cpp','py']

for (const key in programming) {
    console.log(key);
}

for (const key in programming) {
    console.log(programming[key]);
}

/// so for array forof loop is used and for object forin. loop is used

//for map nothing isn used forin forof 
