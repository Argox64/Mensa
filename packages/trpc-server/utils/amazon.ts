const amazonPaapi = require('amazon-paapi');

const commonParameters = {
    AccessKey: process.env.ACCESS_KEY,
    SecretKey: process.env.SECRET_KEY,
    PartnerTag: process.env.PARTNER_TAG,
    Marketplace: process.env.MARKETPLACE,
    PartnerType: 'Associates',
};

export async function getUniqueProduct(searchTerms: string) {
    const requestParameters = {
        Keywords: searchTerms,
        SearchIndex: 'All',
        ItemCount: 1,
        Resources: [
            'Images.Primary.Medium',
            'ItemInfo.Title',
            'Offers.Listings.Price',
        ],
    };

    try {
        const data = await amazonPaapi.SearchItems(commonParameters, requestParameters);
        const item = data.SearchResult.Items[0];
        const asin = item.ASIN;
        const title = item.ItemInfo.Title.DisplayValue;
        const price = item.Offers.Listings[0].Price.DisplayAmount;
        const image = item.Images.Primary.Medium.URL;
        const affiliateLink = `https://www.amazon.fr/dp/${asin}/?tag=${process.env.PARTNER_TAG}`;

        return { title, price, image, affiliateLink, asin };
    } catch (e) {
        const error = e as Error;
        console.error(`Erreur lors de la recherche pour les termes "${searchTerms}":`, error.message);
        return null;
    }
}

export async function getMultipleProducts(searchTermsArray: string[]) {
    const results = await Promise.all(searchTermsArray.map(getUniqueProduct));
    return results.filter(result => result !== null);
}

export async function generateCartCreationLink(items: { asin: string; quantity: number }[]): Promise<string> {
    const baseUrl = 'https://www.amazon.fr/gp/aws/cart/add.html';
    const params = new URLSearchParams();
    const associateTag = process.env.PARTNER_TAG!;

    items.forEach((item, index) => {
        const idx = index + 1;
        params.append(`ASIN.${idx}`, item.asin);
        params.append(`Quantity.${idx}`, item.quantity.toString());
    });

    params.append('AssociateTag', associateTag);

    return `${baseUrl}?${params.toString()}`;
}