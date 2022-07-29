export default async function handler(req, res) {
  const {
    query: { pageNumber },
  } = req;

  try {
    await res.revalidate(`/page-${pageNumber}`);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
