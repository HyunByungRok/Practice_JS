var routes = [[-20,15], [-14,-5], [-18,-13], [-5,-3]];

function solution(routes) {
    routes.sort(comp);
    let st = routes[0];
    return routes.slice(1).reduce((a,c) => {
        if(st[1] > c[1]) {
            st = c;
        }
        else if(c[0] > st[1]) {
            st = c;
            return a+1;
        }
        return a;
    },1);
}
function comp(a, b) {
    return a[0] - b[0];
}

console.log(solution(routes));