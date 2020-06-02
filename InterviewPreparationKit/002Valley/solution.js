function countingValleys(n, s) {

    let a=0, count=0;
    for(let  i=0; i<s.length;i++)
    {
        if(s[i]=='U')
            a++;
        else
            a--;
        if(a==0 && s[i]=='U')
            count++;
    }
    return count;
}