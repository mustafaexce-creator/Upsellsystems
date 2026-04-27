/**
 * UpsellSystems Contact Form → Google Sheet + Email Notification
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Add these headers in Row 1: Timestamp | Name | Email | Phone | Project Type | Budget | Message
 * 3. Go to Extensions → Apps Script
 * 4. Paste this entire code into Code.gs
 * 5. Update YOUR_EMAIL below with your actual email (mo@upsellsystems.com)
 * 6. Update SHEET_ID below with your Google Sheet ID (from the URL)
 * 7. Click Deploy → New Deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 8. Copy the Web App URL
 * 9. Paste it into ContactPage.jsx where it says YOUR_GOOGLE_SCRIPT_URL_HERE
 */

const YOUR_EMAIL = 'mo@upsellsystems.com';
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Get this from your sheet URL

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // 1. Save to Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name,
      data.email,
      data.phone || 'N/A',
      data.type || 'Not specified',
      data.budget || 'Not specified',
      data.message,
    ]);
    
    // 2. Send email notification
    const subject = `🚀 New Lead: ${data.name} — ${data.type || 'Project Inquiry'}`;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #6366F1, #8B5CF6); padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 1.4rem;">New Lead from UpsellSystems</h1>
        </div>
        <div style="background: white; padding: 28px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: bold; color: #374151; width: 140px;">Name</td>
              <td style="padding: 12px 0; color: #1f2937;">${data.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 12px 0;"><a href="mailto:${data.email}" style="color: #6366F1;">${data.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 12px 0; color: #1f2937;">${data.phone || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: bold; color: #374151;">Project Type</td>
              <td style="padding: 12px 0; color: #1f2937;">${data.type || 'Not specified'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: bold; color: #374151;">Budget</td>
              <td style="padding: 12px 0; color: #1f2937;">${data.budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #1f2937; line-height: 1.6;">${data.message}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #34D399;">
            <p style="margin: 0; color: #166534; font-size: 0.9rem;">
              💡 <strong>Reply quickly!</strong> This lead came from your website contact form.
            </p>
          </div>
        </div>
        <p style="text-align: center; color: #9ca3af; font-size: 0.8rem; margin-top: 16px;">
          Sent automatically by UpsellSystems Contact Form
        </p>
      </div>
    `;
    
    MailApp.sendEmail({
      to: YOUR_EMAIL,
      subject: subject,
      htmlBody: htmlBody,
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'UpsellSystems Contact Form API is running.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
