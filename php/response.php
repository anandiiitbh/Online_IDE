<?php
$url="https://ide.geeksforgeeks.org/main.php";
$url_s="https://ide.geeksforgeeks.org/submissionResult.php";
$language=$_POST['lang'];//'Cpp14';
$code=$_POST['code'];//"#include<iostream>\nusing namespace std;\n\nint main() {\n\treturn 0;\n}";
$input=$_POST['input'];//"";
$save=$_POST['save'];//"false";

// for testing uncomment below lines .. else comment this

// $language='Cpp14';
// $code="#include<iostream>\nusing namespace std;\n\nint main() {\n\treturn 0;\n}";
// $input="";
// $save="false";




$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, 
          http_build_query(array('lang' => $language, 'code' => $code,'input'=>$input,'save'=>$save)));

// Receive server response ...
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);

curl_close ($ch);

$Submission =json_decode($server_output,true);
// Further processing ...
if ($Submission["status"]=="SUCCESS" ) {
  // $sid=$Submission['sid'];
 
  function getAns($sid,$url_s) {
    $ch1 = curl_init();
    curl_setopt($ch1, CURLOPT_URL,$url_s);
    curl_setopt($ch1, CURLOPT_POST, 1);
    curl_setopt($ch1, CURLOPT_POSTFIELDS, 
              http_build_query(array('sid' => $sid,'requestType'=> 'fetchResults')));
    curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
    $server_output1 = curl_exec($ch1);
    curl_close ($ch1);
    return $server_output1;
  }
  
  $status="IN-QUEUE";
  $print="";
  
  while($status=="IN-QUEUE"){
    $status1=getAns($Submission["sid"],$url_s);
    $print =$status1;
    $status2 =json_decode($status1,true);
    $status=$status2["status"];
  }
  echo $print;
  
}
?>



