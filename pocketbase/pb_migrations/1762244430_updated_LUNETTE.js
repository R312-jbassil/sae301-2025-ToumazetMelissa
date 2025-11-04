/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4196457647",
    "hidden": false,
    "id": "relation1175667255",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "taille_pont",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_834415713",
    "hidden": false,
    "id": "relation4105839681",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "taille_verre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // remove field
  collection.fields.removeById("relation1175667255")

  // remove field
  collection.fields.removeById("relation4105839681")

  return app.save(collection)
})
