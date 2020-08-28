
If parameter("actClient") <> "" and Browser("Corporate Serialization").Page("Corporate Serialization").WebList("j_idt55:client").Exist Then
	Browser("Corporate Serialization").Page("Corporate Serialization").WebList("j_idt55:client").Select parameter("actClient") @@ script infofile_;_ZIP::ssf1.xml_;_
	isDisabled()
	Browser("Corporate Serialization").Page("Corporate Serialization").WebButton("j_idt55:btnClientSelect").Click
	If Browser("Corporate Serialization").Page("Corporate Serialization_2").WebElement("InfoCSDB-00: Task successfully").Exist Then
		Browser("Corporate Serialization").Page("Corporate Serialization_2").WebElement("InfoCSDB-00: Task successfully").Highlight
		Browser("Corporate Serialization").Page("Corporate Serialization_2").WebElement("WebElement").Click		
	End If
End If
