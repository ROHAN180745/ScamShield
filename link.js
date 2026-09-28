function checklink(){
  let link=document.getElementById("linktext").value.toLowerCase();
  let score=0;

    if (!link.startsWith("https://")) score++;

    if (link.includes("@")) score++;

    if (link.includes("bit.ly")) score++;

    if (link.includes("tinyurl")) score++;

    if (link.includes("login")) score++;

    if (link.includes("verify")) score++;

    if (link.includes("account")) score++;

    if (link.includes("secure")) score++;

    let result = document.getElementById("result");

    if(score>=3){
      result.innerHTML=`<h2>🔴 High Risk</h2>
            <p>This link contains several suspicious signs.</p>
            <p>⚠️ Do not open the link or enter your personal information.</p>`
    }

     else if (score >= 1) {

        result.innerHTML = `
            <h2>🟠 Suspicious</h2>
            <p>This link contains some warning signs.</p>
            <p>⚠️ Verify the website before opening it.</p>
        `;

    } else {

        result.innerHTML = `
            <h2>🟢 No Major Warning Signs</h2>
            <p>We did not detect common suspicious patterns.</p>
            <p>Still, check the website carefully before entering information.</p>
        `;
    }
  }
