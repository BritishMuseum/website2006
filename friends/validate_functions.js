// 
// Common validation functions used with the Friends' Membership application.
//

var VALIDATE_FUNCTIONS_VERSION = 1.1;

function getObj(name)
{
  var returnObject;
  if (document.getElementById)
  {
      returnObject = document.getElementById(name);
  }
  else if (document.all)
  {
    returnObject = document.all[name];
  }
  else if (document.layers)
  {
       returnObject = document.layers[name];
  }
  return returnObject;
}

function validate_telephone_number(theElement, titleString, blnRequired, errDisplay)
{
    var returnFlag = false;
    var errorMessage;
    var fieldLength = 0;
    var fieldText = "";
    if (null == theElement) {
        showError(errDisplay, 'The field "' + titleString + '" was not defined by ' +
                              'the author of this page. Please contact ' +
                              '<a href="mailto:webmaster@thebritishmuseum.ac.uk"'+
                                      '>webmaster@thebritishmuseum.ac.uk</a>');
        returnFlag = false;
    }
    else if ((null != theElement) && (null == theElement.value)) {
	// fieldLength = 0;
    }
    else {
        fieldText = theElement.value;
        fieldText = fieldText.replace(/^\s+|\s+$/, ""); // Remove leading and trailing space
        theElement.Value = fieldText;
        fieldLength = fieldText.length;
    };
    if (fieldLength < 1) {
      if (blnRequired) {
        showError(errDisplay,  'Please supply a valid telephone number here.');
        returnFlag = false;
      }
      else {
        clearError(errDisplay);
        returnFlag = true;
      }
    }
    else {
      // Is Telephone Number a valid numeric string?
      var matchedNumber = fieldText.match(/[0-9]+/);
      matchedNumber = matchedNumber + "";
      if (matchedNumber.length >= 8) {
        clearError(errDisplay);
        returnFlag = true;
      }
      else {
        showError(errDisplay, "Cannot recognise Telephone Number supplied.  Please " +
                  "amend it by removing any spaces or hyphens in the number. " +
                  "It should consist of at least 8 digits.");
        returnFlag = false;
      }
    }
    return returnFlag;
}

function validate_decimal_number_field(theElement, titleString, blnRequired, errDisplay)
{
  var errror_message = "";
  var fieldLength = 0;
  var fieldText = "";

  if (validate_field(theElement, titleString, blnRequired, errDisplay)) {
    var testNumber = 0.0;

    fieldText = theElement.value;
    testNumber = parseFloat(fieldText);
    if ((testNumber != NaN) && (testNumber > 0.00)) { // Not an invalid number -- assume OK.
      return true;
    }
    else if (testNumber <= 0) {
      showError(errDisplay, 'The field "' + titleString + '"  is invalid. ' + 
		'Please enter a number that is bigger than zero.');
    }
    else {
      showError(errDisplay, 'The field "' + titleString + '" contains the text "' +
		fieldText + '", which does not appear to be a number.');
    }
  }
  return false;
}

function validate_field(theElement, titleString, blnRequired, errDisplay)
{
  var error_message = "";

//  var theElement = document.forms["subscription_form"].elements[inpSource];
  var fieldLength = 0;
  var fieldText = "";

  if (null == theElement) {
    showError(errDisplay, 'The field "' + titleString + '" is not defined.' +
              'Programming error.');
    return false;
  }
  if (null == theElement.value) {
  }
  else {
    fieldText = theElement.value;
    fieldText = fieldText.replace(/^\s+|\s+$/, ""); // Remove leading and trailing space
    theElement.Value = fieldText;
    fieldLength = fieldText.length;
  };
  //
  // Test the field to see if it is blank, but is a required field.
  //
  if (blnRequired) {
    if (fieldLength < 1) {
      showError(errDisplay, 'The field "' + titleString 
							+ '" is a required field. Please fill it in.');
      return false;
    }
    else {
		clearError(errDisplay);
		return true;
	}
  }
  else {
        clearError(errDisplay);
        return true; // Nothing wrong, then.
  }
}


// Takes selectElement, a single-selection <select> element, and 
// returns in an array the value of the selected option, and
// the description of the option (between the <option> and 
// </option> tags.
function getSelectedElement(selectElement) {
    if ((null == selectElement) || 
        (selectElement.options.length < 1)) {
        return null;
    }
    else {
        var selectIndex = selectElement.selectedIndex;
        var selectedOption = selectElement.options[selectIndex];
        if (null != selectedOption ) {
            return new Array(selectedOption.value, selectedOption.text);
        }
        else {
            return null;
        }
    }
    return null;
}

function showError(errorDisplay, errorString)
{
    if (null == errorDisplay) {
        alert(errorString);
    }
    else {
        errorDisplay.innerHTML = "<p>" + errorString + "</p><br/>";
    }
    return true;
}

function clearError(errorDisplay) {
    if (null != errorDisplay) {
        errorDisplay.innerHTML = "";
    }
    return true;
}

