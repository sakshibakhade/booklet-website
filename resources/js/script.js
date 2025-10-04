// -------------------- Add to Wishlist --------------------

// Get all "Add to Wishlist" buttons
const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const bookItem = button.closest("li"); // get the parent <li>
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Convert the book to HTML (string only, not object)
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

// -------------------- Display Wishlist --------------------
const wishlistContainer = document.getElementById("wishlist-items");

if (wishlistContainer) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>No books in wishlist yet!</p>";
  } else {
    // ✅ FIXED: show wishlist items as HTML (string), not [object Object]
    wishlistContainer.innerHTML = wishlist.join("");

    // Add Remove Button Functionality
    document.querySelectorAll("#wishlist-items li").forEach((item) => {
      let removeBtn = document.createElement("button");
      removeBtn.innerText = "Remove ❌";
      removeBtn.classList.add("remove-btn");
      removeBtn.style.backgroundColor="orange";
      removeBtn.style.Color="black";
      removeBtn.style.padding="0.5rem 1rem";
      removeBtn.style.fontSize="1rem";
      removeBtn.style.textTransform="uppercase";
      removeBtn.style.borderRadius="10px";
      removeBtn.style.boxShadow="1px 1px 5px black";
      removeBtn.style.border="none";

      removeBtn.addEventListener("click", () => {
        item.remove();

        // Update localStorage after removing
        let updatedWishlist = [];
        document.querySelectorAll("#wishlist-items li").forEach((li) => {
          updatedWishlist.push(li.outerHTML);
        });
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      });

      item.appendChild(removeBtn);
    });
  }
}

// -------------------- Back Button --------------------
const backbtn = document.querySelector(".back-btn");
if (backbtn) {
  backbtn.addEventListener("click", () => {
    window.location.href = "../index.html#books-stock";
  });
}
