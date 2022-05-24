const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {

    const eldest =  people.reduce((oldest, current)=>{
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge > currentAge ? oldest:current;
    });

    console.log(people);
    console.log(eldest);

    return eldest;

}

// Do not edit below this line
module.exports = findTheOldest;
