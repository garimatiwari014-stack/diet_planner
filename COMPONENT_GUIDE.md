# NutriSmart Component Architecture Guide

## Component Structure

```
App.jsx (Main Component)
│
├── Header (Fixed Navigation)
│   ├── Logo (NutriSmart)
│   ├── Navigation Links (Tips, Planner, Dashboard)
│   └── CTA Button (Get Started)
│
├── Hero Section
│   ├── Left Column
│   │   ├── Badge (AI-Powered Nutrition)
│   │   ├── Headline (Eat Smart. Live Better.)
│   │   ├── Description
│   │   ├── CTA Buttons
│   │   └── Social Proof (User avatars + count)
│   │
│   └── Right Column
│       ├── Hero Image Card
│       ├── Floating AI Assistant Card
│       └── Nutritional Breakdown Card
│
├── Daily Diet Tips Section
│   ├── Section Header
│   ├── "See All Insights" Button
│   └── Tip Cards (Horizontal Scroll)
│       ├── Hydration Timing Card
│       ├── The Fiber Factor Card
│       ├── Green Energy Card
│       └── Sleep & Snacks Card
│
├── AI Diet Plan Generator Section (Conditional)
│   ├── Section Header
│   ├── Diet Form Card
│   │   ├── Age Input
│   │   ├── Weight Input
│   │   ├── Height Input
│   │   ├── Gender Select
│   │   ├── Goal Select
│   │   └── Generate Button
│   │
│   └── Diet Plan Result Card (Conditional)
│       ├── Result Header with Icon
│       └── Diet Plan Content
│
├── Testimonials Section
│   ├── Section Header
│   └── Testimonial Cards Grid
│       ├── Sarah J. Card
│       ├── Mark R. Card (Featured)
│       └── Elena G. Card
│
├── Final CTA Section
│   ├── Decorative Background Blobs
│   ├── Headline
│   ├── Description
│   └── CTA Buttons
│
└── Footer
    ├── Company Info Column
    ├── Product Links Column
    ├── Resources Links Column
    ├── Company Links Column
    └── Copyright Notice
```

## State Management

### Component State
```javascript
// Form States (Existing Functionality)
const [age, setAge] = useState("")
const [weight, setWeight] = useState("")
const [height, setHeight] = useState("")
const [gender, setGender] = useState("")
const [goal, setGoal] = useState("")
const [dietPlan, setDietPlan] = useState("")
const [loading, setLoading] = useState(false)

// UI State (New)
const [showDietForm, setShowDietForm] = useState(false)
```

## Key Functions

### 1. generateDietPlan()
**Purpose:** Calls Groq AI API to generate personalized diet plan
**Triggers:** When user clicks "Generate My Diet Plan" button
**Flow:**
1. Sets loading to true
2. Creates Groq client with API key
3. Sends user data to AI model
4. Receives and displays diet plan
5. Sets loading to false

### 2. scrollToDietForm()
**Purpose:** Shows diet form and scrolls to it
**Triggers:** When user clicks any "Get Started" or "Build Your Diet Plan" button
**Flow:**
1. Sets showDietForm to true
2. Waits 100ms for component to render
3. Smooth scrolls to diet-form-section

### 3. Scroll Effect (useEffect)
**Purpose:** Adds shadow to header on scroll
**Triggers:** On window scroll event
**Flow:**
1. Listens to scroll events
2. Adds/removes shadow classes based on scroll position

## Color System Quick Reference

### Primary Colors (Green)
- `bg-primary` - Main green (#006d36)
- `bg-primary-container` - Light green (#4ade80)
- `text-on-primary` - White text on green
- `text-primary` - Green text

### Secondary Colors (Blue)
- `bg-secondary` - Main blue (#0060ac)
- `bg-secondary-container` - Light blue (#64a8fe)
- `text-on-secondary` - White text on blue
- `text-secondary` - Blue text

### Surface Colors
- `bg-surface` - Main background (#f7f9fb)
- `bg-surface-container-low` - Slightly darker
- `bg-surface-container-lowest` - White (#ffffff)

### Text Colors
- `text-on-surface` - Main text (#191c1e)
- `text-on-surface-variant` - Secondary text (#3d4a3e)

## Responsive Breakpoints

```css
/* Mobile First */
default: < 640px (mobile)
sm: 640px  (small tablets)
md: 768px  (tablets)
lg: 1024px (laptops)
xl: 1280px (desktops)
```

## Key Classes & Utilities

### Custom Classes
- `.glass-card` - Glassmorphism effect
- `.no-scrollbar` - Hides scrollbar
- `.material-symbols-outlined` - Google Material icons

### Common Patterns
```jsx
// Rounded corners
rounded-xl    // Medium rounding
rounded-2xl   // Large rounding
rounded-3xl   // Extra large rounding
rounded-full  // Fully rounded (pills, circles)

// Spacing
px-6   // Horizontal padding
py-20  // Vertical padding (sections)
gap-6  // Grid/flex gap

// Transitions
transition-all          // All properties
hover:scale-105        // Grow on hover
hover:-translate-y-1   // Lift on hover
```

## Animation Classes

### Hover Effects
```jsx
hover:shadow-lg              // Shadow on hover
hover:bg-primary-container/10 // Subtle bg on hover
hover:scale-105              // Slight grow
hover:-translate-y-1         // Lift up
group-hover:scale-110        // Parent hover effect
```

### Loading State
```jsx
animate-spin  // Spinning loader icon
```

## Form Handling

### Input Pattern
```jsx
<input
  type="number"
  value={state}
  onChange={(e) => setState(e.target.value)}
  className="w-full px-4 py-3 rounded-xl border border-outline-variant 
             focus:border-primary focus:ring-2 focus:ring-primary/20 
             outline-none transition-all"
/>
```

### Button Pattern
```jsx
<button
  onClick={handler}
  disabled={loading}
  className="bg-primary text-on-primary px-8 py-4 rounded-xl 
             hover:shadow-lg transition-all hover:-translate-y-1 
             disabled:opacity-50 disabled:cursor-not-allowed"
>
  {loading ? 'Loading...' : 'Submit'}
</button>
```

## Performance Optimizations

1. **Conditional Rendering** - Diet form only renders when needed
2. **Smooth Scroll** - Native smooth scroll behavior
3. **Lazy Loading** - Images with loading optimization
4. **Debounced Scroll** - Efficient scroll event handling
5. **CSS Transitions** - Hardware-accelerated animations

## Accessibility Features

1. **Semantic HTML** - Proper heading hierarchy
2. **ARIA Labels** - Descriptive labels on inputs
3. **Keyboard Navigation** - Tab-friendly interface
4. **Focus States** - Visible focus indicators
5. **Alt Text** - Images have descriptive alt attributes
6. **Color Contrast** - WCAG AA compliant

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 11 (Not supported - Tailwind CSS requirement)

## Future Enhancement Ideas

1. Add dark mode toggle
2. Save diet plans to localStorage
3. Print/PDF export functionality
4. Meal calendar view
5. Shopping list generator
6. Progress tracking dashboard
7. Social sharing features
8. Multi-language support

---
**Last Updated:** 2026
