Browser("arvato CSDB").Page("arvato CSDB").WebElement("Portal").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebElement("perm_identity").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebButton("add Neu").Click @@ script infofile_;_ZIP::ssf3.xml_;_

rndno = Randomnumber(0,99)
Browser("arvato CSDB").Page("arvato CSDB").WebEdit("alias").Set Parameter("actRoleName")&rndno @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebEdit("description").Set Parameter("acrDescriptio") @@ script infofile_;_ZIP::ssf6.xml_;_

Wait(3)
Set ClientSelect = Description.Create
	ClientSelect("micClass").value = "WebElement"
	ClientSelect("class").value = "mat-option-text"
	ClientSelect("html tag").value = "SPAN"
	ClientSelect("innertext").value = Parameter("actClient")&".*"

Browser("arvato CSDB").Page("arvato CSDB").WebList("Mandant").Click
If Parameter("actClient") <> "" Then
	Browser("arvato CSDB").Page("arvato CSDB").WebElement(ClientSelect).Click
End If
 @@ script infofile_;_ZIP::ssf7.xml_;_

rightsname = Split(Parameter("actRights") ,";")

Set roleRightsName = Description.Create
	roleRightsName("micClass").value = "WebElement"
	roleRightsName("class").value = "mat-list-item-content"
	roleRightsName("html tag").value = "DIV"	
	
Set rolecheckbox = Description.Create
	rolecheckbox("micClass").value = "WebCheckBox"
	rolecheckbox("type").value = "checkbox"
	rolecheckbox("html tag").value = "INPUT"

For j = 0 To UBOUND(rightsname)
	Print rightsname(j)
	
	Browser("arvato CSDB").Page("arvato CSDB").WebElement("search").Click @@ script infofile_;_ZIP::ssf15.xml_;_
	Browser("arvato CSDB").Page("arvato CSDB").WebEdit("Suche").Set Replace(rightsname(j),"\","")
	
	roleRightsName("innertext").value = rightsname(j)
	
	Browser("arvato CSDB").Page("arvato CSDB").WebElement(roleRightsName).Highlight
	set rolechilds = Browser("arvato CSDB").Page("arvato CSDB").WebElement(roleRightsName).ChildObjects(rolecheckbox)
	print rolechilds.count
	
	For i = 0 To rolechilds.count - 1
		rolechilds(i).click
	Next
	Browser("arvato CSDB").Page("arvato CSDB").WebEdit("Suche").Set ""
Next 
 @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebEdit("Suche").Set ""
Browser("arvato CSDB").Page("arvato CSDB").WebButton("Speichern").Click
 @@ script infofile_;_ZIP::ssf14.xml_;_
Set ConfirmationPopUp = Description.Create
	ConfirmationPopUp("micClass").value = "WebElement"
	ConfirmationPopUp("class").value = ".*toast-success"
	ConfirmationPopUp("html tag").value = "DIV"
	ConfirmationPopUp("innertext").value = "Gespeichert"

If Browser("arvato CSDB").Page("arvato CSDB").WebElement(ConfirmationPopUp).Exist Then
	Browser("arvato CSDB").Page("arvato CSDB").WebElement(ConfirmationPopUp).Highlight
	Reporter.ReportEvent "Pass","Role creation Confirmation","Role and Rights for '"&Parameter("actRoleName") & rndno&"' created successfully!"
Else
	Reporter.ReportEvent "Fail","Role creation Confirmation","Role and Rights for '"&Parameter("actRoleName") & rndno&"' Failed to create."
End If
