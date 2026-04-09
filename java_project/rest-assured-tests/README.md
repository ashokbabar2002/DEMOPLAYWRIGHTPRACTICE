# Rest Assured Tests

This project is a Maven-based Java application that utilizes RestAssured for API testing. It includes a set of test cases that validate the functionality of RESTful services.

## Project Structure

```
rest-assured-tests
├── src
│   ├── main
│   │   └── java
│   │       └── com
│   │           └── example
│   │               └── App.java
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── ApiTest.java
├── pom.xml
└── README.md
```

## Prerequisites

- Java 11 or higher
- Maven 3.6.0 or higher

## Dependencies

This project uses the following dependencies:

- **RestAssured**: For making HTTP requests and validating responses.
- **JUnit**: For running the test cases.

## Running the Tests

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd rest-assured-tests
   ```

3. Build the project and run the tests using Maven:
   ```
   mvn clean test
   ```

## Additional Setup

Make sure to configure any necessary environment variables or properties required for the API tests to run successfully. 

## License

This project is licensed under the MIT License.