/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // remove field
  collection.fields.removeById("relation3380775981")

  // remove field
  collection.fields.removeById("relation345886070")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2451244565",
    "hidden": false,
    "id": "relation3380775981",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "couleur_branches",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2451244565",
    "hidden": false,
    "id": "relation345886070",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "couleur_monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
