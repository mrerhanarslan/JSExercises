const myStudents=[
  {name:"erhan",surname:"arslan",age:37,
  lessons:[
    {lessonName:"Math",instructure:"borahan",day:"Monday"},
    {lessonName:"Physics",instructure:"ceyhun",day:"Wednesday"},
    {lessonName:"IT",instructure:"celal",day:"Friday"}
  ]},
  {name:"neslihan",surname:"arslan",age:35,
    lessons:[
      {lessonName:"Math",instructure:"borahan",day:"Monday"},
      {lessonName:"Physics",instructure:"ceyhun",day:"Wednesday"},
      {lessonName:"IT",instructure:"celal",day:"Friday"}
    ]},
  {name:"cihan",surname:"arslan",age:8,
    lessons:[
      {lessonName:"English",instructure:"borahan",day:"Tuesday"},
      {lessonName:"Art",instructure:"ceyhun",day:"Thursday"},
      {lessonName:"Music",instructure:"celal",day:"Friday"}
    ]},
  {name:"aylin",surname:"arslan",age:6,
    lessons:[
      {lessonName:"Nature",instructure:"borahan",day:"Monday"},
      {lessonName:"Art",instructure:"ceyhun",day:"Tueasday"},
      {lessonName:"Dance",instructure:"celal",day:"Wednesday"}
    ]}
]


const newStudents=myStudents.reduce((preValue,currValue,indx)=>{

  let newLessons=currValue.lessons.map((lesson)=>
  {
    if (lesson.day=="Wednesday")
      preValue.push(currValue);
  });

  if(newLessons.length>0)
  {
    console.log(currValue.name);

  }
  return preValue;
},[]);

console.log(newStudents);


const myStr="((((((44567***))*))))";

let cnt=
  myStr.split("").reduce((preval,curval,index)=>
{
  if(curval==="(")
  {
    preval++;
  }
  else if(curval===")")
  {
    preval--;
  }
  return preval
},0);

if(cnt===0)
  console.log("Balanced");
else
  console.log("Unbalanced");

const myNumbers=[1,2,3,4,5,6,7,8,9];

myNumbers.filter((number)=>number%2?number:null).
map((newnum)=>newnum*newnum).
reduce((preVal,curVal)=>
{
  if (curVal>=5)
    preVal.push(curVal);
  return preVal;
},[]).forEach((myItem)=>console.log(myItem));

