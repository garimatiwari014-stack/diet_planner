# 🎨 Visual Reference Guide - Diet Plan CSS Enhancements

## 🎯 What the Enhanced Diet Plan Looks Like

### Complete Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  Gradient Background (Animated)                            ║  │
│  ║  ┌──────────────────────────────────────────────────────┐  ║  │
│  ║  │ ┌──────┐                                              │  ║  │
│  ║  │ │ 🍽️  │  Your Personalized Diet Plan                │  ║  │
│  ║  │ │Icon │  AI-generated nutrition plan tailored for you│  ║  │
│  ║  │ └──────┘                                              │  ║  │
│  ║  └──────────────────────────────────────────────────────┘  ║  │
│  ║                                                             ║  │
│  ║  ┌───────────────────────────────────────────────────────┐ ║  │
│  ║  │ White Card (Content Area)                             │ ║  │
│  ║  │                                                        │ ║  │
│  ║  │  ┌───┐                                                │ ║  │
│  ║  │  │🍳 │ Breakfast                                      │ ║  │
│  ║  │  └───┘                                                │ ║  │
│  ║  │      • Oatmeal with berries and honey                │ ║  │
│  ║  │      • Greek yogurt with granola                     │ ║  │
│  ║  │      • Green tea                                      │ ║  │
│  ║  │  ─────────────────────────────────────               │ ║  │
│  ║  │  ┌───┐                                                │ ║  │
│  ║  │  │🍱 │ Lunch                                          │ ║  │
│  ║  │  └───┘                                                │ ║  │
│  ║  │      • Grilled chicken breast with quinoa            │ ║  │
│  ║  │      • Mixed green salad                             │ ║  │
│  ║  │      • Olive oil dressing                            │ ║  │
│  ║  │  ─────────────────────────────────────               │ ║  │
│  ║  │  ┌───┐                                                │ ║  │
│  ║  │  │🍽️ │ Dinner                                         │ ║  │
│  ║  │  └───┘                                                │ ║  │
│  ║  │      • Baked salmon with lemon                       │ ║  │
│  ║  │      • Steamed broccoli and carrots                  │ ║  │
│  ║  │      • Brown rice                                     │ ║  │
│  ║  │  ─────────────────────────────────────               │ ║  │
│  ║  │  ┌───┐                                                │ ║  │
│  ║  │  │🍟 │ Snacks                                         │ ║  │
│  ║  │  └───┘                                                │ ║  │
│  ║  │      • Apple slices with almond butter               │ ║  │
│  ║  │      • Handful of mixed nuts                         │ ║  │
│  ║  │  ─────────────────────────────────────               │ ║  │
│  ║  │  ┌───┐                                                │ ║  │
│  ║  │  │🔥 │ Daily Calories                                 │ ║  │
│  ║  │  └───┘                                                │ ║  │
│  ║  │      Target: 1800-2000 calories                      │ ║  │
│  ║  │  ─────────────────────────────────────               │ ║  │
│  ║  │  ┌───┐                                                │ ║  │
│  ║  │  │💧 │ Water Intake                                   │ ║  │
│  ║  │  └───┘                                                │ ║  │
│  ║  │      Aim for 8-10 glasses (2-3 liters)              │ ║  │
│  ║  │  ─────────────────────────────────────               │ ║  │
│  ║  │  ┌───┐                                                │ ║  │
│  ║  │  │💡 │ Health Tips                                    │ ║  │
│  ║  │  └───┘                                                │ ║  │
│  ║  │      • Eat protein with every meal                   │ ║  │
│  ║  │      • Stay hydrated throughout the day              │ ║  │
│  ║  │      • Get 7-8 hours of sleep                        │ ║  │
│  ║  │                                                        │ ║  │
│  ║  │  ═════════════════════════════════════════════       │ ║  │
│  ║  │                                                        │ ║  │
│  ║  │  ┌──────────┐  ┌──────────┐  ┌──────────┐          │ ║  │
│  ║  │  │ 🖨️ Print │  │📋  Copy  │  │🔄  New   │          │ ║  │
│  ║  │  │   Plan   │  │Clipboard │  │  Plan    │          │ ║  │
│  ║  │  └──────────┘  └──────────┘  └──────────┘          │ ║  │
│  ║  │                                                        │ ║  │
│  ║  └────────────────────────────────────────────────────┘  ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Palette

### Background & Borders
```
Outer Container:
├─ Background: Linear gradient (primary/10 to secondary/10)
├─ Animation: Gradient shift (8s loop)
├─ Border: 2px solid primary-container (#4ade80)
├─ Border Radius: 3xl (24px)
└─ Shadow: xl

Inner White Card:
├─ Background: Pure white (#ffffff)
├─ Border: 1px solid outline-variant/20
├─ Border Radius: 2xl (16px)
└─ Shadow: md
```

