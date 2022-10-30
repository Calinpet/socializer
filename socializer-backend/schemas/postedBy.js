// create postedBy schema
// reference to an array of user for user to be able to post multiple comments
export default {
  name: 'postedBy',
  title: 'Posted By',
  type: 'reference',
  to: [{type: 'user'}]
}