let active="C Lang";
let language='C';
function openFullscreen() {
    var elem = document.getElementById("container");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function changeLang(value) {
    var id = document.getElementById('lang');
    switch(value.innerHTML) {
        case "C Lang":
            editor.session.setMode("ace/mode/c_cpp");
            editor.setValue(clang);
            active="C Lang";
          break;
        case "C++":
            editor.session.setMode("ace/mode/c_cpp");
            editor.setValue(cpp);
            active="C++";
          break;
        case "C++14":
          editor.session.setMode("ace/mode/c_cpp");
          editor.setValue(cpp14);
          active="C++14";
        break;
        case "Java":
            editor.session.setMode("ace/mode/java");
            editor.setValue(javax);
            active="Java";
          break;
        case "Python3":
            editor.session.setMode("ace/mode/python");
            editor.setValue(python);
            active="Python";
          break;
        default:
            editor.session.setMode("ace/mode/c_cpp");
            editor.setValue(clang);
            active="C Lang";
      }
    id.innerHTML = value.innerHTML;
  }


  function changeTheme(value) {
    switch(value) {
        case "Monokai":
            editor.setTheme("ace/theme/monokai");
          break;
        case "Terminal":
            editor.setTheme("ace/theme/terminal");
            break;
        case "Eclipse":
            editor.setTheme("ace/theme/eclipse");
            break;
        case "Xcode":
            editor.setTheme("ace/theme/xcode");
            break;
        default:
            editor.setTheme("ace/theme/monokai");
    }
  }

// Autosave after every 10 second 

window.setInterval(function(){
    save();
}, 10000);


function save(){
  switch(active) {
    case "C Lang":
        clang=editor.getValue();
      break;
    case "C++":
        cpp=editor.getValue();
      break;
      case "C++14":
        cpp14=editor.getValue();
      break;
     case "Java":
        javax=editor.getValue();
      break;
    case "Python3":
        python=editor.getValue();
      break;
    default:
        clang=editor.getValue();
  }
}


function Reset(){
    switch(active) {
        case "C Lang":
            editor.session.setMode("ace/mode/c_cpp");
            clang=clang_i;
            editor.setValue(clang);
            active="C Lang";
          break;
        case "C++":
            editor.session.setMode("ace/mode/c_cpp");
            cpp=cpp_i;
            editor.setValue(cpp);
            active="C++";
          break;
          case "C++14":
            editor.session.setMode("ace/mode/c_cpp");
            cpp14=cpp14_i;
            editor.setValue(cpp14);
            active="C++14";
          break;
        case "Java":
            editor.session.setMode("ace/mode/java");
            javax=java_i;
            editor.setValue(javax);
            active="Java";
          break;
        case "Python3":
            editor.session.setMode("ace/mode/python");
            python=python_i;
            editor.setValue(python);
            active="Python";
          break;
        default:
            editor.session.setMode("ace/mode/c_cpp");
            clang=clang_i;
            editor.setValue(clang);
            active="C Lang";
      }
}

function Run(submit){
  save();
  switch(active) {
      case "C Lang":
          language='C';
        break;
      case "C++":
        language='CPP';
        break;
      case "C++14":
        language='CPP14';
        break;
      case "Java":
        language='JAVA';
        break;
      case "Python3":
        language='PYTHON3';
        break;
      
      default:
        language='C';
    }
    Check(submit);
}
