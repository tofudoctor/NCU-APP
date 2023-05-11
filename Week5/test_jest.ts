function addnumber(a : number, b : number):number {
    return a + b;
}
export {
    addnumber
}

function addstring(a : string, b : string):string {
    return a + b;
}
export {
    addstring
}

function addarr(a : number[], b : number[]):number[] {
    let tmp : number[] = [];
    for(let i = 0;i < a.length || i < b.length;i++){
        if(i < a.length && i < b.length) tmp.push(a[i] + b[i]);
        else if(i >= a.length) tmp.push(b[i]);
        else tmp.push(a[i]);
    }
    return tmp;
}
export {
    addarr
}

function obj(a : number, b : number):object {
    return {a, b};
}
export {
    obj
}