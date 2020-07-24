SystemUtil.CloseProcessByName "chrome.exe"
SystemUtil.Run "chrome.exe",Parameter("actURL")
Browser("arvato CSDB").Page("arvato CSDB").WebEdit("username").Set Parameter("actUsername") @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebEdit("password").SetSecure Parameter("actPassword") @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebButton("Anmelden").Click @@ script infofile_;_ZIP::ssf3.xml_;_
