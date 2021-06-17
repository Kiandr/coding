const levelOrder = function(root) {
    const levels = []

    if(!root) {
        return levels
    }

    const queue = [root]
    while (queue.length){
        const queueLength = queue.length
        const level = []

        for(let i = 0; i < queueLength; i++){

            const node = queue.shift()

            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }

            level.push(node.val)
        }
        levels.push(level)
    }
    return levels
}

let arr = [3, 9, 20, null, null, 15, 7]
function Node(){
    this.val
}
for (i = 0; i<arr.length; i++){

}
console.log(me)