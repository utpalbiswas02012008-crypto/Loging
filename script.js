document.addEventListener("DOMContentLoaded",() => {
	const loginForm = document.getElementById("loginForm");
	if(loginForm) {
		loginForm.addEventListener("submit",function (e) {
			e.preventDefault();
			
			const name = document.getElementById("studentName").value;
						const id = document.getElementById("studentId").value;
			const teacher = document.getElementById("teacherName").value;
			const Password = document.getElementById("Password").value;
			if(Password ==="exam123") {
			sessionStorage.setItem("studentName", name);
window.location.href = "exam.html";
			} else {
alert("Invalid exam Password!");
			}
		});
	}
const examForm = document.getElementById("examForm");
if (examForm) {
examForm.addEventListener("submit", function (e) {
e.preventDefault();
let score = 0;
if(document.querySelector('input[name="q1"]:checked')?.value ==="paris")score++;
if(document.querySelector('input[name="q2"]:checked')?.value ==="javaScript")score++;
window.location.href = 'result.html?score=${score}';
   });
}
});		