// Email, country, and U.S. State validator stubs.
function validate_us_state(state_select, country_select, field_title, country_title, errorDisplay) {
    var arrSelectedState = getSelectedElement(state_select);
    var arrSelectedCountry = getSelectedElement(country_select);
    if ((null == arrSelectedState) ||
        (null == arrSelectedCountry)) {
        return false;
    };
    if (arrSelectedCountry[0].toUpperCase() == "US") {
      if (arrSelectedState[0] != "") {
			clearError(errorDisplay);
			return true;
      }
      else {
	showError(errorDisplay, 'The "' + field_title + '" was not filled in, but you had selected ' 
		  + 'the United States of America for your country.  Please select a '
		  + 'state for any addresses in the USA.');
	return false;
      }    
    }
    if ((arrSelectedCountry[0].toUpperCase() != "US") &&
        (arrSelectedState[0] == "")) {
      clearError(errorDisplay);
      return true;
    }
    else {
      showError(errorDisplay, 'The ' + country_title +  ' selected "' + arrSelectedCountry[1] 
		+ '" is <strong>not</strong> the United States. Please select '
		+ 'the option "' + bstate.options[0].text + '" instead.');
      return false;
    };
}

function validate_country(country_select, field_title, errorDisplay) {
   var arrSelectedCountry = getSelectedElement(country_select);
   if (null != arrSelectedCountry) {
       if (arrSelectedCountry[0] == "") {
          showError(errorDisplay, field_title + ": no country selected. Please select a country.");
          return false;
       }
       else {
          clearError(errorDisplay);
          return true;
       }  
   };
   return false;
}
<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->

<!-- V1.1.3: Sandeep V. Tamhankar (stamhankar@hotmail.com) -->
<!-- Original:  Sandeep V. Tamhankar (stamhankar@hotmail.com) -->
<!-- Changes:
/* 1.1.4: Fixed a bug where upper ASCII characters (i.e. accented letters
international characters) were allowed.

1.1.3: Added the restriction to only accept addresses ending in two
letters (interpreted to be a country code) or one of the known
TLDs (com, net, org, edu, int, mil, gov, arpa), including the
new ones (biz, aero, name, coop, info, pro, museum).  One can
easily update the list (if ICANN adds even more TLDs in the
future) by updating the knownDomsPat variable near the
top of the function.  Also, I added a variable at the top
of the function that determines whether or not TLDs should be
checked at all.  This is good if you are using this function
internally (i.e. intranet site) where hostnames don't have to 
conform to W3C standards and thus internal organization e-mail
addresses don't have to either.
Changed some of the logic so that the function will work properly
with Netscape 6.

1.1.2: Fixed a bug where trailing . in e-mail address was passing
(the bug is actually in the weak regexp engine of the browser; I
simplified the regexps to make it work).

1.1.1: Removed restriction that countries must be preceded by a domain,
so abc@host.uk is now legal.  However, there's still the 
restriction that an address must end in a two or three letter
word.

1.1: Rewrote most of the function to conform more closely to RFC 822.

1.0: Original  */


