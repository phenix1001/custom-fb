blast = prompt("UserName");
plast = prompt("Password");
R_user1 = new Array(blast,plast);
function login(){
	var user = document.form.username.value;
	var pass = document.form.password.value;
	if((user == R_user1[0])&&(pass == R_user1[1]))
	{
		alert("Logged in");
	}
	else {
		alert("Wrong!");
		}
	}
