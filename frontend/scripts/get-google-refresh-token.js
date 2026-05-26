/**
 * Script to obtain Google Calendar API Refresh Token
 * @author Nejib Aloui <nejib20@gmail.com>
 *
 * Usage:
 * 1. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env.local
 * 2. Run: node scripts/get-google-refresh-token.js
 * 3. Follow the URL to authorize the app
 * 4. Copy the refresh token to .env.local
 */

const { google } = require('googleapis');
const readline = require('readline');
require('dotenv').config({ path: '.env.local' });

// Configuration
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/calendar/callback';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

// Validate environment variables
if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('❌ Error: GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be set in .env.local');
  console.error('\nPlease add these variables to your .env.local file:');
  console.error('GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com');
  console.error('GOOGLE_CLIENT_SECRET=your_client_secret');
  process.exit(1);
}

// Create OAuth2 client
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Generate authorization URL
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
  prompt: 'consent', // Force to show consent screen to get refresh token
});

console.log('='.repeat(70));
console.log('🔐 Google Calendar API - Refresh Token Generator');
console.log('='.repeat(70));
console.log('\n📋 Configuration:');
console.log(`   Client ID: ${CLIENT_ID.substring(0, 20)}...`);
console.log(`   Redirect URI: ${REDIRECT_URI}`);
console.log('\n📝 Instructions:');
console.log('   1. Click the authorization URL below');
console.log('   2. Log in with your Google account');
console.log('   3. Grant calendar permissions');
console.log('   4. Copy the authorization code from the URL');
console.log('   5. Paste it here when prompted');
console.log('\n' + '='.repeat(70));
console.log('\n🔗 Authorization URL:\n');
console.log(`\x1b[36m${authUrl}\x1b[0m`);
console.log('\n' + '='.repeat(70));

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt for authorization code
rl.question('\n📥 Enter the authorization code: ', async (code) => {
  try {
    console.log('\n⏳ Exchanging code for tokens...');

    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    console.log('\n✅ Success! Tokens obtained.\n');
    console.log('='.repeat(70));
    console.log('📋 Add these to your .env.local file:');
    console.log('='.repeat(70));
    console.log(`\nGOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);

    if (tokens.access_token) {
      console.log(`\n# Optional: Access token (expires in ${tokens.expiry_date ? new Date(tokens.expiry_date).toLocaleString() : '1 hour'})`);
      console.log(`# GOOGLE_ACCESS_TOKEN=${tokens.access_token}`);
    }

    console.log('\n' + '='.repeat(70));
    console.log('\n✨ Configuration complete! Your calendar integration is ready.');
    console.log('🔒 Remember: NEVER commit your .env.local file to Git!\n');

    // Test the refresh token
    console.log('🧪 Testing the refresh token...\n');
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    try {
      const calendarList = await calendar.calendarList.list();
      console.log('✅ Refresh token is valid!');
      console.log(`📅 Found ${calendarList.data.items?.length || 0} calendar(s):\n`);

      calendarList.data.items?.forEach((cal, index) => {
        console.log(`   ${index + 1}. ${cal.summary} (ID: ${cal.id})`);
      });

      console.log('\n💡 Tip: Use one of these calendar IDs as GOOGLE_CALENDAR_ID');
      console.log('   (or use "primary" for your main calendar)\n');
    } catch (testError) {
      console.error('⚠️  Warning: Could not test refresh token:', testError.message);
    }

  } catch (error) {
    console.error('\n❌ Error exchanging code for tokens:');
    console.error(`   ${error.message}`);
    console.error('\n💡 Make sure:');
    console.error('   - The authorization code is correct');
    console.error('   - The redirect URI matches the one in Google Cloud Console');
    console.error('   - The client ID and secret are correct');
  } finally {
    rl.close();
  }
});
