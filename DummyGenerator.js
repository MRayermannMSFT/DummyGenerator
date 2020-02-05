const path = require("path");
const fs = require("fs");

let filesAtEachLevel = 1000
let branchesAtEachLevel = 3;
let depth = 5;
let fileSizeRange = [1024, 1048576];
let startLocation = "E:/LotsOfFiles/";
let genScript = path.join(startLocation, "BatchList.txt");

try {
    fs.unlinkSync(startLocation);
} catch (err) {

}

fs.mkdirSync(startLocation);

function makeScript(currBranch, prevDir, currDepth) {
    if (currDepth > depth) {
        return;
    }
    let currentDir = prevDir + `/🤷‍Level-${currDepth}🎉-Branch-${currBranch}🍜/`;
    if (!fs.existsSync(currentDir)) {
        fs.mkdirSync(currentDir);
    }
    for(let branch = 0; branch < branchesAtEachLevel; branch++) {
        makeScript(branch, currentDir, currDepth + 1);
    }
    for (let file = 0; file < filesAtEachLevel; file++) {
        fs.appendFileSync(genScript, `${path.join(currentDir, `File-🍟🍝🍛${file}🍛🍝🍟.txt`)}\t${getRandomInt(fileSizeRange[0], fileSizeRange[1])}\t1\n`);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

makeScript(0, startLocation, 0)