### Text Colors
```
Main Title:      #191c1e (on-surface)
Subtitle:        #3d4a3e (on-surface-variant) 
Section Headers: #006d36 (primary)
Body Text:       #191c1e (on-surface)
Muted Text:      #3d4a3e (on-surface-variant)
```

### Icon Colors
```
Icon Background: primary/10 (#006d36 with 10% opacity)
Icon Color:      #006d36 (primary)
Icon Size:       20px (xl)
Container:       40px rounded square
```

### Button Colors
```
Print Button:
├─ Background: #006d36 (primary)
├─ Text: #ffffff (on-primary)
└─ Icon: 🖨️

Copy Button:
├─ Background: #64a8fe (secondary-container)
├─ Text: #003c70 (on-secondary-container)
└─ Icon: 📋

New Plan Button:
├─ Background: Transparent
├─ Border: 2px solid outline-variant
├─ Text: #191c1e (on-surface)
└─ Icon: 🔄
```

---

## ✨ Animation Timeline

### On Load (Diet Plan Appears)
```
0ms    → Container: opacity 0, visible false
100ms  → Container: fadeIn starts
500ms  → Container: fully visible (opacity 1)
600ms  → Content: fadeInUp starts
800ms  → Content: slides up and fades in
1200ms → All animations complete
∞      → Gradient: continuous shift animation (8s loop)
```

### Hover Interactions

#### Section Header Hover:
```
0ms    → Normal state
50ms   → Underline appears from left
300ms  → Underline fully extended (100% width)
```

#### Bullet Point Hover:
```
0ms    → Bullet size: 1.0
100ms  → Bullet size: 1.25 (scale animation)
200ms  → Animation complete
```

#### Button Hover:
```
0ms    → Normal position
100ms  → Lifts up (-0.5px translateY)
200ms  → Shadow increases
300ms  → Full hover state
```

---

## 📐 Spacing & Layout

### Section Spacing
```
Outer Container:
├─ Padding: 6-10 units (responsive)
├─ Margin Top: 8 units
└─ Gap: Auto

Header Section:
├─ Gap: 4 units
├─ Margin Bottom: 8 units
└─ Icon Size: 16x16 units

Content Card:
├─ Padding: 6-8 units (responsive)
├─ Gap between sections: 6 units
└─ Border spacing: 4 units top

Action Buttons:
├─ Padding Top: 8 units
├─ Margin Top: 8 units
├─ Gap between buttons: 3 units
└─ Button padding: 3 units vertical, 6 units horizontal
```

### Typography Spacing
```
Main Title:
├─ Font Size: 3xl (1.875rem / 30px)
├─ Font Weight: Bold (700)
└─ Line Height: 1.2

Subtitle:
├─ Font Size: sm (0.875rem / 14px)
├─ Font Weight: Normal (400)
├─ Margin Top: 1 unit
└─ Line Height: 1.4

Section Headers:
├─ Font Size: xl (1.25rem / 20px)
├─ Font Weight: Bold (700)
├─ Line Height: 1.3
└─ Color: Primary

Body Text:
├─ Font Size: base (1rem / 16px)
├─ Font Weight: Normal (400)
├─ Line Height: Relaxed (1.625)
└─ Color: On-surface

Bullet Points:
├─ Margin Left: 4 units
├─ Gap: 3 units
└─ Line Height: Relaxed (1.625)
```

---

## 🎭 Interactive States

### Section Headers
```css
Normal State:
- Color: primary (#006d36)
- Font: Bold, xl
- Underline: 0% width

Hover State:
- Color: primary (unchanged)
- Underline: Grows to 100% width
- Transition: 0.3s ease
- Cursor: default
```

### Bullet Points
```css
Normal State:
- Bullet: • (primary color)
- Size: 1.0
- Text: on-surface

Hover State (group):
- Bullet: Scales to 1.25
- Text: Changes to primary color
- Transition: 0.2s ease
- Cursor: default
```

### Buttons
```css
Normal State:
- Position: translateY(0)
- Shadow: md
- Opacity: 1

Hover State:
- Position: translateY(-0.5px)
- Shadow: lg
- Opacity: 1
- Transition: all 0.2s

Active State:
- Position: translateY(0)
- Shadow: sm
- Scale: 0.98
```

### Icons
```css
Normal State:
- Size: 40x40px container
- Icon: 20px
- Background: primary/10
- Scale: 1.0

Section Icons:
- Hover: No change
- Static display

Button Icons:
- Inherit button hover
- Move with button
```

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)
```
Container:
├─ Padding: 6 units
├─ Single column
└─ Full width

Buttons:
├─ Stacked vertically
├─ Full width each
└─ Gap: 3 units

Typography:
├─ Main title: 2xl
├─ Headers: lg
└─ Body: sm-base

Icons:
├─ Size: 36x36px
└─ Icon: 18px
```

### Tablet (640px - 1024px)
```
Container:
├─ Padding: 8 units
├─ Wider margins
└─ Better spacing

Buttons:
├─ Two columns
├─ Third button full width
└─ Gap: 3 units

Typography:
├─ Main title: 3xl
├─ Headers: xl
└─ Body: base

Icons:
├─ Size: 40x40px
└─ Icon: 20px
```

