# 🚀 Quick Start Guide - NutriSmart

## Get Running in 30 Seconds!

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: **http://localhost:5173**

---

## ✅ What You Should See

### 1. Landing Page with:
- ✨ Hero section with "Eat Smart. Live Better."
- 💡 Daily Diet Tips carousel
- 🗣️ Testimonials from users
- 🎯 Call-to-action sections

### 2. Click "Get Started" Button
- Form section will appear and auto-scroll
- You'll see input fields for:
  - Age
  - Weight (kg)
  - Height (cm)
  - Gender
  - Fitness Goal

### 3. Fill Out the Form
Example:
```
Age: 25
Weight: 70 kg
Height: 175 cm
Gender: Male
Goal: Weight Loss
```

### 4. Click "Generate My Diet Plan"
- Loading spinner appears
- AI processes your information
- Personalized diet plan displays below

---

## 🎨 Features to Test

### Navigation
- ✅ Click "Tips" in navigation → Scrolls to tips section
- ✅ Click "Planner" in navigation → Shows diet form
- ✅ Click "Dashboard" in navigation → Scrolls to testimonials

### Hero Section
- ✅ Click "Get Started" → Shows diet form
- ✅ Click "Build Your Diet Plan" → Shows diet form
- ✅ See floating AI assistant card
- ✅ See nutritional breakdown card

### Diet Tips
- ✅ Scroll horizontally through 4 tip cards
- ✅ Hover over cards for shadow effect
- ✅ Icons scale on hover

### Diet Form
- ✅ Enter age (numbers only)
- ✅ Enter weight (numbers only)
- ✅ Enter height (numbers only)
- ✅ Select gender from dropdown
- ✅ Select fitness goal from dropdown
- ✅ Click generate button
- ✅ See loading state
- ✅ View generated diet plan

### Testimonials
- ✅ Three user testimonials displayed
- ✅ Middle card has special border
- ✅ Quote icons on each card

### Footer
- ✅ Four columns with links
- ✅ Company information
- ✅ Copyright notice

---

## 🔍 Testing Checklist

### Responsive Design
```bash
# Open DevTools (F12)
# Test these viewport sizes:
```

- [ ] **Mobile (375px)** - Single column layout
- [ ] **Tablet (768px)** - Two column grid
- [ ] **Desktop (1280px)** - Full multi-column layout

### Functionality
- [ ] Form validation (try submitting empty)
- [ ] API integration works
- [ ] Loading states appear
- [ ] Error handling (if API fails)
- [ ] Smooth scroll animations
- [ ] Navigation links work

### Visual Elements
- [ ] Images load correctly
- [ ] Icons display properly
- [ ] Hover effects work
- [ ] Animations smooth
- [ ] Colors match design
- [ ] Fonts render correctly

---

## 🐛 Common Issues & Fixes

### Issue: Port 5173 already in use
**Solution:**
```bash
npm run dev -- --port 3000
```

### Issue: API key error
**Solution:**
1. Check `.env` file exists
2. Verify `VITE_GROQ_API_KEY=gsk_...`
3. Restart dev server

### Issue: Blank white page
**Solution:**
1. Check browser console (F12)
2. Clear cache and reload
3. Run `npm install` again

### Issue: Styles not loading
**Solution:**
1. Make sure Tailwind CDN is in index.html
2. Hard refresh (Ctrl + Shift + R)
3. Check browser console for errors

### Issue: Icons not showing
**Solution:**
1. Check internet connection (Google Fonts)
2. Verify Material Symbols link in index.html
3. Reload page

---

## 📸 Expected Output Example

### When you generate a diet plan, you should see:

```
Your Personalized Diet Plan
━━━━━━━━━━━━━━━━━━━━━━━━━━

**BREAKFAST**
- 2 scrambled eggs with spinach
- 1 slice whole grain toast
- 1 medium apple
- Green tea

**LUNCH**
- Grilled chicken breast (150g)
- Quinoa salad with vegetables
- Olive oil dressing

**DINNER**
- Baked salmon (120g)
- Steamed broccoli
- Brown rice (1/2 cup)

**SNACKS**
- Greek yogurt
- Mixed nuts (handful)
- Carrot sticks with hummus

**DAILY TARGETS**
- Calories: 1800-2000
- Protein: 120g
- Carbs: 180g
- Fats: 60g
- Water: 2-3 liters

**HEALTH TIPS**
- Eat protein with every meal
- Drink water 30 min before meals
- Avoid processed foods
- Sleep 7-8 hours
```

---

## 🎯 Next Steps

### Explore the Codebase
1. **App.jsx** - Main component (start here!)
2. **App.css** - Global styles
3. **index.html** - HTML template with Tailwind

### Read Documentation
1. **README.md** - Full project overview
2. **CHANGES.md** - What was modified
3. **COMPONENT_GUIDE.md** - Architecture details

### Customize
- Change colors in `tailwind.config` (index.html)
- Modify diet tips cards
- Add more testimonials
- Update footer links

---

## 💡 Pro Tips

1. **Use React DevTools** - Install browser extension
2. **Check Network Tab** - Monitor API calls
3. **Use Console Logs** - Debug state changes
4. **Test Mobile First** - Responsive design priority
5. **Read Error Messages** - They're helpful!

---

## 🆘 Need Help?

1. Check browser console (F12)
2. Review error messages
3. Read COMPONENT_GUIDE.md
4. Check API key in .env
5. Restart dev server

---

## ✨ Have Fun!

Your NutriSmart app is ready to generate personalized diet plans!

**Start the dev server and explore the beautiful UI! 🚀**

```bash
npm run dev
```
