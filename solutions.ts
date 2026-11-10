export{};

function multiplyValue(value:number,multiplier?:number) {
    if(multiplier===undefined){
        multiplier=2;
    }
    return value*multiplier;
}
console.log(multiplyValue(10));
console.log(multiplyValue(10,5));
console.log(multiplyValue(7,0));

function processInput(value:string|number|boolean){
    if(typeof value==='string'){
        return value.trim().toLowerCase();
    }
    else if(typeof value==='number'){
        return value*10;
    }
    else{
        return value? 'Active':'Inactive';
    }
}
console.log(processInput('   TypeScript  '));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

function formatCoordinate(coordinate:readonly[number,number,string]){
    const [latitude, longitude, locationName]=coordinate;
    return `"Location: ${locationName} (${latitude}, ${longitude})"`;
}
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

function concatenateArrays<T>(...arrays: T[][]){
    return arrays.flat();
}
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

interface Course{
    title:string;
    students:number;
    isPublished:boolean;
}
function getPopularCourses(
    courses:Course[],
    minStudents:number
):Course[]{
    return courses.filter((course)=>{
        return course.isPublished===true&& course.students>=minStudents;

    });
}
const courses:Course[]=[
    { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }  
];

console.log(getPopularCourses(courses, 80));

function pluckValues<T,K extends keyof T>(
    items:T[],
    key:K
):T[K][]{
    return items.map(item=>item[key]);
}
const users=[
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
]
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));


function validateAgeAsync(age:number):Promise<string>{
    return new Promise((resolve,reject)=>{
        if(age>=18){
            setTimeout(()=>{
                resolve("Access Granted");
            },1000)

        }
        else{
            reject(new Error("Access Denied:Must be 18 or older"))
        }
    })
}
validateAgeAsync(20)
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error.message));
validateAgeAsync(15)
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error.message));




