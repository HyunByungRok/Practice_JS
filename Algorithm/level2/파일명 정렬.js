var files = ["img12.png", "img10.png", "img2.png", "img1.png"];

function solution(files) {
    return divide(files).sort(comp).map(e => e.slice(0, 3).join(""));
}

function comp(file1, file2) {
    let head1 = file1[0].toLowerCase();
    let head2 = file2[0].toLowerCase();
    if(head1 === head2) {
        if(Number(file1[1]) === Number(file2[1])) return file1[3] - file2[3];
        return Number(file1[1]) - Number(file2[1]);
    }
    else if(head1 < head2) {
        return -1;
    }else {
        return 1;
    }
}
function divide(files) {
    return files.map((e, idx) => {
        e = e.split("");
        let element = [], i;
        for(i=0; i<e.length; i++) {
            if("0" <= e[i] && e[i] <= "9"){
                break;
            }
        }
        element[0] = e.splice(0, i).join("");
        for(i=0; i<e.length; i++) {
            if("0" > e[i] || e[i] > "9"){
                break;
            }
        }
        element[1] = e.splice(0, i).join("");
        element[2] = e.splice(0).join("");
        return [...element, idx];
    });
}

console.log(solution(files));