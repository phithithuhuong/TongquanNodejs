let medium=
    [
        {
            name: "Ha",
            gender: 'female',
            point: 8
        },
        {
            name: "Huy",
            gender: 'male',
            point: 9
        },
        {
            name: "Hung",
            gender: 'male',
            point: 7
        },
        {
            name: "Phuong",
            gender: 'female',
            point: 6
        },
        {
            name: "Huyen",
            gender: 'female',
            point: 10
        },
        {
            name: "Long",
            gender: 'male',
            point: 5
        },
        {
            name: "Luan",
            gender: 'male',
            point: 10
        },
        {
            name: "Linh",
            gender: 'female',
            point: 8
        }

    ];
let medium1= 0;
let medium2= 0;
let  male= []
for (let i = 0; i < medium.length; i++) {
    if (medium[i].gender==='male') {
        medium1+=medium[i].point
        male.push(medium1)
    }
    
}

console.log('Point medium of male is :',medium1/male.length);
let female= []
for (let i = 0; i < medium.length; i++) {
    if(medium[i].gender==='female'){
        medium2+=medium[i].point;
        female.push(medium)

    }

}
console.log('Point medium of female is :',medium2/female.length);