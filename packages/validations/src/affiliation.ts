import { z } from './customs';

export const AffiliationRequestSchema = z.object({
    searchTerms: z.string().array(),
    marketPlace: z.enum(["amazon"])
});