# What is an Entity?
Entities are powerful but can be confusing to designers unfamiliar with natural language understanding (NLU). An entity represents a data point found in what a user says to a bot. They can also be thought of as the data the system needs users to provide in order to carry out their request. When the value of an entity changes or is altogether left out the bot must respond accordingly.  

## Example of an Entity
Coffee-order request to a coffee shop’s ordering bot:

“I’d like to order a coffee to-go”

The entities in this system are **coffee** and **to-go**. **Coffee** is the value that describes the item the user is ordering. That entity could be named **order-item** and could have many possible supported values based on what the coffee shop has on its menu. **Coffee** could be changed to another value like **cappuccino** or **latte** which would change the user's order. **To-go** is treated as another entity because the coffee shop uses different types of cups for **to-go** orders which gets communicated to the baristas making the order. 
