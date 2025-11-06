/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3762947601")

  // remove field
  collection.fields.removeById("text2587067636")

  // remove field
  collection.fields.removeById("text3376662657")

  // remove field
  collection.fields.removeById("text499495288")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3762947601")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2587067636",
    "max": 0,
    "min": 0,
    "name": "rose",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3376662657",
    "max": 0,
    "min": 0,
    "name": "bleu",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text499495288",
    "max": 0,
    "min": 0,
    "name": "orange",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
