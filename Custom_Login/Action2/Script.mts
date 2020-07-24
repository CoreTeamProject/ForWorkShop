If Parameter("actClient") <> "" Then
	Browser("arvato CSDB").Page("arvato CSDB").WebList("Mandant").Click @@ script infofile_;_ZIP::ssf1.xml_;_
	Browser("arvato CSDB").Page("arvato CSDB").WebElement("QAMandant").Click @@ script infofile_;_ZIP::ssf2.xml_;_
	Browser("arvato CSDB").Page("arvato CSDB").WebButton("Anmelden").Click @@ script infofile_;_ZIP::ssf3.xml_;_
End If
