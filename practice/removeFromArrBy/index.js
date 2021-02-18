

const removeByLength = function (s){
    s= s.split('')
    s.length = s.length -1;
    return s;
}

const removeByShift = function (s){
    s= s.split('')
    s.shift()
    return s;
}

const removeByPop = function (s){
    s= s.split('')
    s.pop()
    return s;
}

const removeBySplice = function (s,from=null,len=null,replaceWith=null){
    s= s.split('')
    s.splice(from,len,replaceWith)
    return s;
}

const removeByDelete = function (s,index=null){
    s= s.split('')
    delete s[index];
    return s;
}

console.log(("abcd").split(''));
console.log('removeByShift',removeByLength("abcd"));
console.log('removeByShift',removeByShift("abcd"));
console.log('removeByPop',removeByPop("abcd"));
console.log('removeBySplice',removeBySplice("abcd",0,2,'k'));
console.log('removeByDelete',removeByDelete("abcd",0));
