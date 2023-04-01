//top-section elements
const schoolLogoEle = document.getElementById("logo");
const schoolNameEle = document.getElementById("schoolName");
const schoolAddressEle = document.getElementById("schoolAddress");
const schoolWebsiteEle = document.getElementById("schoolWebsite");
const academicSessionEle = document.getElementById("academicSession");
const schoolarNoEle = document.getElementById("schoolarNo");
const rollNoEle = document.getElementById("rollNo");
const fathersNameEle = document.getElementById("fathersName");
const attendenceEle = document.getElementById("attendence");
const classEle = document.getElementById("class");
const nameOfStudentEle = document.getElementById("nameOfStudent");
const mothersNameEle = document.getElementById("mothersName");
const dateOfBirthEle = document.getElementById("dateOfBirth");

//Table English-elements 
const engTermIBestScoreEle = document.getElementById("engTermIBestScore");
const engTermIEle = document.getElementById("engTermI");
const engTermIMarksObtEle = document.getElementById("engTermIMarksObt");
const engTermIIBestScoreEle = document.getElementById("engTermIIBestScore");
const engTermIIEle = document.getElementById("engTermII");
const engTermIIMarksObtEle = document.getElementById("engTermIIMarksObt");
const engTotalEle = document.getElementById("engTotal");
const engGradeEle = document.getElementById("engGrade");

//Table Hindi-elements 
const hinTermIBestScoreEle = document.getElementById("hinTermIBestScore");
const hinTermIEle = document.getElementById("hinTermI");
const hinTermIMarksObtEle = document.getElementById("hinTermIMarksObt");
const hinTermIIBestScoreEle = document.getElementById("hinTermIIBestScore");
const hinTermIIEle = document.getElementById("hinTermII");
const hinTermIIMarksObtEle = document.getElementById("hinTermIIMarksObt");
const hinTotalEle = document.getElementById("hinTotal");
const hinGradeEle = document.getElementById("hinGrade");


//Table Maths-elements 
const mathTermIBestScoreEle = document.getElementById("mathTermIBestScore");
const mathTermIEle = document.getElementById("mathTermI");
const mathTermIMarksObtEle = document.getElementById("mathTermIMarksObt");
const mathTermIIBestScoreEle = document.getElementById("mathTermIIBestScore");
const mathTermIIEle = document.getElementById("mathTermII");
const mathTermIIMarksObtEle = document.getElementById("mathTermIIMarksObt");
const mathTotalEle = document.getElementById("mathTotal");
const mathGradeEle = document.getElementById("mathGrade");


//Table Total-elements 
const totalTermIBestScoreEle = document.getElementById("totalTermIBestScore");
const totalTermIEle = document.getElementById("totalTermI");
const totalTermIMarksObtEle = document.getElementById("totalTermIMarksObt");
const totalTermIIBestScoreEle = document.getElementById("totalTermIIBestScore");
const totalTermIIEle = document.getElementById("totalTermII");
const totalTermIIMarksObtEle = document.getElementById("totalTermIIMarksObt");
const totalTotalEle = document.getElementById("totalTotal");
const totalGradeEle = document.getElementById("totalGrade");

//Final Result elements
const resultEle = document.getElementById("result");
const percentageEle = document.getElementById("percentage");
const gradeEle = document.getElementById("grade");



