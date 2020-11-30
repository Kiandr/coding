/**
 * @param {number} n
 */
var OrderedStream = function (n) {
    this.head = new Array(n)
    this.prt = 0
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (id, value) {
    this.head[`${id - 1 > 0 ? id - 1 : 0}`] = value;
    let result = []

    for (let i = this.prt; i < this.head.length; i++) {
        if (this.head[i] != null) {
            result.push(this.head[i]);
            this.prt++;
        } else
            return result
    }
    return result
};

/**Runtime: 196 ms, faster than 50.67% of JavaScript online submissions for Design an Ordered Stream.
 Memory Usage: 50.2 MB, less than 87.44% of JavaScript online submissions for Design an Ordered Stream.
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 * There is a stream of n (id, value) pairs arriving in an arbitrary order, where id is an integer between 1 and n and value is a string. No two pairs have the same id.

 Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

 Implement the OrderedStream class:

 OrderedStream(int n) Constructs the stream to take n values.
 String[] insert(int id, String value) Inserts the pair (id, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.
 Input
 ["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
 [[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
 Output
 [null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

 Explanation
 // Note that the values ordered by ID is ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"].
 OrderedStream os = new OrderedStream(5);
 os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns [].
 os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].
 os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
 os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns [].
 os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
 // Concatentating all the chunks returned:
 // [] + ["aaaaa"] + ["bbbbb", "ccccc"] + [] + ["ddddd", "eeeee"] = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]
 // The resulting order is the same as the order above.



 Constraints:

 1 <= n <= 1000
 1 <= id <= n
 value.length == 5
 value consists only of lowercase letters.
 Each call to insert will have a unique id.
 Exactly n calls will be made to insert

 */

let os = new OrderedStream(5);
console.log(os.insert(3, "ccccc")); // Inserts (3, "ccccc"), returns [].
console.log(os.insert(1, "aaaaa")); // Inserts (1, "aaaaa"), returns ["aaaaa"].
console.log(os.insert(2, "bbbbb")); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
console.log(os.insert(5, "eeeee")); // Inserts (5, "eeeee"), returns [].
console.log(os.insert(4, "ddddd")); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].