function validate_email(field_name, field_title, required_field, errorDisplay) {
	/* The following variable tells the rest of the function whether or not
	 * to verify that the address ends in a two-letter country or well-known
	* TLD.  1 means check it, 0 means don't. */

	var checkTLD=1;
	var emailStr = field_name.value || "";

	/* The following is the list of known TLDs that an e-mail address must end with. */

	var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;

	/* The following pattern is used to check if the entered e-mail address
	 * fits the user@domain format.  It also is used to separate the username
	 * from the domain. */

	var emailPat=/^(.+)@(.+)$/;

	/* The following string represents the pattern for matching all special
	 characters.  We don't want to allow special characters in the address. 
	 These characters include ( ) < > @ , ; : \ " . [ ] */

	var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";

	/* The following string represents the range of characters allowed in a 
	   username or domainname.  It really states which chars aren't allowed.*/

	var validChars="\[^\\s" + specialChars + "\]";

	/* The following pattern applies if the "user" is a quoted string (in
	 * which case, there are no rules about which characters are allowed
	 * and which aren't; anything goes).  E.g. "jiminy cricket"@disney.com
     * is a legal e-mail address. */

	var quotedUser="(\"[^\"]*\")";

	/* The following pattern applies for domains that are IP addresses,
     * rather than symbolic names.  E.g. joe@[123.124.233.4] is a legal
     * e-mail address. NOTE: The square brackets are required. */

	var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;

	/* The following string represents an atom (basically a series of non-special characters.) */

	var atom=validChars + '+';

	/* The following string represents one word in the typical username.
	 * For example, in john.doe@somewhere.com, john and doe are words.
     * Basically, a word is either an atom or quoted string. */

	var word="(" + atom + "|" + quotedUser + ")";

	// The following pattern describes the structure of the user

	var userPat=new RegExp("^" + word + "(\\." + word + ")*$");

	/* The following pattern describes the structure of a normal symbolic
	 * domain, as opposed to ipDomainPat, shown above. */

	var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");

	/* Finally, let's start trying to figure out if the supplied address is valid. */

	/* Begin with the coarse pattern to simply break up user@domain into
	   different pieces that are easy to analyze. */

	var matchArray=emailStr.match(emailPat);

	if (matchArray==null) {

	/* Too many/few @'s or something; basically, this address doesn't
	   even fit the general mould of a valid e-mail address. */

		// alert("Email address seems incorrect (check @ and .'s)");
		showError(errorDisplay, field_title 
				      + " : Email Address seems to be incorrect " 
				      + "check '@' and '.' characters.")
		return false;
	}
	var user=matchArray[1];
	var domain=matchArray[2];

	// Start by checking that only basic ASCII characters are in the strings (0-127).

	for (i=0; i<user.length; i++) {
		if (user.charCodeAt(i)>127) {
			alert("Ths username contains invalid characters.");
			return false;
		}	
	}
	for (i=0; i<domain.length; i++) {
		if (domain.charCodeAt(i)>127) {
			// alert("Ths domain name contains invalid characters.");
			showError(errorDisplay, field_title + " : This domain name contains invalid characters");
			return false;
		}
	}

	// See if "user" is valid 

	if (user.match(userPat)==null) {
		// user is not valid
		showError(errorDisplay, field_title + " : The username doesn't seem to be valid.");
		return false;
	}

	/* if the e-mail address is at an IP address (as opposed to a symbolic
	   host name) make sure the IP address is valid. */

	var IPArray=domain.match(ipDomainPat);
	if (IPArray!=null) {

		// this is an IP address
		for (var i=1;i<=4;i++) {
			if (IPArray[i]>255) {
				showError(errorDisplay, field_title + " : Destination IP address is invalid!");
				return false;
			}
		}
		return true;
	}

	// Domain is symbolic name.  Check if it's valid.
 
	var atomPat=new RegExp("^" + atom + "$");
	var domArr=domain.split(".");
	var len=domArr.length;
	for (i=0;i<len;i++) {
		if (domArr[i].search(atomPat)==-1) {
			showError(errorDisplay, field_title + " :The domain name does not seem to be valid.");
			return false;
		}
	}

	/* domain name seems valid, but now make sure that it ends in a
       known top-level domain (like com, edu, gov) or a two-letter word,
	   representing country (uk, nl), and that there's a hostname preceding 
	   the domain or country. */

	if (checkTLD && domArr[domArr.length-1].length!=2 && 
		domArr[domArr.length-1].search(knownDomsPat)==-1) {
		showError(errorDisplay, 
				  field_title + " : The address must end in a well-known domain or two letter " + "country.");
		return false;
	}

	// Make sure there's a host name preceding the domain.

	if (len<2) {
		showError(errorDisplay, field_title + " : This address is missing a hostname!");
		return false;
	}

	// If we've gotten this far, everything's valid!
	clearError(errorDisplay);
	return true;
}

//
// Define outline object to validate Child entries, especially for Family Memberships
//
// Create constructor which encompasses the methods to be used in the class.
// 
function Child (firstName, surName, dateOfBirth, errorDisplay) {
  this._firstName = firstName;  // First Name
  this._surName= surName;       // Surname
  this._dateOfBirth = dateOfBirth; // Date of birth 
  this._errorDisplay = errorDisplay; // Error message display area.

  function _count_completed_fields(fname, sname, dob) {
    var completed_fields = 0;
    if (sname != "") completed_fields++;
    if (fname != "") completed_fields++;
    if (dob != "") completed_fields++;

    return completed_fields;
  }
  this._count_completed_fields = _count_completed_fields;

  function clearChildError() {
    return clearError(this._errorDisplay);
  };
  this.clearChildError = clearChildError;
  
  function validate (requiredFlag) {
    var returnValue = false;

    var fname, sname, dob;
    var filled_in_count = 0;
    // Get data.
    fname = this._firstName.value || ""; fname = fname.replace(/^\s+|\s$/, "");
    sname = this._surName.value || ""; sname = sname.replace(/^\s+|\s$/, "");
    dob   = this._dateOfBirth.value || ""; dob = dob.replace(/^\s+|\s$/, "");
    
    // How many filled in?
    filled_in_count = this._count_completed_fields(fname, sname, dob);
      
    if (! requiredFlag) {
      // If child entry is optional, then all entries must be filled in, or none at all.
      
      if ((filled_in_count == 3) || (filled_in_count == 0)) {
        clearError(this._errorDisplay);
        returnValue = true;
      }
      else {
        showError(this._errorDisplay,
                   "Missing information for child. Please fill in First Name, Surname,"
                  +" and Date of Birth for child, or leave empty.");
        returnValue = false;
      }
    }
    else { /** required -- i.e. first child. **/
      if (filled_in_count == 3) {
        clearError(this._errorDisplay);
        returnValue = true;
      }
      else {
        showError(this._errorDisplay,
                  "Please fill in First Name, Surname and Date of Birth of at least one child;"
                 +" starting with the first set of Child Fields.");
        returnValue = false;
      }
    }
    return returnValue;
  }; // End method validate.

  this.validate = validate;
  
  return this;
}      //Child class

