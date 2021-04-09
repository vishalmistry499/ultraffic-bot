<?php 
$uname="admin";
$pwd="admin";

session_start();

if (isset($_SESSION['uname'])){
	echo "<script>location.href='index.html'</script>"
}
else{
	if($_POST['uname']==$uname && $_POST['pwd']==$pwd){
		$_SESSION['uname']=$uname;
		echo "<script>location.href='index.html'</script>"
	}
	else{
		echo "<script>alert('wrong credentials')</script>";
		echo "<script>location.href='login.html'</script>"
	}
}




 ?>
