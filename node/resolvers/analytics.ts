interface LiveProductViewsArgs {
  producSlug: string
}

export const liveProductViews = async (
  _: any,
  args: LiveProductViewsArgs,
  ctx: Context
) => {
  const response = await ctx.clients.analytics.LiveProductViews(
    args.producSlug.toString()
  )

  return {
    slug: response[0].slug,
    LiveViews: response[0].LiveUsers,
  }
}
