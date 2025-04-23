import { publicProcedure, router } from "../trpc";
import { AffiliationRequestSchema } from "@cook/validations";
import { getMultipleProducts, generateCartCreationLink } from "../utils/amazon";

export const affiliationsRouter = router({
    getLink: publicProcedure
        .input(AffiliationRequestSchema)
        .query(async ({ input, ctx }) => {
            if (input.marketPlace === "amazon") {
                const amazonResponse = await getMultipleProducts(input.searchTerms);
                if (!amazonResponse) {
                    return {
                        error: "Error in creating amazon affiliate link",
                    }
                }
                else {
                    ctx.prisma.shoppingAffiliation.create({
                        data: {
                            amount: amazonResponse.reduce((acc, product) => acc + product.price, 0),
                            userId: ctx.user ? ctx.user.id : "",
                            trackingUrl: await generateCartCreationLink(amazonResponse.map(product => ({
                                asin: product.asin, quantity: 1})
                            ))
                        }
                    })
                }

                return amazonResponse;
            }
        })
});
