<?

PRINT "<center><FONT SIZE=-1 face=verdana>"; PRINT "Greetings $name, thank you for filling out our";
PRINT "form.";
PRINT "</center><p><center><TABLE border=0 width=500";
PRINT "cellspacing=0 cellpadding=7>"; PRINT "<TR><TD><FONT SIZE=-1 face=verdana>"; PRINT "In the form, you stated that our site";
PRINT "$status. Thank you for your input."; PRINT "We will send you more information about our site";
PRINT "in an email to $email.";
PRINT "If you have any more comments, feel free to reply.";
PRINT "</FONT></TD></TR></TABLE></center>";

mail("$email", "Site Information", "Hello $name,\nWe thank
you again for using our form and telling \nus your option
about our site\n\nThis is important to us so we can know how
to improve.\n\nThank you once again.");

mail("eric@mini-haha.com", "An Opinion", "$name just
used the form.\n\nThey stated that our site $opinion.");

?>
