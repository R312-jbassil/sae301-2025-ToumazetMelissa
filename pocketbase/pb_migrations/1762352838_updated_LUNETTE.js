/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2451244565",
    "hidden": false,
    "id": "relation3380775981",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "couleur_branche",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2451244565",
    "hidden": false,
    "id": "relation3380775981",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "nom_couleur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
