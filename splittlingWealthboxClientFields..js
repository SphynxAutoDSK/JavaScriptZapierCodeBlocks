// Link to screenshot of Zap inputs configuration https://bit.ly/431xCEJ

if(input.householdMemberIDs) {
  var splitIDs = input.householdMemberIDs.split(",");
  var splitRoles = input.householdMemberRoles.split(",");
  for (var i=0; i < splitIDs.length; i++) {
    if(splitRoles[i].search(/Partner|Head|Spouse/gm)>-1) {
      if(splitIDs[i] != input.primaryContactID) {
        var secondContactID = splitIDs[i];
      }
    }
  }
}
if(input.addresses) {
    var street = input.addresses.split(",");
}
if(input.addresses2) {
    var street2 = input.addresses2.split(",");
}
if(input.cities) {
    var city = input.cities.split(",");
}
if(input.states) {
    var state = input.states.split(",")
}
if(input.zips) {
    var zip = input.zips.split(",");
}
if(input.countries) {
    var country = input.countries.split(",");
}
if(input.addressTypes) {
    var addressType = input.addressTypes.split(",");
}
if(input.addresses){
    for (var i = 0; i < street.length; i ++) {
        if(addressType[i]==="Home") {
            var homeAddress = street[i];
            try {
             var homeAddress2 = street2[i];
            } catch {}
             var homeCity = city[i];
            var homeState = state[i];
            var homeZip = zip[i];
            try {
                var homeCountry = country[i];
            } catch {}
        }
        else if(addressType[i]==="Work") {
            var workAddress = street[i];
            try {
                var workAddress2 = street2[i];
            } catch {}
            var workCity = city[i];
            var workState = state[i];
            var workZip = zip[i];
            try {
                var workCountry = country[i];
            } catch {}
        }
        else if(addressType[i]==="Mailing") {
            var mailingAddress = street[i];
            try {
                var mailingAddress2 = street2[i];
            } catch {}
            var mailingCity = city[i];
            var mailingState = state[i];
            var mailingZip = zip[i];
            try {
                var mailingCountry = country[i];
            } catch {}
        }
        else if(addressType[i]==="Other") {
            var otherAddress = street[i];
            try {
                var otherAddress2 = street2[i];
            } catch {}
            var otherCity = city[i];
            var otherState = state[i];
            var otherZip = zip[i];
            try {
                var otherCountry = country[i];
            } catch {}
        }
    }
}
if(input.emails && input.emailTypes) {
    var email = input.emails.split(",");
    var primaryEmail = email[0];
    var emailTypes = input.emailTypes.split(",");
    for (var i = 0; i < email.length; i ++) {
        if(emailTypes[i]==="Work") {
            var workEmail = email[i];
        }
        else if (emailTypes[i]==="Personal") {
            var personalEmail = email[i];
        }
        else if (emailTypes[i]==="Other") {
            var otherEmail = email[i];
        }
    }
}
if(input.phones && input.phoneTypes) {
    var phone = input.phones.split(",");
    var phoneTypes = input.phoneTypes.split(",");
    for (var i = 0; i < phone.length; i ++) {
        if(phoneTypes[i]==="Work") {
            var workPhone = phone[i];
        }
        else if (phoneTypes[i]==="Mobile") {
            var mobilePhone = phone[i];
        }
        else if (phoneTypes[i]==="Home") {
            var homePhone = phone[i];
        }
        else if (phoneTypes[i]==="Fax") {
            var faxPhone = phone[i];
        }
    }
}
Output=[
{
  Second_Contact_ID: secondContactID,
  Primary_Email: primaryEmail,
  Work_Email: workEmail,
  Personal_Email: personalEmail,
  Other_Email: otherEmail,
  Work_Phone: workPhone,
  Mobile_Phone: mobilePhone,
  Home_Phone: homePhone,
  Fax_Phone: faxPhone,
  Home_Address: homeAddress,
  Home_Address_2: homeAddress2,
  Home_City: homeCity,
  Home_State: homeState,
  Home_Zip: homeZip,
  Home_Country: homeCountry,
  Mailing_Address: mailingAddress,
  Mailing_Address_2: mailingAddress2,
  Mailing_City: mailingCity,
  Mailing_State: mailingState,
  Mailing_Zip: mailingZip,
  Mailing_Country: mailingCountry,
  Other_Address: otherAddress,
  Other_Address_2: otherAddress2,
  Other_City: otherCity,
  Other_State: otherState,
  Other_Zip: otherZip,
  Other_Country: otherCountry,
  Work_Address: workAddress,
  Work_Address_2: workAddress2,
  Work_City: workCity,
  Work_State: workState,
  Work_Zip: workZip,
  Work_Country: workCountry
 }
]
