<?php
session_start();

// Array of colors
$colors = array('red', 'blue', 'green', 'white');

// CHecks if the button is pressed
if (isset($_POST['changeColor'])) {
	// Get the current color index from the session, default to 0
	$currentColorIndex = isset($_SESSION['currentColorIndex']) ? $_SESSION['currentColorIndex'] : 0;

	// Increments the index and handles overflow
	$currentColorIndex = ($currentColor + 1) % count($colors);

	// Saves the updated index to the session
	$_SESSION['currentColorIndex'] = $currentColorIndex;
}

// Gets the current color based on the index
$currentColor = $colors[$currentColorIndex];

?>

<?php
session_start();

// Initialize the result in session if not set
if(!isset($_SESSION['result'])) {
	$_SESSION['result'] = '';
}

// Handles form submissions
if ($_SESSION['REQUEST_METHOD'] === 'POST') {
	if(isset($_POST['clear'])) {
		$_SESSION['result'] = '';
	}
	elseif (isset($_POST['number']) || isset($_POST['operator']) || isset($_POST['decimal'])) {
		$_SESSION['result'] .= isset($_POST['number']) ? $_POST['number'] : '';
		$_SESSION['result'] .= isset($_POST['operator']) ? $_POST['operator'] : '';
		$_SESSION['result'] .= isset($_POST['decimal']) ? $_POST['decimal'] : '';
	} elseif (isset($_POST['calculate']) {
	   try {	
		   $result = eval('return' . $_SESSION['result'] . ';');
		   $_SESSION['result'] = $result;
	   } catch (Exception $e) {
	   	// Handles any potential errors during evaluation 
		$_SESSION['result'] = 'Error';
	   }
	}
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PHP Programs</title>
	<style>
	  body {
		background-color: <?php echo $currentColor; ?>;
	  }
	  button {
	  	margin-top: 20px;
		padding: 10px;
	  }

	  input, button {
		font-size: 18px;
		margin: 5px;
		padding: 10px;
	  }

	</style>
</head>

<body>

<form method="post">
	<button type="submit" name="changeColor">Change Background Color</button> 
</form>

<h2>Simple Calculator (PHP)</h2>
    <form method="post">
	<input type="text" name="result" value="<?php echo htmlspecialchars($_SESSION['result']); ?>" disabled>
	<br>
	<button type="submit" name="clear" value="clear">C</button>
	<button type="submit" name="number" value="7">7</button>
	<button type="submit" name="number" value="8">8</button>
	<button type="submit" name="number" value="9">9</button>
	<button type="submit" name="operator" value="/">/</button>
	<br>
	<button type="submit" name="number" value="4">4</button>
	<button type="submit" name="number" value="5">5</button>
	<button type="submit" name="number" value="6">6</button>
	<button type="submit" name="operator" value="*">*</button>
	<br>
	<button type="submit" name="number" value="1">1</button>
	<button type="submit" name="number" value="2">2</button>
	<button type="submit" name="number" value="3">3</button>
	<button type="submit" name="operator" value="-">-</button>
	<br>
	<button type="submit" name="number" value="0">0</button>
	<button type="submit" name="decimal" value=".">.</button>
	<button type="submit" name="calculate" value="=">=</button>
	<button type="submit" name="operator" value="+">+</button>	
    </form>

<?php
// Check if 'name' parameter is present in the URL
if (isset($_GET['name'])) {
	$userName = htmlspecialchars($_GET['name']);
	echo "<h2>Welcome, $userName!</h2>";
} else {
	echo "<h2>Hello, Stranger.</h2>";
	echo "<p>Please include your name in the URL. Example: http://yourdomain.com/your-program.php?name=John</p>";
}
?>

</body>
</html>
