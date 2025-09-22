// -------------------- Add Book to Wishlist --------------------

// Get all "Add to Wishlist" buttons
const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const bookItem = button.closest("li"); // get the parent <li>
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Convert the book to HTML
    const bookHTML = bookItem.outerHTML;

    // Prevent duplicates
    if (!wishlist.includes(bookHTML)) {
      wishlist.push(bookHTML);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Book added to wishlist ❤️");
    } else {
      alert("This book is already in your wishlist!");
    }
  });
});

// -------------------- Display Wishlist on wishlist.html --------------------

const wishlistContainer = document.getElementById("wishlist-items");

if (wishlistContainer) {
  // Load wishlist from localStorage
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlistContainer.innerHTML = wishlist.join("");

  // Add "Remove" button for each item
  const wishlistItems = wishlistContainer.querySelectorAll("li");

  wishlistItems.forEach((item) => {
    const removeBtn = document.createElement("button");
    // removeBtn.textContent = "❌ Remove";
    removeBtn.style.backgroundColor = "orange";
    removeBtn.style.color = "white";
    removeBtn.style.borderRadius = "5px";
    removeBtn.style.padding = "0.5rem 1rem";
      removeBtn.classList.add("remove-btn");
      removeBtn.classList.add("remove-btn");
      
    item.appendChild(removeBtn);

    removeBtn.addEventListener("click", () => {
      item.remove();

      // Update localStorage after removal
      const updatedWishlist = Array.from(
        wishlistContainer.querySelectorAll("li")
      ).map((li) => li.outerHTML);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    });
  });
}

// -------------------- Back Button --------------------

// Go back to index.html#books-stock
const backbtn = document.querySelector(".back-btn");

if (backbtn) {
  backbtn.addEventListener("click", () => {
    window.location.href = "../index.html#books-stock";
  });
}