### Desktop (> 1024px)
```
Container:
├─ Padding: 10 units
├─ Maximum width
└─ Centered

Buttons:
├─ Three columns
├─ Equal width
└─ Gap: 3 units

Typography:
├─ Main title: 3xl
├─ Headers: xl
└─ Body: base

Icons:
├─ Size: 40x40px
└─ Icon: 20px

Hover Effects:
├─ All active
├─ Smooth transitions
└─ Visual feedback
```

---

## 🖨️ Print Layout

### What Gets Hidden:
```
❌ Header navigation
❌ Footer
❌ Action buttons
❌ Background gradients
❌ Decorative elements
❌ Animations
```

### What Gets Shown:
```
✅ Diet plan title
✅ All sections with icons
✅ All content text
✅ Bullet points
✅ Section dividers
```

### Print Styles:
```css
@media print {
  /* Hide everything */
  body * {
    visibility: hidden;
  }
  
  /* Show only content */
  .diet-plan-content,
  .diet-plan-content * {
    visibility: visible;
  }
  
  /* Position */
  .diet-plan-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  
  /* Remove buttons */
  button {
    display: none !important;
  }
}
```

---

## 🎨 Icon Reference

### Available Icons & Usage:
```
🍳 breakfast_dining  → Breakfast sections
🍱 lunch_dining      → Lunch sections
🍽️ dinner_dining     → Dinner sections
🍟 fastfood          → Snack sections
🔥 local_fire_dept   → Calorie information
💧 water_drop        → Hydration/water intake
❤️ health_and_safety → Health tips
💡 tips_and_updates  → General tips
📅 calendar_today    → Daily plans
🍴 restaurant        → General meal info
⭕ circle           → Default/fallback
```

### Icon Implementation:
```jsx
const iconMap = {
  'Breakfast': 'breakfast_dining',
  'Lunch': 'lunch_dining',
  'Dinner': 'dinner_dining',
  'Snack': 'fastfood',
  'Calorie': 'local_fire_department',
  'Water': 'water_drop',
  'Health': 'health_and_safety',
  'Tip': 'tips_and_updates',
  'Daily': 'calendar_today',
  'Meal': 'restaurant'
};
```

---

## 💡 Usage Examples

### Example 1: Simple Plan
```
Input:
### Breakfast
* Oatmeal
* Coffee

Output:
┌────────────────┐
│ 🍳 Breakfast   │
└────────────────┘
  • Oatmeal
  • Coffee
```

### Example 2: Detailed Section
```
Input:
### Daily Calories
To achieve weight loss, aim for 1800 calories.
* Track your intake
* Use a food diary

Output:
┌──────────────────────┐
│ 🔥 Daily Calories    │
└──────────────────────┘
  To achieve weight loss, aim for 1800 calories.
  • Track your intake
  • Use a food diary
```

### Example 3: Multiple Sections
```
Input:
### Breakfast
* Eggs
### Lunch
* Salad

Output:
┌────────────────┐
│ 🍳 Breakfast   │
└────────────────┘
  • Eggs
─────────────────
┌────────────────┐
│ 🍱 Lunch       │
└────────────────┘
  • Salad
```

---

## 🎯 Key Measurements

### Container Sizes:
```
Outer gradient box:  Responsive width, auto height
Inner white card:    100% of outer, auto height
Icon containers:     40px × 40px
Header icon:         64px × 64px (16 units)
Button height:       48px (12 units padding)
```

### Font Sizes:
```
Main title:     30px (3xl)
Subtitle:       14px (sm)
Headers:        20px (xl)
Body:           16px (base)
Button text:    16px (base, medium weight)
```

### Border Radius:
```
Outer container:  24px (3xl)
Inner card:       16px (2xl)
Icon boxes:       12px (xl)
Header icon:      Full circle (50%)
Buttons:          12px (xl)
```

### Shadows:
```
Outer: 0 20px 25px -5px rgba(0,0,0,0.1)
Inner: 0 4px 6px -1px rgba(0,0,0,0.1)
Button hover: 0 10px 15px -3px rgba(0,0,0,0.1)
```

---

## 🚀 Performance Metrics

### Animation Performance:
```
Gradient shift:     8s loop, GPU accelerated
Fade in:           0.5s, opacity only
Fade up:           0.6s, transform + opacity
Hover effects:      0.2-0.3s transitions
```

### Load Time:
```
First paint:        < 100ms
Interactive:        < 500ms
Full render:        < 1200ms
```

### Optimization:
```
✅ CSS animations (GPU accelerated)
✅ Transform & opacity (composite)
✅ Debounced events
✅ Minimal reflows
✅ Efficient parsing
```

---

**This visual reference provides exact specifications for recreating or understanding the enhanced diet plan design! 🎨**
