/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // add field
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

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_472471971",
    "hidden": false,
    "id": "relation2414000814",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "materiau_monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2753734673",
    "hidden": false,
    "id": "relation1867358861",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "materiau_verre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // remove field
  collection.fields.removeById("relation3380775981")

  // remove field
  collection.fields.removeById("relation2414000814")

  // remove field
  collection.fields.removeById("relation1867358861")

  return app.save(collection)
})
