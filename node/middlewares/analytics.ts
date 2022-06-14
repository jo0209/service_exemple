export async function analyticsMiddleware(
  context: Context,
  next: () => Promise<any>
) {
  const { clients } = context

  context.status = 200
  context.body = await clients.analytics.LiveProductViews('1234')
  context.set('cache-control', 'no-cache')

  await next()
}
