
// Click handler for spoiler and preview triggers
document.addEventListener('DOMContentLoaded', function() {
    // Helper function to close all expanded items
    function closeAllExpandedItems() {
        document.querySelectorAll('.expandable').forEach(item => {
            item.classList.remove('expanded');
            const content = item.querySelector('.spoiler-content');
            content.style.maxHeight = null;
        });
    }

    // Expandable spoiler functionality
    document.querySelectorAll('.expandable').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const wasExpanded = this.classList.contains('expanded');

            closeAllExpandedItems();

            if (!wasExpanded) {
                this.classList.add('expanded');
                const content = this.querySelector('.spoiler-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Preview trigger functionality
    document.querySelectorAll('.preview-trigger').forEach(trigger => {
        const projectCard = trigger.closest('.project-list > li');
        const preview = projectCard.querySelector('.gif-preview');

        // Hover handlers
        trigger.addEventListener('mouseenter', () => {
            preview.style.opacity = '1';
            preview.style.transform = 'translateX(-50%) translateY(0)';
        });

        trigger.addEventListener('mouseleave', () => {
            preview.style.opacity = '0';
            preview.style.transform = 'translateX(-50%) translateY(10px)';
        });

        // Click handler
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllExpandedItems();
            const modal = document.querySelector('.fullsize-modal');
            modal.querySelector('img').src = trigger.dataset.fullsize;
            modal.style.display = 'flex';
        });
    });

    // Modal functionality
    const modal = document.querySelector('.fullsize-modal');
    document.querySelector('.modal-close').addEventListener('click', (e) => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target.closest('.fullsize-modal') === modal) {
            modal.style.display = 'none';
        }
    });
});
