let akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let akanFemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function akanName() {
    var dateOfBirth = document.getElementById("date").value;
    var monthOfBirth = document.getElementById("month").value;
    var yearOfBirth = document.getElementById("year").value;
    var gender = document.getElementById("gender").value;

    let birthDay = new Date(parseInt(monthOfBirth) , parseInt(dateOfBirth), 0, 0, 0, 0);
    console.log("birthday "+birthDay);
    var dateStr = birthDay.toDateString();
    let birthDate = birthDay.getDay();

    if (gender === "Male") {
        let name = akanMaleName[birthDate];
        let test = document.getElementById("test");
        test.innerHTML='You were born on ' + dateStr + 'Your Akan name is ' + name;
    }
    if (gender === "Female") {
        let name = akanFemaleName[birthDate];
        let test = document.getElementById('test');
        test.innerHTML= 'You were born on ' + dateStr + 'Your Akan name is ' + name;
    }
    if (dateOfBirth === "") {
        alert('Please input date of birth');
    }
    if (monthOfBirth === "") {
        alert('Please input month of birth');
    }
    if (yearOfBirth === "") {
        alert('Please input year of birth');
    }
}
