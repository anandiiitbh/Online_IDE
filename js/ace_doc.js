var editor = ace.edit("editor");


editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/c_cpp");
editor.setValue("#include<stdio.h>\n\nint main(){\n\t//Do your code here\n\tprintf(\"Hello World :)\");\n\treturn 0;\n}");
document.getElementById('editor').style.fontSize='13px';

let clang_i="#include<stdio.h>\n\nint main(){\n\t//Do your code here\n\tprintf(\"Hello World :)\");\n\treturn 0;\n}";
let cpp_i="#include<iostream>\nusing namespace std;\n\nint main(){\n\t//Do your code here\n\tcout<<\"hello world\";\n\treturn 0;\n}";
let java_i="// Your First Program\n\nclass HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello, World!\");\n\t}\n}";
let python_i="# Do your code Here\n\nprint('Hello, world!')";
let cpp14_i="#include<bits/stdc++.h>\nusing namespace std;\n\nint main(){\n\t//Do your code here\n\tcout<<\"hello world\";\n\treturn 0;\n}";


let clang=clang_i;//"#include<stdio.h>\n\nint main(){\n\t//Do your code here\n\tprintf(\"Hello World :)\");\n\treturn 0;\n}";
let cpp=cpp_i;//"#include< iostream >\nusing namespace std;\n\nint main(){\n\t//Do your code here\n\tcout<<\"hello world\";\n\treturn 0;\n}";
let cpp14=cpp14_i;//"#include< bits/stdc++.h >\nusing namespace std;\n\nint main(){\n\t//Do your code here\n\tcout<<\"hello world\";\n\treturn 0;\n}";
let javax=java_i;//"// Your First Program\n\nclass HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello, World!\");\n\t}\n}";
let python=python_i;//"# Do your code Here\n\nprint('Hello, world!')";


