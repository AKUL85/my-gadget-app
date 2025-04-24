import React, { useState } from 'react';

const Review = () => {
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (reviewText.trim()) {
            const newReview = {
                id: Date.now(), // Unique ID for each review
                text: reviewText,
                date: new Date().toLocaleString()
            };
            setReviews([...reviews, newReview]);
            setReviewText('');
        }
    };

    const handleRemoveReview = (id) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="mb-8">
                <form onSubmit={handleReviewSubmit}>
                    <fieldset className="fieldset border border-gray-300 rounded-lg p-4">
                        <legend className="fieldset-legend px-2 text-gray-700 font-medium">Write Review</legend>
                        <textarea 
                            className="textarea w-full h-24 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500" 
                            placeholder="Share your thoughts..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            required
                        ></textarea>
                        <div className="label text-sm text-gray-500 mt-1">Optional</div>
                        <button 
                            type="submit"
                            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition duration-200"
                        >
                            Post Review
                        </button>
                    </fieldset>
                </form>
            </div>
            
            <div className="reviews-container">
                <h2 className="text-xl font-semibold mb-4">Posted Reviews</h2>
                {reviews.length === 0 ? (
                    <p className="text-gray-500">No reviews yet. Be the first to share your thoughts!</p>
                ) : (
                    <div className="space-y-4">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative">
                                <p className="text-gray-800 mb-2">{review.text}</p>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>{review.date}</span>
                                    <button 
                                        onClick={() => handleRemoveReview(review.id)}
                                        className="text-red-500 hover:text-red-700"
                                        aria-label="Remove review"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Review;