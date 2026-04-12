test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
 
  // test updated_At is defined and is a valid date string

  const parsedUpdatedAt = new Date(responseBody.updated_At).toISOString();
  expect(responseBody.updated_At).toEqual(parsedUpdatedAt);


  // test version  
  expect(responseBody.dependencies.database.version).toEqual("16.0");


  // test max_Connections and opened_Connections

  expect(responseBody.dependencies.database.max_Connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_Connections).toEqual(1);

});
