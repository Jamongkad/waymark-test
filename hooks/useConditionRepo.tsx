import { useEffect, useState } from 'react'
import { Condition } from '../interfaces';
import axios from 'axios'

const apiPaths = {
  getConditions: () => `/api/conditions`
}

const useConditionRepo = () => {
  const [conditions, setConditions] = useState<Condition[]>([])

  useEffect(() => {
    const asyncOperation = async () => {
      try {
        const { data: { data } } = await axios.get(apiPaths.getConditions());
        
        const conditions = data.map(({ id, data: { name }}: {id: string, data: { name: string}}) => {
          const condition: Condition = {
            id, name
          }

          return condition;
        });

        setConditions(conditions);
      } catch (e) {
        throw e;
      }
    }

    asyncOperation();
  }, [])

  return {
    conditions
  }
}

export default useConditionRepo;