const fetch = require('node-fetch')

fetch('http://localhost:4000/safeql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
        query {
            books {
                author {
                    books {
                        author {
                            books {
                                author {
                                    books {
                                        author {
                                            books {
                                                author {
                                                    books {
                                                        author {
                                                            books {
                                                                author {
                                                                    books {
                                                                        author {
                                                                            books {
                                                                                author {
                                                                                    books {
                                                                                        author {
                                                                                            books {
                                                                                                author {
                                                                                                    books {
                                                                                                        author {
                                                                                                            books {
                                                                                                                author {
                                                                                                                    books {
                                                                                                                        author {
                                                                                                                            books {
                                                                                                                                name
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } 
            }
        }
      `,
    variables: {
    },
  }),
})
  .then((res) => res.json())
  .then((result) => console.log(result));


/*
query{books{author{name}}}
let queryString = 'query{';

for {i =0 ; i < complexity; i++} {
  
  querystring += 'books{author{'
}

queryString += (name + '}'.repeat(complexity))

*/

/*
query allSchemaTypes {  
    __schema {  
        types {  
            fields {  
                type{  
                    fields {  
                        type {  
                            fields {  
                                type {  
                                    fields {  
                                        type {
                                          	fields {
                                            		type {
                                                		fields {
                                                    		type {
                                                        		fields {
                                                            		type {
                                                                		fields {
                                                                    		type {
                                                                        		fields {
                                                                                type {
                                                                                  	fields {
                                                                                      	type {
                                                                                          	fields {
                                                                                              	type {
                                                                                                  	fields {
                                                                                                      	type {
                                                                                                          	fields {
                                                                                                              	type {
                                                                                                                  	fields {
                                                                                                                      	type {
                                                                                                                          	fields {
                                                                                                                              	type {
                                                                                                                                  	fields {
                                                                                                                                      	type {
                                                                                                                                          	fields {
                                                                                                                                              	type {
                                                                                                                                                  	fields {
                                                                                                                                                      	type {
                                                                                                                                                        		fields {
                                                                                                                                                            		type {
                                                                                                                                                                		fields {
                                                                                                                                                                    		type {
                                                                                                                                                                        		fields {
                                                                                                                                                                            		type {
                                                                                                                                                                                		fields {
                                                                                                                                                                                    		type {
                                                                                                                                                                                        		fields {
                                                                                                                                                                                            		type {
                                                                                                                                                                                                		fields {
                                                                                                                                                                                                    		type {
                                                                                                                                                                                                        		fields {
                                                                                                                                                                                                            		type {
                                                                                                                                                                                                                		fields {
                                                                                                                                                                                                                    		type {
                                                                                                                                                                                                                        		fields {
                                                                                                                                                                                                                            		type {
                                                                                                                                                                                                                                		fields {
                                                                                                                                                                                                                                    		type {
                                                                                                                                                                                                                                        		fields {
                                                                                                                                                                                                                                            		type {
                                                                                                                                                                                                                                                		fields {
                                                                                                                                                                                                                                                    		type {
                                                                                                                                                                                                                                                        		fields {
                                                                                                                                                                                                                                                            		type {
                                                                                                                                                                                                                                                                		fields {
                                                                                                                                                                                                                                                                       type {
                                                                                                                                                                                                                                                                    			fields {
                                                                                                                                                                                                                                                                          		name
                                                                                                                                                                                                                                                                        		}	
                                                                                                                                                                                                                                                                    		}
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }  
                                                                        }
                                                                    }
                                                                }  
                                                        		}  
                                                    		}
                                                		}
                                            		}
                                        		}
                                    		}
                                    }  
                                }  
                            }  
                        }  
                    }  
                }  
            }  
        }  
    }  
}
*/