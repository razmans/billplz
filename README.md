# Billplz API Wrapper

A TypeScript API wrapper for Billplz's billing and transaction API, enabling users to create, delete, and check bills and transactions.

Based on Billplz V3 API: https://www.billplz.com/api#v3-bills

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [CreateBillplz](#createbillplz)
  - [DeleteBillplz](#deletebillplz)
  - [CheckBillplzStatus](#checkbillplzstatus)
  - [GetTransactionListBillplz](#gettransactionlistbillplz)
- [Interfaces](#interfaces)
  - [CreateBillPayload](#createbillpayload)
  - [BillDataPayload](#billdatapayload)
- [License](#license)

## Installation

Install the required dependencies by adding them to your project.

### NPM
```bash
npx jsr add @razmans/billplz
```

### DENO
```bash
deno add jsr:@razmans/billplz
```

### YARN
``` bash
yarn dlx jsr add @razmans/billplz
```

### PNPM
``` bash
pnpm dlx jsr add @razmans/billplz
```

### BUN
``` bash
bunx jsr add @razmans/billplz
```

## Usage

### 1. CreateBillplz

Creates a new bill in Billplz with the specified details.

```typescript
import { CreateBillplz, CreateBillPayload } from '@razmans/billplz';

const billData: CreateBillPayload = {
  id: 'your-billplz-id-xxxx-xxxx',
  collection_id: 'your-collection-id',
  description: 'Item description',
  email: 'bob.abc@yopmail.com',
  name: 'Bob Abc',
  amount: 5000,
  callback_url: 'https://yourwebsite.com/your-callback-url',
  redirect_url: 'https://yourwebsite.com/redirect-url'
};

CreateBillplz(billData).then(response => {
  console.log('Bill created:', response);
}).catch(error => {
  console.error('Error creating bill:', error);
});
```

### 2. DeleteBillplz

Deletes an existing bill in Billplz based on `billplzId`.

```typescript
import { DeleteBillplz, BillDataPayload } from '@razmans/billplz';

const billData: BillDataPayload = {
  id: 'your-billplz-id-xxxx-xxxx',
  billplzId: 'your-collection-id',
};

DeleteBillplz(billData).then(response => {
  console.log('Bill deleted:', response);
}).catch(error => {
  console.error('Error deleting bill:', error);
});
```

### 3. CheckBillplzStatus

Checks the status of a bill by `billplzId`.

```typescript
import { CheckBillplzStatus, BillDataPayload } from '@razmans/billplz';

const billData: BillDataPayload = {
  id: 'your-billplz-id-xxxx-xxxx',
  billplzId: 'your-collection-id',
};

CheckBillplzStatus(billData).then(response => {
  console.log('Bill status:', response);
}).catch(error => {
  console.error('Error checking bill status:', error);
});
```

### 4. GetTransactionListBillplz

Retrieves the list of transactions associated with a specific bill `billplzId`.

```typescript
import { GetTransactionListBillplz, BillDataPayload } from '@razmans/billplz';

const billData: BillDataPayload = {
  id: 'your-billplz-id-xxxx-xxxx',
  billplzId: 'your-collection-id',
};

GetTransactionListBillplz(billData).then(response => {
  console.log('Transaction list:', response);
}).catch(error => {
  console.error('Error retrieving transaction list:', error);
});
```

## Interfaces

### CreateBillPayload

Defines the data structure for creating a bill.

```typescript
export interface CreateBillPayload {
  id: string;
  collection_id: string;
  description: string;
  email: string;
  name: string;
  amount: number;
  callback_url: string;
  redirect_url?: string;
  reference_1_label?: string;
  reference_1?: string;
  reference_2_label?: string;
  reference_2?: string;
}
```

### BillDataPayload

Defines the data structure for retrieving or deleting an existing bill.

```typescript
export interface BillDataPayload {
  id: string;
  billplzId: string;
}
```

## License

This project is licensed under the MIT License.
