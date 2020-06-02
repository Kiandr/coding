function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;

    while (i < c.length) {

        if (c[i + 2] === 0) i += 2;

        else i += 1;

        if (i !== c.length) jumps++;

        console.log({jumps, i})

    }
    return jumps;
}