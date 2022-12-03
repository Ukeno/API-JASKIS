// paste the MongoDB commands you use underneath each prompt
    JASKIS
// GETTING STARTED
// 1. Create a database called jaskis
    "use jarkis"
    // "db"
// 2. Create a collection called bounties
    db.createCollection('bounties')
    // "show collections"
// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
    db.collection.insert()
// 2. Query for all bounties in the bounties collection
    db.collection.find()
// 3. Insert many bounties at once using the given objects
    db.collection.insertMany()
      
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
   db.collection.find(
    { location: 'Grasslands' }) 
// 2. Query for all bounties with a reward worth 10000 or more
   db.collection.find(
    { reward: { $gt: 9999 } })
// 3. Query for all bounties, but exclude the client attribute from being shown
   db.collection.find(
    {captured: false},{client: 0})
// 4. Query for a Groundhog in the Woodlands 
   db.collection.findOne(
    {species: 'Groundhog'},{location: 'Woodlands'}
    )
// Update and Delete
// 1. Update the reward for Polarwind to 10000 
   db.collection.updateOne(
    {name: 'Polarwind'},{$set:{ reward: 10000}}
    )
// 2. Remove Lokinkajou
  db.collection.deleteOne(
    { name: 'Lokinkajou'
    })
// 3. Delete all bounties sent by Songbird
  db.collection.deleteMany({
    client: 'Songbird'
  })
// 4. Update all captured statuses to true
  db.collection.updateMany({
    captured: false
  }, { $set: { captured: true } })