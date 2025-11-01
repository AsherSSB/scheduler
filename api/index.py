from fastapi import FastAPI

### Create FastAPI instance with custom docs and openapi url
app = FastAPI()


@app.get("/hello")
def hello_fast_api():
    return {"message": "Hello World"}
