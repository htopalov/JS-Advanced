function solve(inputArr){
    let result =[];

    for(let i=1; i<inputArr.length; i++){
        let[town,lat,lng] = inputArr[i].split(/\s*\|\s*/).filter(x=>x !== '');
        lat = Number(Number(lat).toFixed(2));
        lng = Number(Number(lng).toFixed(2));
        result.push({Town: town, Latitude: lat, Longitude: lng});
    }

    return JSON.stringify(result);
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);