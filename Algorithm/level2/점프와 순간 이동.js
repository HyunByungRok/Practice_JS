var N = 5;

function solution(N) {
    if(N===1) return 1;
    return N%2 === 0 ? solution(N/2) : solution(N-1) + 1;
}


// function PriorityQueue(comparator = (a, b) => a>b) {
//     this.queue = [];
//     this.comparator = comparator;
//     this.offer = (data) => {
//         return this.queue.push(data);
//     };
//     this.poll = () => {
//         let idx = this.queue.reduce((a, c, i, arr) => {
//             if(comparator(arr[a], c)){
//                 return i;
//             }
//             return a;
//         },0);
//         return this.queue.splice(idx, 1); 
//     };
//     this.size = () => {
//         return this.queue.length;
//     };
//     this.isEmpty = () => {
//         return this.size() === 0;
//     };
// }



console.log(solution(N));