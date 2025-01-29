// pages/api/mintAsset.js
import { Moralis } from 'moralis';

Moralis.initialize('YOUR_MORALIS_APP_ID');
Moralis.serverURL = 'YOUR_MORALIS_SERVER_URL';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { playerAddress, assetId } = req.body;

    try {
      // Minting logic here (using a contract or Moralis)
      const metadata = {
        name: `Asset ${assetId}`,
        description: 'A cool NFT for the player',
        image: 'https://example.com/asset.png',
      };

      const nft = await Moralis.Web3.createNFT({
        name: metadata.name,
        description: metadata.description,
        image: metadata.image,
        toAddress: playerAddress,
      });

      res.status(200).json({ success: true, nft });
    } catch (error) {
      console.error('Error minting asset:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
