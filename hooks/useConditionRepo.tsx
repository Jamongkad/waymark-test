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
        
        const conditions = data.map(({ id, data: { label }}: {id: string, data: { label: string}}) => {
          const condition: Condition = {
            id, label
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