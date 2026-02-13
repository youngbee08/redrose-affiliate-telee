# Affluence Global Affiliate Platform

A modern, frontend-first web experience for product enquiries, affiliate onboarding, and purchase verification — powered by a streamlined WhatsApp-based workflow.

---

## Overview

This platform helps customers and prospective affiliates to:

- Send enquiries via a structured contact form
- Place orders without a traditional checkout system
- Submit payment verification details through WhatsApp
- View saved order information on return (session-based)

It is intentionally lightweight and designed for regions where WhatsApp is the most trusted and commonly used communication channel.

---

## Core Features

### 1) Contact Page (WhatsApp-first)

- Structured form: **Full Name, Email, Subject, Message**
- No backend dependency
- On submit, WhatsApp opens with a **pre-filled message**
- Users can review and edit before sending
- Mobile-first and responsive

**Why it works**

- Reduces friction
- Ensures consistent message format
- Speeds up response and resolution

---

### 2) Purchase Page (Order + Payment Flow)

- Quantity is read from `sessionStorage` (fallback to `1`)
- Displays bank transfer details clearly
- Includes:
  - Product summary
  - Quantity selector
  - Shipping information
  - Total amount calculation
- Receipt selection supports **images** and **PDFs**
- On submit:
  - Order details are saved to `sessionStorage`
  - Order status is stored as **Pending**
  - WhatsApp opens with a structured verification message

**Note:**  
Receipts are selected locally. The user attaches the receipt file directly in WhatsApp.

---

### 3) Bank Transfer Details (with Copy Support)

Displayed on the purchase page with clear payment guidance.

**Bank Information**

- **Bank Name:** UBA
- **Account Name:** AFFLUENCE GLOBAL NUTRITION AND WELLNESS LTD
- **Account Number:** 1026783434
- **Branch:** POWA PLAZA, ABUJA

Includes:

- One-click copy for account number
- Reminder to include customer name in transfer narration

---

### 4) Payment Status Page (Session-based)

After submitting an order, users can return to the website and still see:

- Order ID
- Product name
- Quantity
- Amount
- Date
- Current status: **Pending / Verified** (future-controlled)

Users can also:

- Replace/change a receipt file (local selection)
- Re-open WhatsApp with the saved order details
- Start a new order when needed

---

## Order Lifecycle

1. User selects product and quantity
2. User provides shipping details
3. Payment is made via bank transfer
4. Receipt is selected locally
5. Order is saved in `sessionStorage` with status `pending`
6. WhatsApp opens with a structured verification message
7. Admin verifies payment manually
8. Status update can be introduced later (optional enhancement)

---

## Technical Notes

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **Persistence:** `sessionStorage`
- **Communication:** WhatsApp deep links
- **Backend:** Not required for current workflow

---

## UX Principles

- Mobile-first layout
- Clear calls-to-action
- Minimal steps, low cognitive load
- Familiar communication channel (WhatsApp)
- Transparent order flow and continuity

---

## Future Enhancements (Optional)

- Store multiple orders (history) instead of a single pending order
- Auto-expire pending orders after a time window
- Admin verification dashboard
- Backend storage for receipts
- Email + WhatsApp dual notifications

---

## Website Credits

This website experience was **designed and maintained by Zenith Dev™**.

© Affluence Global Nutrition & Wellness Ltd
