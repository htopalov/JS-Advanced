function solve(pie, firstFlavour, secondFlavour){
    let firstIndex = pie.indexOf(firstFlavour);
    let secondIndex = pie.indexOf(secondFlavour);
    let sliced = pie.slice(firstIndex, secondIndex + 1);
    return sliced;
}

solve(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie');
solve(['Apple Crisp','Mississippi Mud Pie','Pot Pie','Steak and Cheese Pie','Butter Chicken Pie','Smoked Fish Pie'],'Pot Pie','Smoked Fish Pie');