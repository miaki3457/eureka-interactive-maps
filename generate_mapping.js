const fs = require('fs');
const path = require('path');

// 設定 JSON 所在的資料夾路徑
const dataDir = './src/assets/zoneJson'; 
const outputFile = './mapping_draft.json';

const mapping = {};


const uiLabels = ["Reset", "Level Range", "Element", "Any", "Drops", "Weather", "Time", "Aggro", "From", "To"];
uiLabels.forEach(label => mapping[label] = label);

function processFile(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    Object.values(data).forEach(section => {
        // 抓分類名稱 
        if (section.name) mapping[section.name] = section.name;
        
        // 抓項目名稱 
        if (section.items && Array.isArray(section.items)) {
            section.items.forEach(item => {
                if (item.name) mapping[item.name] = item.name;
                if (item.boss && item.boss.name) mapping[item.boss.name] = item.boss.name;
                if (item.drops) item.drops.forEach(d => mapping[d.name] = d.name);
            });
        }
    });
}

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
files.forEach(file => processFile(path.join(dataDir, file)));

fs.writeFileSync(outputFile, JSON.stringify(mapping, null, 4), 'utf8');
console.log(`完成！抓取了 ${Object.keys(mapping).length} 個詞條。`);