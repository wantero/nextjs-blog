export default (req, res) => {
  res
    .status(200)
    .json({ text: 'This is an API to test preview deployment at Vercel.' })
}
