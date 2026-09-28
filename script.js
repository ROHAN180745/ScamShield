
function checkMessage(){
  let message=document.getElementById("messageInput").value.toLowerCase();
  let score=0;
  
  if (message.includes("otp")) score++;
    if (message.includes("pin")) score++;
    if (message.includes("password")) score++;
    if (message.includes("bank details")) score++;
    if (message.includes("urgent")) score++;
    if (message.includes("click")) score++;
    if (message.includes("verify")) score++;
    if (message.includes("won")) score++;
    if (message.includes("prize")) score++;
    if (message.includes("reward")) score++;

    let result = document.getElementById("result");

    if (score >= 3) {

        result.innerHTML = `
            <h2>🔴 High Risk</h2>
            <p>This message contains several suspicious signs.</p>
            <p>⚠️ Do not share OTP, PIN or bank details.</p>
        `;

    } else if (score >= 1) {

        result.innerHTML = `
            <h2>🟠 Suspicious</h2>
            <p>This message contains some warning signs.</p>
            <p>⚠️ Verify the message before taking any action.</p>
        `;

    } else {

        result.innerHTML = `
            <h2>🟢 No Major Warning Signs</h2>
            <p>We did not detect common scam warning signs.</p>
            <p>Still, stay careful with unknown messages.</p>
        `;
    }
}
