import type { NextApiRequest, NextApiResponse } from 'next'
import { DocumentData } from "firebase/firestore";
import ConditionService from './ConditionService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   const {
    body: { label },
    method,
  } = req 

  const conditionService = new ConditionService();

  switch(method) {
    case 'GET':
      try {
        const snapshot = await conditionService.getAllConditions();

        let data: DocumentData[] = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, data: doc.data()});
        });

        res.status(200).json({ data })
      } catch (e:any) {
        console.error(e);
        res.status(500).json({ name: e });
      }
      break
    case 'POST':
      try {
        await conditionService.createCondition(label);
        res.status(200).json({ name: 'Condition Created' });
      } catch (e:any) {
        console.error(e);
        res.status(500).json({ name: e });
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}