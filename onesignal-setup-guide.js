// OneSignal Push Notification Setup Guide
// ==========================================

// STEP 1: Get your OneSignal App ID from https://onesignal.com
// After creating an account and app, you'll get an App ID

// STEP 2: Add this code to your index.html (before closing </head> tag)
/*
<script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<script>
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(function(OneSignal) {
    OneSignal.init({
      appId: "YOUR_APP_ID_HERE", // Replace with your actual App ID
      safari_web_id: "web.onesignal.auto.xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      notifyButton: {
        enable: true,
      },
      allowLocalhostAsSecureOrigin: true,
    });
  });
</script>
*/

// STEP 3: To send notifications from admin panel, use OneSignal REST API
// Add this function to your admin.html:

async function sendPushNotification(title, message, url) {
    const APP_ID = 'YOUR_APP_ID_HERE';
    const REST_API_KEY = 'YOUR_REST_API_KEY_HERE'; // Get from OneSignal Settings > Keys & IDs

    const notification = {
        app_id: APP_ID,
        included_segments: ['All'],
        headings: { en: title },
        contents: { en: message },
        url: url || 'https://shivpurilocal.in'
    };

    try {
        const response = await fetch('https://onesignal.com/api/v1/notifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${REST_API_KEY}`
            },
            body: JSON.stringify(notification)
        });

        const data = await response.json();
        console.log('Notification sent:', data);
        return data;
    } catch (error) {
        console.error('Error sending notification:', error);
        throw error;
    }
}

// STEP 4: Test your notifications
// - Visit your site
// - Click "Allow" when prompted for notifications
// - Go to admin panel and send a test notification
// - You should receive it instantly!

// ALTERNATIVE: Use OneSignal Dashboard
// You can also send notifications directly from:
// https://dashboard.onesignal.com/apps/YOUR_APP_ID/notifications/new