fetch("http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521")
.then(function(response){
    return response.json();
})
.then(function(data){

    const ActualstudentData = data;
    // Insufficient Data from the above API as per the required output format

    const GradeRange = data.Response.ProgressList.stGrades;

    function gradeCalculator(marks,constant) {        
        for (let obj of GradeRange) {
            const range = obj.Range.split("-");
            const bottom = parseInt(range[0]);

            if (marks/constant >= bottom) {
                return obj.Grade;
            }
        }
    }

    //Sample Data Object to Display Response 
    const studentData = {
        schoolLogo : "https://res.cloudinary.com/dyccjncav/image/upload/v1680326008/maharajainternationalschoollogo_yecyaw.jpg",
        schoolName : "MAHARAJA INTERNATIONAL SCHOOL",
        schoolAddress : "Near Abhilasha Colony, Dewas Road, Affiliated to CBSE, Affiliation No:103131157, Ph. : 9926090005",
        academicSession : "2022-2023",
        schoolarNo : "0123",
        rollNo : "02",
        fathersName : "VISHNU BODANA",
        attendence : "131",
        class : "Nursery-A",
        nameOfStudent : "Nehal Vishnu Bodana",
        mothersName : "BHAWNA BODANA",
        dateOfBirth : "10-Aug-2018",
        marks : {
            english:{
              termIBestScore : 15 ,
              termI : 45 ,   
              termIIBestScore : 15 ,
              termII : 58 ,
            },
            hindi:{
              termIBestScore : 17 ,
              termI : 42 ,   
              termIIBestScore : 17 ,
              termII : 53 ,
            },
            maths:{
              termIBestScore : 16 ,
              termI : 33 ,   
              termIIBestScore : 16 ,
              termII : 52 ,
            },
         },
    }

    //Top-section elements   
    schoolLogoEle.src = studentData.schoolLogo ;
    schoolNameEle.textContent = studentData.schoolName ;
    schoolAddressEle.textContent = studentData.schoolAddress;
    academicSessionEle.textContent = studentData.academicSession;
    schoolarNoEle.textContent = studentData.schoolarNo;
    rollNoEle.textContent = studentData.rollNo;
    fathersNameEle.textContent = studentData.fathersName;
    attendenceEle.textContent = studentData.attendence;
    classEle.textContent = studentData.class;
    nameOfStudentEle.textContent = studentData.nameOfStudent;
    mothersNameEle.textContent = studentData.mothersName;
    dateOfBirthEle.textContent = studentData.dateOfBirth;

    //Table English elements
    const engMarks = studentData.marks.english ;
    engTermIBestScoreEle.textContent = engMarks.termIBestScore;
    engTermIEle.textContent = engMarks.termI;
    engTermIMarksObtEle.textContent = parseInt(engTermIBestScoreEle.textContent) + parseInt(engTermIEle.textContent) ;
    engTermIIBestScoreEle.textContent = engMarks.termIIBestScore;
    engTermIIEle.textContent = engMarks.termII;
    engTermIIMarksObtEle.textContent = parseInt(engTermIIEle.textContent) + parseInt(engTermIIBestScoreEle.textContent);
    engTotalEle.textContent = parseInt(engTermIMarksObtEle.textContent) + parseInt(engTermIIMarksObtEle.textContent) ;
    engGradeEle.textContent = gradeCalculator(engTotalEle.textContent,2);
    
    //Table Hindi elements
    const hinMarks = studentData.marks.hindi ;
    hinTermIBestScoreEle.textContent = hinMarks.termIBestScore;
    hinTermIEle.textContent = hinMarks.termI;
    hinTermIMarksObtEle.textContent = parseInt(hinTermIBestScoreEle.textContent) + parseInt(hinTermIEle.textContent) ;
    hinTermIIBestScoreEle.textContent = hinMarks.termIIBestScore;
    hinTermIIEle.textContent = hinMarks.termII;
    hinTermIIMarksObtEle.textContent = parseInt(hinTermIIEle.textContent) + parseInt(hinTermIIBestScoreEle.textContent);
    hinTotalEle.textContent = parseInt(hinTermIMarksObtEle.textContent) + parseInt(hinTermIIMarksObtEle.textContent) ;
    hinGradeEle.textContent = gradeCalculator(hinTotalEle.textContent,2);
    // engGradeEle.textContent = engMarks.;

    //Table Maths elements
    const mathMarks = studentData.marks.maths ;
    mathTermIBestScoreEle.textContent = mathMarks.termIBestScore;
    mathTermIEle.textContent = mathMarks.termI;
    mathTermIMarksObtEle.textContent = parseInt(mathTermIBestScoreEle.textContent) + parseInt(mathTermIEle.textContent) ;
    mathTermIIBestScoreEle.textContent = mathMarks.termIIBestScore;
    mathTermIIEle.textContent = mathMarks.termII;
    mathTermIIMarksObtEle.textContent = parseInt(mathTermIIEle.textContent) + parseInt(mathTermIIBestScoreEle.textContent);
    mathTotalEle.textContent = parseInt(mathTermIMarksObtEle.textContent) + parseInt(mathTermIIMarksObtEle.textContent) ;
    mathGradeEle.textContent = gradeCalculator(mathTotalEle.textContent,2);
    // engGradeEle.textContent = engMarks.;

    //Table Total elements
    totalTermIBestScoreEle.textContent = parseInt(engTermIBestScoreEle.textContent) + parseInt(hinTermIBestScoreEle.textContent) + parseInt(mathTermIBestScoreEle.textContent) ;
    totalTermIEle.textContent = parseInt(engTermIEle.textContent) + parseInt(hinTermIEle.textContent) + parseInt(mathTermIEle.textContent) ;
    totalTermIMarksObtEle.textContent = parseInt(engTermIMarksObtEle.textContent) + parseInt(hinTermIMarksObtEle.textContent) + parseInt(mathTermIMarksObtEle.textContent) ;
    totalTermIIBestScoreEle.textContent = parseInt(engTermIIBestScoreEle.textContent) + parseInt(hinTermIIBestScoreEle.textContent) + parseInt(mathTermIIBestScoreEle.textContent) ;
    totalTermIIEle.textContent = parseInt(engTermIIEle.textContent) + parseInt(hinTermIIEle.textContent) + parseInt(mathTermIIEle.textContent) ;
    totalTermIIMarksObtEle.textContent = parseInt(engTermIIMarksObtEle.textContent) + parseInt(hinTermIIMarksObtEle.textContent) + parseInt(mathTermIIMarksObtEle.textContent) ;
    totalTotalEle.textContent = parseInt(engTotalEle.textContent) + parseInt(hinTotalEle.textContent) + parseInt(mathTotalEle.textContent) ;
    totalGradeEle.textContent = gradeCalculator(totalTotalEle.textContent,6);

    //Final Result
    resultEle.textContent =  totalGradeEle.textContent;
    percentageEle.textContent = Math.round(parseInt(totalTotalEle.textContent)/6).toFixed(2);
    gradeEle.textContent = totalGradeEle.textContent;
     
})
