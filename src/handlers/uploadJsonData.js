async function uploadJsonData(event, context) {
    const { id } = event.pathParameters;
  
    return {
      statusCode: 200,
      body: JSON.stringify(id),
    };
  }
  
  export const handler = uploadJsonData;