// var students =["Huzaifa","Asad", "Muhammad","Rashid","Waseem" ];
// console.log(students);
// students.pop();
// console.log(students);
// students.push("Azan");
// console.log(students);
// students.shift()
// console.log(students);
// students.unshift("Abdul Sami");
// console.log(students);
// students.unshift("Mazher",true,100,false);
// console.log(students);
// students.splice(4,3)
// console.log(students);
// students.splice(3,0,"Mazher",true,100,false)
// console.log(students);

// Q.1 & Q.2

var students=[];

console.log(students);
// Q.3

var cityName=["karachi", "lahore", "Islamabad","quetta"];
console.log(cityName);

// Q.4

var marks=[340,560,380,440,510]
console.log(marks);

// Q.5

var bolean=[true,false]
console.log(bolean);

// Q.6

var mixarray=["Saeed",750,true,"ahmed",890,740,false]
console.log(mixarray);

// Q.7

var qualifications=["SSC","HSC","BCS","BS","B.Com","MS","M.Phil","Phd"];

document.write("<br> QUALIFICATIONS <br> ");
document.write("<br> 1) "+qualifications[0]);
document.write("<br> 2) "+qualifications[1]);
document.write("<br> 3) "+qualifications[2]);
document.write("<br> 4) "+qualifications[3]);
document.write("<br> 5) "+qualifications[4]);
document.write("<br> 6) "+qualifications[5]);
document.write("<br> 7) "+qualifications[6]);
document.write("<br> 8) "+qualifications[7]);

// Q.8

var students=["Michel","John","Tony"];
var marks=[320,230,480];
var ttl=500;
document.write("<br><br> Score of "+students[0]+" is "+marks[0]+". Percentage: "+((marks[0]/ttl)*100)+"%");
document.write("<br>Score of "+students[1]+" is "+marks[1]+". Percentage: "+((marks[1]/ttl)*100)+"%");
document.write("<br>Score of "+students[2]+" is "+marks[2]+". Percentage: "+((marks[2]/ttl)*100)+"%");

// Q.9

var colorName=["Blue","Red","White","Black"];
document.write("<br><br> Initilization =>> "+colorName);
var coloradd=prompt("Enter color name do you want to add in begininng of array")
colorName.unshift(coloradd);
document.write("<br> a) "+colorName);
var coloradd=prompt("Enter color name do you want to add in end of array")
colorName.push(coloradd);
document.write("<br> b) "+colorName)
var coloradd1=prompt("Enter color name do you want to add in begininng of array")
var coloradd2=prompt("Enter color name do you want to add in begininng of array")
colorName.unshift(coloradd1,coloradd2);
document.write("<br> c) "+colorName);
colorName.shift()
document.write("<br> d) "+colorName);
colorName.pop()
document.write("<br> e) "+colorName);
var coloradd3=prompt("Enter color name do you want to add ");
var pos=prompt("Enter posotion where you want to add color name ");
colorName.splice(pos,0,coloradd3);
document.write("<br> f) "+colorName);
var pos2=prompt("Enter how many color do you want to delete ");
var pos3=prompt("Enter posotion from where you want to delete color name ");
colorName.splice(pos3,pos2);
document.write("<br> g) "+colorName);

// Q.10

var score=[320,230,480,120];
document.write("<br><br> Score of students : "+score);
score.sort();
document.write("<br> Ordered Score of students : "+score);

// Q.11

var cities=["Karachi", "Lahore", "Islamabad","Quetta","Peshawer"];
document.write("<br><br> Cities List");
document.write("<br>"+cities);
var seclectedcities=cities.slice(1, 2);
document.write("<br> Selected Cities ");
document.write("<br> " +seclectedcities);


// Q.12

var pets = ["This","is","my","cat."]
document.write("<br><br>"+pets);
pets.join()
document.write("<br>"+pets);


// Q.13

var comp_device =[]
comp_device[0]="Keyboard"
comp_device[1]="Mouse"
comp_device[2]="Printer"
comp_device[3]="Monitor"
document.write("<br><br> Devices:");
document.write("<br>"+comp_device);
document.write("<br><br> Out:");
document.write("<br>"+comp_device[0]);
document.write("<br> Out:");
document.write("<br>"+comp_device[1]);
document.write("<br> Out:");
document.write("<br>"+comp_device[2]);
document.write("<br> Out:");
document.write("<br>"+comp_device[3]);



// Q.14
var comp_device =[]
comp_device[0]="Keyboard"
comp_device[1]="Mouse"
comp_device[2]="Printer"
comp_device[3]="Monitor"
document.write("<br><br> Devices:");
document.write("<br>"+comp_device);
document.write("<br><br> Out:");
document.write("<br>"+comp_device[3]);
document.write("<br> Out:");
document.write("<br>"+comp_device[2]);
document.write("<br> Out:");
document.write("<br>"+comp_device[1]);
document.write("<br> Out:");
document.write("<br>"+comp_device[0]);
document.write("<br><br>");


// Q.15
    
var options = ["Motrolla", "Nokia", "Sony", "Hair"];
var dropdownHTML = '<select id="myDropdown">';
    
for (var i = 0; i < options.length; i++) {
    dropdownHTML += '<option value="' + options[i] + '">' + options[i] + '</option>';
}
    
dropdownHTML += '</select>';
document.write(dropdownHTML);