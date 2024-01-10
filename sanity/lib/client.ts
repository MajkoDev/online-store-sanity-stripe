import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skTR1Dnxj5G7uvx8jT81UevWMW2nVMw2P7ea7b1xFdhvQWB2u7QCmz9d2ZC7DkLmjUkp39MJdAFjugxvL2cu5FiY6F3MAzJ8OdjxWrhYD5KiUClkFJORmPrkzch5pbLPboNUQlPHZU9G9y2m467cpVjUQX5GYbBEPe5Mi77eTQykH9z9sLrF"
})
