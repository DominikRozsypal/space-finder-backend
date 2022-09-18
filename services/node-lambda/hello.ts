import { v4 } from "uuid"

async function handler(event: any, context: any) {
  console.log("Got it man!")
  return {
    statusCode: 200,
    body: "Hello from Lambda!" + v4(),
  }
}

export { handler }