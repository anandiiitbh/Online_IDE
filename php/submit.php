<?php
// if(!empty($_POST['code']) && !empty($_POST['fname'])){
$data = "Programming LANG:\t".$_POST['lang']."\n\n========================= CODE =========================\n".$_POST['code']."\n\n========================= INPUT =========================\n".$_POST['input']."\n\n========================= OUTPUT =========================\n".$_POST['output'];
$fname = $_POST['fname']. ".txt";

$file = fopen("upload/" .$fname, 'w');//creates new file
fwrite($file, $data);
fclose($file);
// }

?>