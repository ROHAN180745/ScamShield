function callercheck(){
  let score=0;
  let otp=document.getElementsByName("otp");
  let password=document.getElementsByName("password");
  let bank=document.getElementsByName("bank");
  let act=document.getElementsByName("act");
  let claim=document.getElementsByName("claim");
  let money=document.getElementsByName("money");

  if(otp[0].checked) score++;
  if(password[0].checked) score++;
  if(bank[0].checked) score++;
  if(act[0].checked) score++;
  if(claim[0].checked) score++;
  if(money[0].checked) score++;
  
  let result=document.getElementById("result");

  if (score >= 4) {
    result.innerHTML = `
        <h2>🔴 High Risk</h2>
        <p>This call has several warning signs.</p>
    `;
}
else if (score >= 2) {
    result.innerHTML = `
        <h2>🟠 Suspicious</h2>
        <p>This call has some warning signs.</p>
    `;
}
else {
    result.innerHTML = `
        <h2>🟢 Low Risk</h2>
        <p>No major warning signs were detected.</p>
    `;
}

}