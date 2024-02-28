/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

// get all modal triggers and modals
const modalTriggers = document.querySelectorAll(".uofi-modal-trigger");
const modals = document.querySelectorAll(".uofi-modal");

// get scrollbar width and create css variable for no-scroll class
document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.offsetWidth) + 'px');

// close modal handler
const closeModal = (modal, trigger) => {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
    modal.setAttribute("aria-hidden", "true");
    modal.removeAttribute("aria-modal");
    modal.removeAttribute("role");
    trigger.focus();
}

modalTriggers.forEach((trigger) => {
    trigger.onclick = () => {
        const modal = document.getElementById(trigger.dataset.modalTarget);
        const content = modal.querySelector(".uofi-modal-content");
        const closeButtons = modal.querySelectorAll(".uofi-modal-close-btn");

        // disable scroll of background content
        document.body.classList.add("no-scroll");
        document.body.addEventListener("touchmove", (e) => {
            e.preventDefault();
        });

        // show the modal
        modal.style.display = "block";

        // update modal attributes
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.removeAttribute("aria-hidden");

        // close the modal on close button click
        closeButtons.forEach((closeButton) => {
            closeButton.onclick = () => {
                closeModal(modal, trigger);
            }
        });

        // close the modal on background click
        modal.onclick = (e) => {
            if (e.target == modal) {
                closeModal(modal, trigger);
            }
        }

        // keyboard nav
        modal.focus();
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeModal(modal, trigger);
            } 

            // trap focus in modal
            if (e.shiftKey && e.key === "Tab") {
                if (document.activeElement === modal || document.activeElement === closeButtons[0]) {
                    e.preventDefault();
                    closeButtons[1].focus();
                }
            } else if (e.key === "Tab") {
                if (document.activeElement === closeButtons[1]) {
                    e.preventDefault();
                    closeButtons[0].focus();
                }
            } 
            
        });

    }
});

// add toolkit classes to InnerBlocks
modals.forEach((modal) => {
    
    // buttons
    const buttons = modal.querySelectorAll(".wp-block-button");
    if (buttons.length > 0) {
        buttons.forEach((button) => {
            const link = button.querySelector(".wp-block-button__link");
            link.classList.add("il-button");
    
            if (button.classList.contains("is-style-button-secondary")) {
                link.classList.add("il-white-orange");
            } else if (button.classList.contains("is-style-button-illini-blue-solid")) {
                link.classList.add("il-blue");
            } else if (button.classList.contains("is-style-button-illini-orange-solid")) {
                link.classList.add("il-orange");
            }
        });
    }

});