import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import {Book} from './models/bookModel.js'


const app = express();

// Middleware to parse JSON-encoded request bodies
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });  

// Route for Save a new Book
app.post('/books', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from the database
app.get('/books', async (request, response) => {
  try {
    // Attempt to fetch all books from the database using the Book model
    const books = await Book.find({});

    // If successful, respond with a JSON object containing the count and data of the books
    return response.status(200).json({ count: books.length, data: books });

  } catch (error) {
    // If an error occurs during the database operation, log the error message
    console.log(error.message);

    // Respond with a 500 Internal Server Error status and an error message in the JSON format
    return response.status(500).send({ message: error.message });
  }
});

// Route for Getting one specific Book by its ID
app.get('/books/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);

    if (!book) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: 'Internal Server Error' });
  }
});


mongoose.connect(mongoDBURL)
.then(() => {
  console.log('App connected to the database');

  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
})
.catch((error) => {
  console.log(error);
});