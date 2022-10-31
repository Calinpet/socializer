// created to make a call to sanity from our api request
import type { NextApiRequest, NextApiResponse } from 'next';

import { allPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';


// req: means thst we are using typescript
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse) {
  if(req.method === 'GET') {
    const query = allPostsQuery();
    // fetch the data
    const data = await client.fetch(query);

    res.status(200).json(data);
  };
};
