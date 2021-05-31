function register(inputArr){
    let result = [];
    for (const iterator of inputArr) {
        let[name,level,items] = iterator.split(' / ');
        level = Number(level);
        if (items == undefined) {
            items = [];
        } else {
            items = items.split(', ');
        }

        result.push({name,level,items});
    }
    console.log(JSON.stringify(result));
}


register(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

register(['Jake / 1000 / Gauss, HolidayGrenade']);