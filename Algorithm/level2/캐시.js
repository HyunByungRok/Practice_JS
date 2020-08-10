var cacheSize = 0;
var cities = ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"];

function solution(cacheSize, cities) {
    let cache = new LRUcache(cacheSize);
    return cities.map(e => e.toLowerCase()).reduce((a, c) => {
        return a+cache.add(c);
    }, 0);
}

function LRUcache(cacheSize) {
    this.cache = [];
    this.add = (data) => {
        if(cacheSize === 0) return 5;
        let idx = this.cache.indexOf(data);
        if(idx === -1) {
            if(this.cache.length === cacheSize) {
                this.cache.shift();
            }
            this.cache.push(data);
            // console.log(data + " " + "miss");
            return 5;
        }else{
            this.cache.splice(idx, 1);
            this.cache.push(data);
            // console.log(data + " " + "hit");
            return 1;
        }
    };
}
console.log(solution(cacheSize, cities));