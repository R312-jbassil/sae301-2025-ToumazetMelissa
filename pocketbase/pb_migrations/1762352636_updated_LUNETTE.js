/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // remove field
  collection.fields.removeById("json3309110367")

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3309110367",
    "max": 0,
    "min": 0,
    "name": "image",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "json3309110367",
    "maxSize": 0,
    "name": "image",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("text3309110367")

  return app.save(collection)
})
