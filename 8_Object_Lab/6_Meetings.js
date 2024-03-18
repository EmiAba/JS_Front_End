function solve(input){
    const meetings={};

    for (const line of input) {
        const [weekDay, name]=line.split(' ');
        //check if in meetings , a record exists

        if(meetings[weekDay]){
            console.log(`Conflict on ${weekDay}!`);
        }else{
            meetings[weekDay]=name;
            console.log(`Scheduled for ${weekDay}`);
        }

       
        }
        for (const weekday in meetings) {
            console.log(`${weekday} -> ${meetings[weekday]}`);
                 
             }
    }
    
 


solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)