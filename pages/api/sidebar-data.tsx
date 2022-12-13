import { NextApiRequest, NextApiResponse } from 'next';
import { data } from './data/sidebar-data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(data);
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
