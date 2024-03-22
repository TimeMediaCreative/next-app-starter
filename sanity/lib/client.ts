import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // Following settings overridden in draft mode
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
})
