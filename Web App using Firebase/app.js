// app.js

// Import Firebase core + Firestore SDK from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 1️⃣ Firebase project configuration (replace with your own values from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyCUdWsUm0dVvNGwYzi-ayszEZahA9VE_yU",
  authDomain: "book-management-app-a4172.firebaseapp.com",
  projectId: "book-management-app-a4172",
  storageBucket: "book-management-app-a4172.firebasestorage.app",
  messagingSenderId: "749280571050",
  appId: "1:749280571050:web:e1fdeeb13b023e13ef2ad3"
};

// 2️⃣ Start Firebase and get a Firestore reference
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 3️⃣ Grab DOM elements needed for interaction
const form = document.getElementById("bookForm");
const booksGrid = document.getElementById("booksGrid");

// 4️⃣ Handle form submission: save a new book record
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.getElementById("titleInput").value.trim();
  const author = document.getElementById("authorInput").value.trim();
  const priceValue = document.getElementById("priceInput").value;
  const imageUrl = document.getElementById("imageInput").value.trim();

  const price = Number(priceValue);

  // Basic validation
  if (!title || !author || !price || !imageUrl) {
    alert("All fields are required before saving a book.");
    return;
  }

  const newBook = {
    title,
    author,
    price,
    coverImageUrl: imageUrl,
  };

  try {
    await addDoc(collection(db, "books"), newBook);
    form.reset(); // clear input fields after adding
  } catch (error) {
    console.error("Failed to create book document:", error);
    alert("Unable to add book right now. See console for details.");
  }
});

// 5️⃣ Listen to Firestore collection in real-time and update UI
onSnapshot(collection(db, "books"), (snapshot) => {
  // Clear the grid before re-rendering
  booksGrid.innerHTML = "";

  snapshot.forEach((docSnap) => {
    const bookData = docSnap.data();
    const bookId = docSnap.id;
    drawBookCard(bookId, bookData);
  });
});

// 6️⃣ Create and display a single book card
function drawBookCard(id, book) {
  const card = document.createElement("div");
  card.className = "book-card";

  card.innerHTML = `
    <img src="${book.coverImageUrl}" alt="${book.title}" />
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Price:</strong> ₹${book.price}</p>

    <div class="actions">
      <button class="btn-update" data-id="${id}">Update Author</button>
      <button class="btn-delete" data-id="${id}">Delete</button>
      <button class="btn-details" data-id="${id}">Details</button>
    </div>
  `;

  const updateBtn = card.querySelector(".btn-update");
  const deleteBtn = card.querySelector(".btn-delete");
  const detailsBtn = card.querySelector(".btn-details");

  updateBtn.addEventListener("click", () => updateAuthorForBook(id, book));
  deleteBtn.addEventListener("click", () => removeBook(id));
  detailsBtn.addEventListener("click", () => showBookDetails(book));

  booksGrid.appendChild(card);
}

// 7️⃣ Change only the author field using a prompt
async function updateAuthorForBook(id, book) {
  const newAuthorName = prompt("Type the updated author name:", book.author);

  if (!newAuthorName) return;

  try {
    const bookRef = doc(db, "books", id);
    await updateDoc(bookRef, { author: newAuthorName });
  } catch (error) {
    console.error("Author update failed:", error);
    alert("Could not update the author. Check console.");
  }
}

// 8️⃣ Remove a book document
async function removeBook(id) {
  const shouldDelete = confirm("Do you really want to remove this book?");

  if (!shouldDelete) return;

  try {
    const bookRef = doc(db, "books", id);
    await deleteDoc(bookRef);
  } catch (error) {
    console.error("Error removing book:", error);
    alert("Book could not be deleted. See console.");
  }
}

// 9️⃣ Simple details dialog for a book
function showBookDetails(book) {
  alert(
    `Title: ${book.title}\n` +
    `Author: ${book.author}\n` +
    `Price: ₹${book.price}\n` +
    `Cover URL: ${book.coverImageUrl}`
  );
}
