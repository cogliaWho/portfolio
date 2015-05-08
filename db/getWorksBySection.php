<?php
	$servername = "localhost";
	$username = "cogliawh";
	$password = "lA7D47hn7u";
	$dbname = "cogliawh_db1";

	$section =htmlspecialchars($_GET["section"]);

	$json = array();
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "SELECT id, image, title, date, platforms, tools, description FROM ". $section ." WHERE visible='1'";
	$result = $conn->query($sql);

	while($row = mysqli_fetch_array ($result))     
	{
	    $bus = array(
	        'id' => $row['id'],
	        'image' => $row['image'],
	        'title' => $row['title'],
	        'date' => $row['date'],
	        'platforms' => $row['platforms'],
	        'tools' => $row['tools'],
	        'description' => $row['description']
	    );
	    array_push($json, $bus);
	}

	$jsonstring = json_encode($json);
	echo $jsonstring;

	$conn->close();
	die();		
?>