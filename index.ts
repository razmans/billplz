/**
 * @module CreateBillplz
 * @param payload CreateBillPayload
 * @returns
 */
/** Create billplz bill */

export async function CreateBillplz(payload: CreateBillPayload): Promise<any> {
  const username = payload.id;
  const basicAuthToken = btoa(`${username}:`);

  const mainPayload = { ...payload, id: '' };

  try {
    const response = await fetch(`https://www.billplz.com/api/v3/bills`, {
      method: 'POST',
      body: JSON.stringify(mainPayload),
      headers: {
        Authorization: `Basic ${basicAuthToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      // If the response has an error status code, log the status and statusText for troubleshooting
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();

    return { response: responseData };
  } catch (error) {
    console.error('Error creating bill:', error);
    throw error; // Re-throwing to allow further handling if necessary
  }
}

/**
 * @module DeleteBillplz
 * @param payload BillDataPayload
 * @returns
 */
/** Delete billplz bill */
export async function DeleteBillplz(payload: BillDataPayload): Promise<any> {
  const username = payload.id;
  const basicAuthToken = btoa(`${username}:`);

  try {
    const response = await fetch(
      `https://www.billplz.com/api/v3/bills/${payload.billplzId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Basic ${basicAuthToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      // If the response has an error status code, log the status and statusText for troubleshooting
      throw Error(`Error: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    // console.log('responseData', responseData);
    return { response: responseData };
  } catch (error) {
    // console.error('Error creating bill:', error);
    throw error; // Re-throwing to allow further handling if necessary
  }
}

/**
 * @module CheckBillplzStatus
 * @param payload CheckBillStatusPayload
 * @returns
 */
/** Check billplz bill status */
export async function CheckBillplzStatus(
  payload: BillDataPayload
): Promise<any> {
  const username = payload.id;
  const basicAuthToken = btoa(`${username}:`);

  try {
    const response = await fetch(
      `https://www.billplz.com/api/v3/bills/${payload.billplzId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${basicAuthToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      // If the response has an error status code, log the status and statusText for troubleshooting
      throw Error(`Error: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    // console.log('responseData', responseData);
    return { response: responseData };
  } catch (error) {
    // console.error('Error creating bill:', error);
    throw error; // Re-throwing to allow further handling if necessary
  }
}

/**
 * @module GetTransactionListBillplz
 * @param payload BillDataPayload
 * @returns
 */
/** Get all billplz transaction by ID */
export async function GetTransactionListBillplz(
  payload: BillDataPayload
): Promise<any> {
  const username = payload.id;
  const basicAuthToken = btoa(`${username}:`);
  try {
    const response = await fetch(
      `https://www.billplz.com/api/v3/bills/${payload.billplzId}/transactions`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${basicAuthToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      // If the response has an error status code, log the status and statusText for troubleshooting
      throw Error(`Error: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    // console.log('responseData', responseData);
    return { response: responseData };
  } catch (error) {
    // console.error('Error creating bill:', error);
    throw error; // Re-throwing to allow further handling if necessary
  }
}

/**
 * @module CreateBillplzPayload
 */
/** Create billplz payload interface */
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

/**
 * @module BillDataPayload
 */
/** Bill data billplz payload*/
export interface BillDataPayload {
  id: string;
  billplzId: string;
}
