function checkSpeed(speed, area) {
    let speedLimit;
    let status;

    // Determine the speed limit based on the area
    switch(area) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
        default:
            console.log("Invalid area specified.");
            return;
    }

    // Calculate the difference between the speed and the speed limit
    const difference = speed - speedLimit;

    // Determine the status based on the difference
    if (difference <= 0) {
        // If speed is within the limit
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        return;
    } else if (difference <= 20) {
        status = "speeding";
    } else if (difference <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }

    // Print the infraction severity and the difference in speeds
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}


