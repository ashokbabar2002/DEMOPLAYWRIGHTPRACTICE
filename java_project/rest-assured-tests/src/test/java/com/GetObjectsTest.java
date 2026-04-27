package com;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
//import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import java.io.Console;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import java.util.List;
import java.util.Map;
import java.io.File;
//import org.json.JSONObject;
//import org.json.JSONArray;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchema;

//public class ApiTest {
    // @Test
    // public void testGetEndpoint() {
    //     RestAssured.useRelaxedHTTPSValidation();
    //     RestAssured.baseURI = "https://api.restful-api.dev";
    //     System.out.println("Starting API test");
    //     RequestSpecification request = RestAssured.given();
    //     Response response = request.get("/objects/3");
    //     String body = response.getBody().asString();
    //     JsonPath jsonPath = new JsonPath(body);
    //     Object data[] = jsonPath.get("name");
    //     System.out.println(data);
    //     System.out.println("API test completed");
    // }
public class GetObjectsTest {
   @Test
    public void testforSchemaValidation() {
        RestAssured.useRelaxedHTTPSValidation();
        RestAssured.baseURI = "https://api.restful-api.dev";

        System.out.println("Starting API test");
        RequestSpecification request = RestAssured.given();
        Response response = request.get("/objects/4");
        File filename = new File("C:\\Users\\2053068\\OneDrive - Cognizant\\Desktop\\DemoPlaywrightPractice\\java_project\\rest-assured-tests\\Schemacomp.json");
        response.then().body(matchesJsonSchema(filename));

       // String body = response.getBody().asString();
      //  JsonPath jsonPath = new JsonPath(body);

        // ✅ Extract COMPLETE array (each record as a Map)
       // List<Map<String, Object>> records = jsonPath.getList("$");

        // ✅ Print complete array properly
       // for (Map<String, Object> record : records) {
        //    System.out.println(record);
        //}

        System.out.println("API test completed");
   }

//    @Test
//    public void testPostcall() {
//         RestAssured.useRelaxedHTTPSValidation();
//         RestAssured.baseURI = "https://api.restful-api.dev";

//         System.out.println("Starting API test");
//         RequestSpecification request = RestAssured.given();
//         String payload = "{\n" + "  \"name\": \"Laptop3\",\n" +"  \"data\": {\n" +  "    \"brand\": \"Dell\",\n" +
//         "    \"ram\": \"16GB\"\n" +"  }\n" +  "}";
//         request.header("Content-Type", "application/json");
//         Response response = request.body(payload).post("/objects");
//         System.out.println(response.getStatusCode());
//         System.out.println("Response Body:\n" + response.getBody().asString());
        // @Test
        // public void testPostcallwithFile() {
        //      RestAssured.useRelaxedHTTPSValidation();
        //      RestAssured.baseURI = "https://api.restful-api.dev";    
        //      System.out.println("Starting API test");
        //      RequestSpecification request = RestAssured.given();
        //      request.header("Content-Type", "application/json");             
        //      File file = new File("C:\\Users\\2053068\\OneDrive - Cognizant\\Desktop\\DemoPlaywrightPractice\\java_project\\rest-assured-tests\\payload.json");   
        //      Response response = request.body(file).post("/objects");          
        //      System.out.println(response.getStatusCode());
        //      System.out.println("Response Body:\n" + response.getBody().asString());  
 //       @Test
            //  public void testPostcallwithJSONObj() {
            //       RestAssured.useRelaxedHTTPSValidation();
            //       RestAssured.baseURI = "https://api.restful-api.dev";    
            //       System.out.println("Starting API test");
            //       RequestSpecification request = RestAssured.given();
            //       request.header("Content-Type", "application/json");             
            //       JSONObject jsobobj = new JSONObject();
            //       jsobobj.put("name", "Laptop4");
            //       JSONArray dataArray = new JSONArray();
            //       dataArray.put("color");
            //       dataArray.put("capacity");
            //       jsobobj.put("data", dataArray); 
            //       System.out.println(jsobobj.toString());      
            //     // 
        
    
        // public class Pojoclass{
        //   String lastname;
        //   String firstname;
        //   String email;
        //   String programe;



        // }
                       
   }
        

