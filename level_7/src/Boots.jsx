import React, { useState } from "react";

export default function Boots() {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      text: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
      category: "Success",
      likes: 8,
    },
    {
      id: 2,
      text: "Small progress each day adds up to big results.",
      author: "Confucius",
      category: "Perseverance",
      likes: 14,
    },
    {
      id: 3,
      text: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
      category: "Mindset",
      likes: 22,
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [formData, setFormData] = useState({
    text: "",
    author: "",
    category: "Success",
  });

  // Add new quote handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.text || !formData.author) return;

    const newQuote = {
      id: Date.now(),
      ...formData,
      likes: 0,
    };

    setQuotes([newQuote, ...quotes]);
    setFormData({ text: "", author: "", category: "Success" });

    // Bootstrap modal band karne ka tareeqa
    const modalEl = document.getElementById("quoteModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  };

  // Like increment handler
  const handleLike = (id) => {
    setQuotes(
      quotes.map((q) => (q.id === id ? { ...q, likes: q.likes + 1 } : q)),
    );
  };

  // Filter logic
  const visibleQuotes =
    filter === "All" ? quotes : quotes.filter((q) => q.category === filter);

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#!">
            ⚡ VibeCheck
          </a>
          <button
            className="btn btn-warning btn-sm fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#quoteModal"
          >
            + Add Quote
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white py-5 text-center shadow-sm">
        <div className="container">
          <h1 className="fw-bold display-5 mb-2">Fuel Your Daily Grind</h1>
          <p className="lead opacity-75">
            Curated thoughts to keep you shipping code and staying focused.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container my-5 flex-grow-1">
        {/* Filter Buttons & Title */}
        <div className="row align-items-center mb-4 g-3">
          <div className="col-md-6">
            <h3 className="fw-bold mb-0">Saved Wisdom</h3>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="btn-group shadow-sm">
              {["All", "Success", "Perseverance", "Mindset"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`btn btn-outline-primary btn-sm ${filter === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quotes Card Grid */}
        <div className="row g-4">
          {visibleQuotes.map((quote) => (
            <div className="col-md-6 col-lg-4" key={quote.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column p-4">
                  <div className="mb-3">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                      {quote.category}
                    </span>
                  </div>
                  <p className="card-text fs-5 text-secondary fst-italic mb-4">
                    "{quote.text}"
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-dark">— {quote.author}</span>
                    <button
                      onClick={() => handleLike(quote.id)}
                      className="btn btn-sm btn-outline-danger border-0"
                    >
                      ❤️️ {quote.likes}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Add Quote Modal */}
      <div className="modal fade" id="quoteModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title">Drop a New Quote</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Quote</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={formData.text}
                    onChange={(e) =>
                      setFormData({ ...formData, text: e.target.value })
                    }
                    placeholder="Keep it memorable..."
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    placeholder="Who said it?"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Category</label>
                  <select
                    className="form-select"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option value="Success">Success</option>
                    <option value="Perseverance">Perseverance</option>
                    <option value="Mindset">Mindset</option>
                  </select>
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-dark">
                    Post Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-muted small border-top bg-white">
        <p className="mb-0">
          Built with React & Bootstrap 5 • Clean and responsive.
        </p>
      </footer>
    </div>
  );
}
