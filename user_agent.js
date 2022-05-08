blast = prompt("UserName");
plast = prompt("Password");
R_user1 = new Array("Jerry",22222);
R_user2 = new Array(blast,plast);
function login(){
	var user = document.form.username.value;
	var pass = document.form.password.value;
	if((user == R_user1[0])&&(pass == R_user1[1])||(user == R_user2[0])&&(pass == R_user2[1]))
	{
		alert("Logged in");
		window.location = "file:///C:/Users/Sweet/Desktop/New%20folder%20(3)/index.html"
	}
	else {
		alert("Wrong!");
		}
	}