// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { VersionResponseData } from '../../src/types'


export default (req: NextApiRequest, res: NextApiResponse<VersionResponseData>) => {
  res.status(200).json({ version: 'amplify-v1.1' })
}
