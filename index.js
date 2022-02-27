







const student_submit = document.getElementById('submit');
 student_submit.addEventListener('click',(e) =>{
    e.preventDefault();

    const student_name = document.getElementById("name").value;
    const student_age = document.getElementById('studentage').value;
    const student_roll = document.getElementById('studentroll').value;
     const additems = document.getElementById('student1');
     const obj = {
         name:student_name,
         age:student_age,
         roll:student_roll,
     };

     localStorage.setItem("student",JSON.stringify(obj));
     console.log(localStorage.getItem("student"));

    const mdiv = document.createElement('div');
    mdiv.style.height = "100px";
    mdiv.style.width = "300px";
     const studentname = document.createElement('h3');
     const studentage = document.createElement('h3');
     const studentroll = document.createElement('h3');
     studentname.innerText = "Student-Name:" + student_name;
     studentroll.innerText = "Student-Roll: " + student_roll;
     studentage.innerText = "Student-Age: " +  student_age;
     mdiv.append(studentname);
     mdiv.append(studentroll);
     mdiv.append(studentage);
     additems.appendChild(mdiv);
     console.log(mdiv);
 } );