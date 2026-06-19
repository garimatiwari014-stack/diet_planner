# 🔧 Fix: "Error generating diet plan"

## Problem

You're seeing **"Error generating diet plan"** when you click "Generate My Diet Plan". This happens because the Groq API key is not configured.

---

## ✅ Solution: Add Your Groq API Key

### Step 1: Get a Groq API Key

1. Go to [Groq Console](https://console.groq.com)
2. Sign up or log in
3. Navigate to **API Keys** section
4. Click **"Create API Key"**
5. Give it a name: `NutriSmart Diet Planner`
6. Click **"Create"**
7. **Copy the API key** (it starts with `gsk_...`)

---

### Step 2: Add the Key to .env File

1. Open the `.env` file in your project root
2. Replace `your_groq_api_key_here` with your actual API key:

```env
VITE_GROQ_API_KEY=gsk_YourActualAPIKeyHere123456789
```

**Example:**
```env
VITE_GROQ_API_KEY=gsk_abc123xyz456def789ghi012jkl345mno678
```

---

### Step 3: Restart the Development Server

**IMPORTANT:** You must restart the server after changing .env file!

```bash
# Stop the server (Press Ctrl + C in terminal)

# Start it again
npm run dev
```

---

### Step 4: Test the Fix

1. Go to your app in the browser
2. Click **"Get Started"**
3. Fill in the diet form:
   - Age: 25
   - Weight: 70
   - Height: 175
   - Gender: Male
   - Goal: Weight Loss
4. Click **"Generate My Diet Plan"**
5. You should now see a personalized diet plan! ✅

---

## 🔍 How to Verify It's Working

### Check the Browser Console

1. Open Developer Tools (Press **F12**)
2. Go to **Console** tab
3. Look for errors:
   - ❌ If you see errors → API key is wrong or missing
   - ✅ If no errors → API is working

### Check the .env File

```bash
# Make sure the file exists
ls .env

# On Windows
dir .env
```

The file should show:
```
VITE_GROQ_API_KEY=gsk_...
```

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong API Key Format

❌ **Wrong:**
```env
GROQ_API_KEY=gsk_...           # Missing VITE_ prefix
VITE_GROQ_API_KEY='gsk_...'    # Has quotes (remove them)
VITE_GROQ_API_KEY =gsk_...     # Has space before =
```

✅ **Correct:**
```env
VITE_GROQ_API_KEY=gsk_abc123xyz456def789
```

---

### Mistake 2: Not Restarting Server

After changing `.env`, you **MUST** restart the dev server:

```bash
# Stop: Ctrl + C
# Start: npm run dev
```

---

### Mistake 3: .env in Wrong Location

The `.env` file must be in the **project root**, not in `src/`:

```
diet_planner/
├── .env                    ← HERE (correct)
├── src/
│   └── App.jsx
├── package.json
└── vite.config.js
```

---

## 🆘 Still Not Working?

### Check 1: Verify API Key is Valid

Test your API key with this command:

```bash
# On Windows (PowerShell)
$headers = @{
    "Authorization" = "Bearer YOUR_API_KEY_HERE"
    "Content-Type" = "application/json"
}
$body = @{
    "messages" = @(@{
        "role" = "user"
        "content" = "Hello"
    })
    "model" = "llama-3.3-70b-versatile"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://api.groq.com/openai/v1/chat/completions" -Method Post -Headers $headers -Body $body
```

If this returns an error, your API key is invalid.

---

### Check 2: View Console Errors

Open browser console (F12) and look for specific errors:

**Error: "API key is missing"**
- Solution: Add the key to `.env` and restart server

**Error: "Invalid API key"**
- Solution: Get a new API key from Groq Console

**Error: "Rate limit exceeded"**
- Solution: Wait a few minutes or upgrade your Groq plan

**Error: "Network error"**
- Solution: Check your internet connection

---

### Check 3: Verify .env is Loaded

Add this temporary code to test:

Open `src/App.jsx` and add console.log after imports:

```jsx
import React, { useState, useEffect } from "react";
import Groq from "groq-sdk";
import "./App.css";

// TEMPORARY TEST - Remove after checking
console.log("API Key loaded:", import.meta.env.VITE_GROQ_API_KEY ? "YES" : "NO");
console.log("First 10 chars:", import.meta.env.VITE_GROQ_API_KEY?.substring(0, 10));

export default function App() {
  // ... rest of code
}
```

Check the browser console:
- ✅ If it says "YES" and shows "gsk_...", the key is loaded
- ❌ If it says "NO", the .env file is not being read

**Remove this test code** after checking!

---

## 📝 Complete .env File Example

Your `.env` file should look exactly like this:

```env
VITE_GROQ_API_KEY=gsk_YourActualGroqAPIKeyHere123456789012345678901234567890
```

**Notes:**
- No quotes around the key
- No spaces before or after `=`
- Must start with `gsk_`
- Must have `VITE_` prefix

---

## 🎯 Quick Fix Checklist

Follow these steps in order:

1. [ ] Get Groq API key from [console.groq.com](https://console.groq.com)
2. [ ] Create/Edit `.env` file in project root
3. [ ] Add: `VITE_GROQ_API_KEY=your_key_here`
4. [ ] Remove any quotes or spaces
5. [ ] Save the file
6. [ ] Stop dev server (Ctrl + C)
7. [ ] Start dev server (`npm run dev`)
8. [ ] Clear browser cache (Ctrl + Shift + R)
9. [ ] Try generating diet plan again
10. [ ] Check browser console for errors

---

## ✅ Success Indicators

You'll know it's working when:

1. ✅ No errors in browser console
2. ✅ "Generating Your Plan..." appears with spinner
3. ✅ Diet plan appears after a few seconds
4. ✅ Beautiful formatted sections with icons
5. ✅ Print, Copy, and New Plan buttons work

---

## 🔐 Security Reminder

**NEVER commit .env to GitHub!**

Make sure `.gitignore` includes:
```
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

---

## 📞 Need More Help?

If you're still having issues:

1. **Check the error message** in browser console (F12)
2. **Verify API key** is correct and active
3. **Restart everything** (server, browser)
4. **Check internet connection**
5. **Try a different browser**

---

## 🎉 After It Works

Once your diet plan generates successfully:

1. Test with different inputs (age, weight, goals)
2. Try the Print button
3. Try the Copy to Clipboard button
4. Try the New Plan button
5. Check on mobile devices

---

**Your app will work perfectly once the API key is configured! 🚀**
