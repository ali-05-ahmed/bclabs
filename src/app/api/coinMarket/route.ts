import { NextRequest, NextResponse } from 'next/server';

const API_KEY = 'fad3c46a-34f5-408e-b9cb-720519b3cfad';
const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
    });
    const data = await response.json();

    // Filter the data to include only the specified cryptocurrencies
    const filteredData = data.data.filter((crypto: any) =>
      ['BTC', 'ETH', 'DOGE', 'ALGO', 'DOT', 'UNI', 'COMP'].includes(crypto.symbol),
    );

    return NextResponse.json({ filteredData });
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return NextResponse.error();
  }
}
