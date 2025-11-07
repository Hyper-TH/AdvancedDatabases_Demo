# https://docs.ferretdb.io/usage/data-api/
# FERRETDB_LISTEN_DATA_API_ADDR=:8080

# Insert a document
curl -X POST http://localhost:8080/action/insertOne \
  -H "Content-Type: application/json" \
  -u <username>:<password> \
  -d '{
        "database": "db",
        "collection": "books",
        "document": {
          "_id": "pride_prejudice_1813",
          "name": "Pride and Prejudice",
          "authors": [{ "name": "Jane Austen", "nationality": "British" }],
          "publication": {
            "date": "1813-01-28T00:00:00Z",
            "publisher-name": "T. Egerton"
          }
        }
      }'

# Delete a document
curl -X POST http://localhost:8080/action/deleteOne \
  -H "Content-Type: application/json" \
  -u <username>:<password> \
  -d '{
        "database": "db",
        "collection": "books",
        "filter": { "_id": "pride_prejudice_1813" }
      }'

