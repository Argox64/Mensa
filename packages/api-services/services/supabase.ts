import { IContext } from "../context";

export async function uploadImageToSupabaseFromUrl({ ctx, imageUrl, filePath }: { ctx: IContext, imageUrl: string, filePath: string }) {
    const res = await fetch(imageUrl)
    if (!res.ok) throw new Error(`Échec de téléchargement de l’image: ${res.statusText}`)

    const buffer = Buffer.from(await res.arrayBuffer())

    const supabase = await ctx.supabase();

    const { data, error } = await supabase.storage
        .from('images') // nom de ton bucket
        .upload(filePath, buffer, {
            contentType: 'image/png',
            upsert: true,
        })

    if (error) throw error

    return data;
}