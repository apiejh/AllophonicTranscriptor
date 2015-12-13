<?PHP 
header('Content-Type: text/html; charset=utf-8');
$value = $_POST["queryValue"];
$fp = fopen('output.txt', "a+");
fwrite($fp, $value."\r\n");
fclose($fp);
?>