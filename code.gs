function doGet() {
  return HtmlService.createHtmlOutputFromFile('home')
      .setTitle('Contact Us Form');
}

function patientRegistration(form) {
  try {
    var spreadsheet = SpreadsheetApp.openById('Paste your Google sheet ID');
    var sheet = spreadsheet.getSheetByName('Give Here your Google sheet Name');
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Give Here your Google sheet Name');
    }
    var rowData = [
      sheet.getLastRow() + 1, // Auto ID number
      form.patient_id,
      form.first_name,
      form.middle_name,
      form.last_name,
      form.gender,
      form.email,
      form.whatsapp,
      form.emergency_contact,
      form.city,
      form.state,
      form.country,
      form.postal_code,
      form.birth_day,
      form.birth_month,
      form.birth_year,
      form.blood_group,
      form.sugar_level,
      form.concern,
      form.donor_receiver
    ];
    sheet.appendRow(rowData);
    
    // Send email to the person
    var recipient = form.email;
    var subject = 'Confirmation: Your Form Submission';
    var message = '<html><body>';
    message += '<table style="width:100%; border-collapse: collapse;">';
    message += '<tr><td colspan="2" style="background-color: #f2f2f2; padding: 10px; text-align: center;"><h2>Confirmation: Your Form Submission</h2></td></tr>';
    message += '<tr><td colspan="2" style="padding: 10px;"><p>Dear ' + form.first_name + ',</p><p>Thank you for submitting the form. Below are the details you provided:</p></td></tr>';
    message += '<tr><td style="width: 30%; padding: 10px; background-color: #f9f9f9;"><b style="color: black;">Field</b></td><td style="width: 70%; padding: 10px; background-color: #f9f9f9;"><b style="color: black;">Value</b></td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">First Name:</b></td><td style="padding: 10px;">' + form.first_name + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Middle Name:</b></td><td style="padding: 10px;">' + form.middle_name + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Last Name:</b></td><td style="padding: 10px;">' + form.last_name + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Patient ID:</b></td><td style="padding: 10px;">' + form.patient_id + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Gender:</b></td><td style="padding: 10px;">' + form.gender + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Email:</b></td><td style="padding: 10px;">' + form.email + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">WhatsApp:</b></td><td style="padding: 10px;">' + form.whatsapp + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Emergency Contact:</b></td><td style="padding: 10px;">' + form.emergency_contact + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">City:</b></td><td style="padding: 10px;">' + form.city + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">State:</b></td><td style="padding: 10px;">' + form.state + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Country:</b></td><td style="padding: 10px;">' + form.country + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Postal Code:</b></td><td style="padding: 10px;">' + form.postal_code + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Date of Birth:</b></td><td style="padding: 10px;">' + form.birth_day + '/' + form.birth_month + '/' + form.birth_year + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Blood Group:</b></td><td style="padding: 10px;">' + form.blood_group + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Sugar Level:</b></td><td style="padding: 10px;">' + form.sugar_level + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Concern:</b></td><td style="padding: 10px;">' + form.concern + '</td></tr>';
    message += '<tr><td style="padding: 10px;"><b style="color: black;">Donor/Receiver:</b></td><td style="padding: 10px;">' + form.donor_receiver + '</td></tr>';
    message += '</table>';
    message += '<p>Regards,<br>Your Organization</p>';
    message += '</body></html>';

    GmailApp.sendEmail(recipient, subject, '', { htmlBody: message });

    return "Form submitted successfully! Email sent to " + form.email;
  } catch (error) {
    return "Error submitting form: " + error.toString();
  }
}

// For Custom Projects : https://wa.me/923224083545
