function solve(input) {
    let astronauts = {};

    // Parse astronaut initial data
    const n = parseInt(input[0]);
    for (let i = 1; i <= n; i++) {
        let parts = input[i].split(' ');
        let name = parts[0];
        let oxygen = parseInt(parts[1]);
        let energy = parseInt(parts[2]);
        astronauts[name] = { oxygen, energy };
    }

    // Handle commands
    for (let i = n + 1; i < input.length; i++) {
        if (input[i] === 'End') {
            break;
        }
        
        let parts = input[i].split(' - ');
        let command = parts[0];
        let name = parts[1];
        let amount = parseInt(parts[2]);

        switch (command) {
            case 'Explore':
                if (astronauts[name].energy >= amount) {
                    astronauts[name].energy -= amount;
                    console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energy} energy!`);
                } else {
                    console.log(`${name} does not have enough energy to explore!`);
                }
                break;
            case 'Refuel':
                let initialEnergy = astronauts[name].energy;
                astronauts[name].energy = Math.min(200, astronauts[name].energy + amount);
                let recoveredEnergy = astronauts[name].energy - initialEnergy;
                console.log(`${name} refueled their energy by ${recoveredEnergy}!`);
                break;
            case 'Breathe':
                let initialOxygen = astronauts[name].oxygen;
                astronauts[name].oxygen = Math.min(100, astronauts[name].oxygen + amount);
                let recoveredOxygen = astronauts[name].oxygen - initialOxygen;
                console.log(`${name} took a breath and recovered ${recoveredOxygen} oxygen!`);
                break;
        }
    }

    // Print final state of all astronauts
    Object.keys(astronauts).forEach(name => {
        console.log(`Astronaut: ${name}, Oxygen: ${astronauts[name].oxygen}, Energy: ${astronauts[name].energy}`);
    });
}

solve([    '4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End']
)