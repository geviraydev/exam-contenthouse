import { schema } from 'normalizr'

const company = new schema.Entity('companies')
const user = new schema.Entity('users')

export const Schemas = {
  COMPANY: company,
  COMPANY_ARRAY: [company],
  USER: user,
  USER_ARRAY: [user],
}

export default Schemas
