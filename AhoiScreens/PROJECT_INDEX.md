# AhoiScreens Project Index

## Project Structure

### Screens
- **signin.tsx** - User authentication screen
- **signup.tsx** - User registration screen
- **home.tsx** - Empty home screen
- **homefilled.tsx** - Main home screen with recent requests
- **payments.tsx** - Payments and transactions screen
- **downloadreciept.tsx** - Request details modal (used as receipt/details view)
- **invoice.tsx** - Invoice screen
- **AllRequests.tsx** - All requests listing
- **servicedetails.tsx** - Service details screen
- **servicedetailschedule.tsx** - Service scheduling screen
- **servicedetailpayment.tsx** - Service payment screen
- **EditPayment.tsx** - Payment editing screen
- **PaymentMethods.tsx** - Payment methods management
- **TransactionDetails.tsx** - Transaction details modal

## Navigation Flow

### Main Navigation
1. **SignIn** → **HomeFilled** (main app entry)
2. **HomeFilled** → **DownloadReceipt** (View Details button)
3. **Payments** → **DownloadReceipt** (View Details button)
4. **HomeFilled** → **ServiceDetails** (Request button/navigation)

### Key Features

#### HomeFilled Screen
- Displays recent requests with status badges
- "View Details" button navigates to DownloadReceipt with requestId parameter
- Bottom navigation with Home, Request, Payments, Profile tabs

#### DownloadReceipt Screen
- Modal presentation style
- Dynamic content based on requestId parameter
- Shows request details, requestor info, location, completion status
- Close button returns to previous screen
- Download Receipt functionality

#### Payments Screen
- Tab-based interface (Transactions / Payment Methods)
- Transaction cards with "View Details" button
- Navigates to DownloadReceipt for detailed transaction view

## Data Flow

### Request Data Structure
```typescript
{
  serviceName: string;
  description: string;
  requestor: string;
  dateTime: string;
  location: string;
  completionTime: string;
  amount: string;
  status: 'Completed' | 'Pending';
}
```

### Navigation Parameters
- **DownloadReceipt**: `{ requestId: string }`
- Request data is fetched based on requestId (currently mocked)

## Styling
- Consistent design system with #0b8494 primary color
- SF Pro Display/Text font family
- Status badges with appropriate colors (green for completed, yellow for pending)
- Modal presentation with drag handle
- Responsive design considerations

## Integration Points
- Navigation configured in App.js with React Navigation
- Modal presentation for DownloadReceipt screen
- Shared components and styling patterns across screens