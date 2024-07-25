/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i778nhgbocobxma");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "i778nhgbocobxma",
    "created": "2024-07-24 16:42:40.627Z",
    "updated": "2024-07-24 16:42:40.627Z",
    "name": "slider",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6vjwphrd",
        "name": "image",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
