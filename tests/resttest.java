import restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
    class   Demo{
    public static void main(String[] args) {
        System.out.println("Hello World");
        RestassuredTest.baseURI="https://reqres.in/api";
        Response res=  given().get("/users?page=2");
        System.out.println(res.getStatusCode());
        System.out.println(res.getBody().asString());
        System.out.println(res.getStatusLine());
        System.out.println(res.getHeader("content-type"));
    }
e
}