var skill = "CBD";
var skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

function solution(skill, skill_trees) {
    return skill_trees.reduce((acc, cur) => {
        return acc + (canImaster(cur, skill) ? 1 : 0);
    }, 0);
}

function canImaster(string, skill){
    let canCnt=0, index;
    return string.split("").every((e) => {
        index = skill.indexOf(e);
        if(index < 0) return true;
        else if(index <= canCnt) {
            canCnt++;
            return true;
        }
        else return false;
    });
}

console.log(solution(skill, skill_trees));