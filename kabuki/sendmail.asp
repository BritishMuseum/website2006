<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%>


<%
dim Q1
dim Q2
dim Q3
dim Q4
dim emailaddress
dim optANA
dim optBM
dim TC
dim myname
dim myaddress
dim postcode
dim myMessage

q1= request.form("Q1")
q2= request.form("Q2")
q3= request.form("Q3")
q4= request.form("Q4")
myname = request.form("name")
myaddress = request.form("address")
postcode = request.form("postcode")
emailaddress=request.form("email")
optANA = request.form("optANA")
optBM = request.form("optBM")
TC = request.form("TC")

myMessage="answer 1 = "& Q1 & VBCrLf
myMessage=myMessage & "answer 2 = "& Q2 & VBCrLf
myMessage=myMessage & "answer 3 = "& Q3 & VBCrLf
myMessage=myMessage & "answer 4 = "& Q4 & VBCrLf
myMessage=myMessage & "opt in for ANA = "& optANA & VBCrLf
myMessage=myMessage & "opt in for British Museum = "& optBM & VBCrLf
myMessage=myMessage & "read terms = "& TC & VBCrLf
myMessage=myMessage & "name = "& myname & VBCrLf
myMessage=myMessage & "address = "& myaddress & VBCrLf
myMessage=myMessage & "postcode = "& postcode & VBCrLf
myMessage=myMessage & "email = "& emailaddress

Set myMail=CreateObject("CDO.Message")
myMail.Subject="KABUKI competition entry"
myMail.From=emailaddress
myMail.To="editor@thebritishmuseum.ac.uk"
'myMail.To="eric@mini-haha.com"
myMail.TextBody=myMessage
myMail.Send
set myMail=nothing


%>
<html><body bgcolor="bb0000">
<p align="center"><img src="kabuki/images/thanks.jpg">
  <br>
  <font color="#FFFFFF" face="Arial, Helvetica, sans-serif">the winner will be notified by 14 September 2005</font> 
<p align="center"><a href="javascript:window.self.close()"><font color="#FFFFFF" size="2" face="Arial, Helvetica, sans-serif">return to the main site </font></a>
</body></html>