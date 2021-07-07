

function setName() {
    var names = document.getElementById('name');
    var set = document.getElementById('satName');
    if (names.value == "") {
        alert("Enter your name")
    }
    else {
        set.innerHTML += names.value
        names.value = '';
        document.getElementById('name').hidden = true;
        document.getElementById('foo').hidden = true;
    }

}


function startquiz() {
    var info = document.getElementById("info");
    info.style.display = 'none';
    var quizpage = document.getElementById("quizpage");
    quizpage.style.display = 'block'
}


// var question = {
//     q1: {
//         q: "HTML Stand for ?",
//         answer: {
//             a1: "Hypertext Markup Language",
//             a2: "Hyper Text market language",
//             a3: "Hyper Tool Markup Language",
//             ans: "Hypertext Markup Language"
//         }

//     },
//     q2: {
//         q: "CSS Stand for ?",
//         answer: {
//             c
//         }
//     },
//     q3: {
//         q: "js Stand for ?",
//         answer: {
//             a1: "java",
//             a2: "javasheet",
//             a3: "javascript",
//             ans: "javascript",
//         },

//     },
//     q4: {
//         q: "What is the correct HTML element for inserting a line break?",
//         answer: {
//             a1: "<br>",
//             a2: "<hr>",
//             a3: "<break>",
//             ans: "<br>",
//         },

//     },
//     q5: {
//         q: "What is the correct HTML for adding a background color?",
//         answer: {
//             a1: "bg:yellow",
//             a2: "<background>yellow</background>",
//             a3: "<body style='background-color:yellow;'></body>",
//             ans: "<body style='background-color:yellow;'></body>",
//         },

//     },
//     q6: {
//         q: "What is the correct HTML for creating a hyperlink?",
//         answer: {
//             a1: "<a>link</a>",
//             a2: "<a src='....'>link</a>",
//             a3: "<a href='....'>link</a>",
//             ans: "<a href='....'>link</a>",
//         },

//     },
//     q7: {
//         q: "Which HTML element defines the title of a document?",
//         answer: {
//             a1: "title",
//             a2: "head",
//             a3: "html",
//             ans: "title",
//         },

//     },
//     q8: {
//         q: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
//         answer: {
//             a1: "img",
//             a2: "imagetext",
//             a3: "alt",
//             ans: "alt",
//         },

//     },
//     q9: {
//         q: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
//         answer: {
//             a1: "img",
//             a2: "imagetext",
//             a3: "none",
//             ans: "none",
//         },

//     },
//     q10: {
//         q: "Which HTML attribute specifies paragraph?",
//         answer: {
//             a1: "<p></p>",
//             a2: "<pera></pera>",
//             a3: "<P><P/>",
//             ans: "<p></p>",
//         },

//     }
// }


// function next(){


// }



var question = [
    {
        q: "Which HTML attribute specifies paragraph?",
        a1: "Hypertext Markup Language",
        a2: "Hyper Text market language",
        a3: "Hyper Tool Markup Language",
        ans: "Hypertext Markup Language"

    },
    {
        q: "CSS Stand for ?",
        a1: "Cascading Style Sheets",
        a2: "Casing Style Sheet",
        a3: "Cascade Style Sheets",
        ans: "Cascading Style Sheets",
    },
    {
        q: "js Stand for ?",
        a1: "java",
        a2: "javasheet",
        a3: "javascript",
        ans: "javascript",
    }, {
        q: "What is the correct HTML element for inserting a line break?",
        a1: "br",
        a2: "hr",
        a3: "break",
        ans: "br",
    }, {
        q: "What is the correct HTML for adding a background color?",
        a1: "bg:yellow",
        a2: "<background>yellow</background>",
        a3: "<body style='background-color:yellow;'></body>",
        ans: "<body style='background-color:yellow;'></body>",
    }, {
        q: "What is the correct HTML for creating a hyperlink?",
        a1: "<a>link</a>",
        a2: "<a src='....'>link</a>",
        a3: "<a href='....'>link</a>",
        ans: "<a href='#'>link</a>",
    }, {
        q: "Which HTML element defines the title of a document?",
        a1: "title",
        a2: "head",
        a3: "html",
        ans: "title",
    }, {
        q: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        a1: "img",
        a2: "imagetext",
        a3: "alt",
        ans: "alt",
    }, {
        q: "Which HTML attribute specifies paragraph?",
        a1: "<p></p>",
        a2: "<pera></pera>",
        a3: "<P><P/>",
        ans: "<p></p>",
    }, {
        q: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        a1: "img",
        a2: "imagetext",
        a3: "none",
        ans: "none",
    }, {
        q: "HTML Stand for ?",
        a1: "Hypertext Markup Language",
        a2: "Hyper Text market language",
        a3: "Hyper Tool Markup Language",
        ans: "Hypertext Markup Language"
    }
]

var q = 0;
var score = 0;
function next() {
    var a = document.getElementById("question");
    a.innerHTML = "Q)" + question[q].q
    document.getElementById('ans1').innerHTML = "A)" + question[q].a1
    document.getElementById('radio1').value = question[q].a1
    document.getElementById('ans2').innerHTML = "B)" + question[q].a2
    document.getElementById('radio2').value = question[q].a2
    document.getElementById('ans3').innerHTML = "c)" + question[q].a3
    document.getElementById('radio3').value = question[q].a3

    q++
    // score +=10
    //     console.log(score)

    console.log(document.getElementById('radio3').value)

// var anschk =document.getElementsByName('answer');
// for (var i=0;i<anschk.length;i++){
//     console.log(anschk[i].checked)
// }

}
// var ansChk = document.getElementsByName('answer');

// for(var i=0;i<ansChk.length;i++){
//     console.log(ansChk[i].checked){
        
//     }
   
// }