function modifier(worker){
    if (worker.dizziness) {
        worker.dizziness = false;
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
    }

    return worker;
}


console.log(modifier({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));

  console.log(modifier({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));

  console.log(modifier({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false } 
  ));