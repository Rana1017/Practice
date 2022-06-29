const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
///thpadai chu

const container = document.querySelector(".container"),
      pwdshowHidden = document.querySelectorAll(".showHiddenPwd"),
      pwFields = document.querySelectorAll(".password");
    
//code to hide/show pwd and change icon
pwdshowHidden.forEach(eyeIcon=>{
    eyeIcon.addEventListener("click",()=>{
        pwFields.forEach(pwField=>{
            if(pwField.type == "password"){
                pwField.type = "text";


                pwdshowHidden.forEach(icon =>{
                    icon.classList.replace("fa-eye-slash", "fa-eye")
                })
            }else{
                pwField.type = "password";

                pwdshowHidden.forEach(icon =>{
                    icon.classList.replace("fa-eye", "fa-eye-slash")
                })
            }

        })
    })
})
   