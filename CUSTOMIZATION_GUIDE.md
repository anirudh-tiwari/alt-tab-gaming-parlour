# Alt+Tab Gaming Café - Customization Guide

## 🎯 Important Customizations Needed

### 1. **WhatsApp Group Link**
Replace the placeholder WhatsApp link in these files:
- `src/components/Hero.tsx` (line 41)
- `src/components/Features.tsx` (line 92)
- `src/components/Contact.tsx` (line 61)

**Current:** `https://whatsapp.com/channel/0029VbBIJjFDuMRhnJxs6K1V`
**Replace with:** Your actual WhatsApp group invite link

### 2. **Google Form for Student Survey**
In `src/components/Contact.tsx` (line 28):

**Current:** `https://docs.google.com/forms/d/e/1FAIpQLSf_EXAMPLE_FORM_ID/viewform?embedded=true`

**Steps to create and embed your form:**
1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with questions like:
   - Would you hang out here if we open near college? (Yes/No/Maybe)
   - What games should we add? (Multiple choice)
   - What snacks/drinks do you prefer? (Checkboxes)
   - Preferred gaming hours? (Time slots)
   - Any suggestions?
3. Click "Send" → Click the `<>` (Embed) icon
4. Copy the iframe src URL
5. Replace the URL in Contact.tsx

### 3. **Instagram Handle**
In `src/components/Footer.tsx` (line 48 & 58):

**Current:** `@alttab.gaming` and `https://instagram.com/alttab.gaming`

**Action:**
1. Create your Instagram account (suggested: @alttab.gaming or @alttab_adgips)
2. Update both the URL and display name in Footer.tsx

### 4. **Hero Background Image**
In `src/components/Hero.tsx` (line 10):

**Current:** Using Unsplash stock image

**Optional:** Replace with your own gaming café photos once you have them:
```tsx
src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop"
```

Replace with your image URL or local image path.

---

## 📱 Mobile Responsiveness

All changes have been made with mobile-first design:
- ✅ Responsive text sizes (text-sm, md:text-base, lg:text-lg)
- ✅ Flexible grids (grid-cols-1, sm:grid-cols-2, lg:grid-cols-3)
- ✅ Touch-friendly buttons (full width on mobile)
- ✅ Proper spacing and padding for all screen sizes
- ✅ Emojis and icons for visual appeal

---

## 🎨 What's Been Improved

### 1. **Hero Section**
- ✅ Added powerful gaming café background image
- ✅ Added compelling tagline: "No chill zone near college? Problem solved. 50 steps from ADGIPS!"
- ✅ Changed CTA button to: "🔥 Join the Early Access Group"

### 2. **CTA Buttons (3 locations)**
- ✅ Top (Hero): "🔥 Join the Early Access Group"
- ✅ Middle (Features): "🚀 Be the First to Know"
- ✅ Bottom (Contact): "🎮 Reserve Your Spot"

### 3. **Why Hang Out Section**
- ✅ Added emojis for visual appeal (🎮, 🍔, 🛋, 🖥, 🎲, 🎓)
- ✅ Short, scannable descriptions
- ✅ Icon + emoji combination

### 4. **What We Offer Section**
- ✅ Added pricing teasers on each card
  - PS5/Xbox: "Starts from ₹50/hour"
  - Snacks: "Snacks from ₹30"
  - Offline Games: "Free with gaming"
- ✅ Added tournament highlight section
- ✅ "Compete with friends → Win snacks & free hours!"

### 5. **Engagement Section**
- ✅ Added embedded Google Form for student feedback
- ✅ Poll questions about preferences
- ✅ Market research data collection

### 6. **Footer**
- ✅ Changed "GameZone" to "Alt+Tab"
- ✅ Added Instagram handle with gradient styling
- ✅ Added "Made for students, by students 🎓"
- ✅ Added location: "50 steps from ADGIPS"

---

## 🚀 Next Steps

1. **Create WhatsApp Group** → Update links
2. **Create Google Form** → Embed in Contact section
3. **Create Instagram Account** → Update footer link
4. **Test on Mobile** → Open on your phone to verify
5. **Share with Friends** → Get initial feedback

---

## 📞 Support

If you need help with any customizations, feel free to ask!

**Good luck with your gaming café! 🎮🔥**