SystemUtil.CloseProcessByName "chrome.exe"
SystemUtil.Run "Chrome.exe",parameter("actURL")

Browser("Corporate Serialization").Page("Corporate Serialization").WebEdit("loginForm:username").Set parameter("actUsername") @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Corporate Serialization").Page("Corporate Serialization").WebEdit("loginForm:password").SetSecure parameter("actpassword") @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Corporate Serialization").Page("Corporate Serialization").WebButton("loginForm:btnLogin").Click @@ hightlight id_;_69668_;_script infofile_;_ZIP::ssf7.xml_;_
