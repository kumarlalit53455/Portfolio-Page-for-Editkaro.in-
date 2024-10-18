document.addEventListener('DOMContentLoaded', () => {
    const videoThumbs = document.querySelectorAll('.video-thumb');

    videoThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const category = thumb.dataset.category;
            alert(`Displaying videos for ${category}`);
            // You can add functionality to open a modal or navigate to a category-specific page here.
        });
    });
});
