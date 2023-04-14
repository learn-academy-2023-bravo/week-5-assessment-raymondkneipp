# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:

In object oriented programming (OOP), when you call super, it calls the parent class. So to use super you must be working in a child class. The child class inherits the parent class. To be able to utilize the parent class you must call super. If the parent class needs data when it is initialized then you can pass that information into super.

Researched answer:

In Ruby, calling super in a method will invoke the same method in the parent class. This is useful if you want to override some or all of the functionality from the parents implementation of that method. Here is an example:

```ruby
class Kid
  def responsibilities
    ['Clean room']
  end
end

class Adult < Kid
  def responsibilities
    super << 'Pay bills' << 'Pay taxes' << 'Provide for family'
  end
end
```

The kid class has one responsibility. The Adult class inherits from kid and adds more responsibilities on top of the responsibilities of a kid.

2. What is a gem?

Your answer:

In Ruby a gem code that someone write to complete a certain task. For example rails is a gem that someone created to enable developers to create a full stack application with Ruby. Rails relies on gems that other developers created. Gems are dependencies that your application depends on. Rather than writing functionality from scratch, you can probably find a gem that will do it for you.

Researched answer:

In Ruby, a gem is a packaged library or application that can be easily installed and managed with the RubyGems package manager.

A gem typically consists of a collection of Ruby code and other files that provide functionality that can be easily reused by other developers in their Ruby projects. Gems can be used to provide anything from simple utility classes to entire web frameworks, and they often depend on other gems to provide additional functionality.

When you want to use a gem in your project, you first need to install it using the gem command-line tool. Once installed, you can include the gem in your code using the require statement.

3. What is a relational database? Are there other kinds of databases?

Your answer:

Databases allow you to persist data. You can think of a database as a table. Each column holds a specific kind of data and each row holds a collection of data. Typically you have a column that holds a primary key also known as a unique identifier (id). The id is used to identify each record of data.

table: users

| id  | name | age |
| --- | ---- | --- |
| 1   | Jess | 22  |
| 2   | Ray  | 23  |

Relational databases use foreign keys to associate data with other data.

table: pets

| id  | name   | userid |
| --- | ------ | ------ |
| 1   | Thor   | 2      |
| 2   | Smokey | 2      |
| 3   | Papi   | 1      |

The user_id is a foreign key that is used to relate the row to a specific user. Jess has one animal names Papi, and I have two pets named Thor and Smokey.

There are many types of databases. It is important to know the pros and cons of each. Redis is a database that uses key-value pairs. The data structure is less complex and this makes Redis a great option if your data structure is very simple and speed is important.

Researched answer:

A relational database is a type of database that organizes data into one or more tables, where each table consists of a set of columns and rows. The columns represent attributes or properties of the data, while the rows represent individual records. The relationships between tables are defined by matching keys in each table, which enables data to be organized and retrieved efficiently.

There are several other types of databases, including:

1. Object-oriented databases: These databases store data in the form of objects, which encapsulate data and related behavior.

2. NoSQL databases: These databases do not use a structured query language like SQL and are designed to handle large amounts of unstructured data.

3. Document-oriented databases: These databases store data in the form of documents, which can be hierarchical or flat.

4. Graph databases: These databases store data in a graph-like structure, where nodes represent entities and edges represent relationships between them.

5. Time-series databases: These databases are optimized for storing and querying time-stamped data, such as sensor data or financial data.

Each type of database has its own strengths and weaknesses and is designed to handle specific types of data and use cases.

4. What are primary keys? Why are they important?

Your answer:

Primary keys are unique identifiers just like everyone in the US has a social security number. Without a primary key you have no way to access a specific record. You could query for a record with a certain name, but what if multiple people have the same name. Lets say Ryan Reynolds wanted to delete his Facebook account because he is tired of all the DM's from thirsty men. Ryan runs the following SQL:

```sql
DELETE FROM users WHERE name = 'Ryan Reynolds'
```

This command deletes all users with the anem of Ryan Reynolds so Ryan Reynolds JR's account gets deleted along with all the Ryan Reynolds copycats. If Facebook had implemented a primary key, then he could have deleted only his account.

Researched answer:

In relational databases, a primary key is a unique identifier that is assigned to each row in a table. It is a column or set of columns that uniquely identifies each record in a table, and ensures that each row has a unique identity.

Primary keys are important because they serve as the basis for establishing relationships between tables in a database. By using primary keys, it is possible to link tables together in a way that allows data to be retrieved and analyzed more efficiently. Primary keys also enforce data integrity, since they prevent duplicate data from being entered into a table.

In addition to their role in database relationships and data integrity, primary keys are also used in indexing and sorting data. Since primary keys are unique, they can be used to quickly and efficiently locate specific rows in a table.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:

HTTP verbs are used in conjunction with a URL. Based on the verb being used, a different action can be taken on the server. The verb also dictates whether a body should be passes in a request. For example a GET request should not have a body. Here are some examples of HTTP verbs and their uses.

- GET: used to retrieve data
- DELETE: used to remove data
- POST: used to add data
- PATCH: used to update part of the data
- PUT: used to update a whole record

When creating a server you can technically interchange any verb with any action, but there are standards to follow. You can very well create an endpoint that accepts a GET request and have it delete data although this is not encouraged. Instead you should use the DELETE http verb.

Researched answer:

HTTP (Hypertext Transfer Protocol) is a protocol used for transferring data over the web. HTTP defines a set of HTTP verbs which indicate the action to be performed on a resource identified by a URL.

The HTTP verbs are:

| Verb   | Action           | Description                                       |
| ------ | ---------------- | ------------------------------------------------- |
| GET    | Read             | retrieve information from the server              |
| POST   | Create           | submit an entity to the server                    |
| PUT    | Update           | update an existing entity on the server           |
| PATCH  | Update (partial) | update a part of an existing entity on the server |
| DELETE | Delete           | delete an entity from the server                  |

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations:

In Ruby on Rails, you can use model validations to ensure that the data being saved to the database meets certain requirements. These validations are defined in your model class using ActiveRecord's validation helpers.

2. RESTful routes:

RESTful routes are a way for a web application to tell the internet how to do things with the information it's sending. It's like giving someone a map with directions to your house, but instead of your house, it's a resource like a list of things. The map tells the person which roads to take (HTTP verbs) and which turns to make (URLs) to get to your house (the resource). This helps the web application understand what the person wants to do and respond in the right way.

3. ERB:

ERB stands for Embedded Ruby. It is a templating language that allows you to embed Ruby code into a plain text document, which can be used to generate dynamic content for a web page or other document.

4. Params:

Request parameters are typically sent as key-value pairs in the URL query string, or in the request body as part of an HTTP POST request. The server-side application can then use the request parameters to dynamically generate content, perform database queries, or make decisions based on user input.

5. API:

API stands for Application Programming Interface. In general, an API refers to a set of rules and protocols that define how different software components should interact with each other.
