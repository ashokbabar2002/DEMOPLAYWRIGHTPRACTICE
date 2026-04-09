package com;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.Console;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

//public class ApiTest {    
// @Test
// public void testGetEndpoint1() {

//     given()
//         .relaxedHTTPSValidation()
//     .when()
//         .get("https://your-api-url.com")
//     .then()
//         .statusCode(200);
// }
public class ApiTest {
    @Test
    public void testGetEndpoint() {
        RestAssured.useRelaxedHTTPSValidation();
        RestAssured.baseURI = "https://api.restful-api.dev";
        System.out.println("Starting API test");

        
        Response response = RestAssured.given().log().all().when().get("/objects/3");
        RestAssured.requestSpecification = given()
        System.out.println("Status Code: " + response.getStatusCode());
        System.out.println("Response Body:");
        System.out.println(response.getBody().prettyPrint());
        response.then().statusCode(200);
        String resp = response.getBody().asString();
        JsonPath jsonPa = new JsonPath(resp);
        jsonPa.get("data.color").toString().contains("red");
        System.out.println("Test completed");
    }
}
