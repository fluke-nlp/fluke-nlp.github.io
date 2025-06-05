// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Account for fixed navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Results Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Framework Tab functionality
    const frameworkTabBtns = document.querySelectorAll('.framework-tab-btn');
    const frameworkTabContents = document.querySelectorAll('.framework-tab-content');
    
    frameworkTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all framework tabs and buttons
            frameworkTabBtns.forEach(b => b.classList.remove('active'));
            frameworkTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Copy citation to clipboard
function copyToClipboard() {
    const citationText = `@article{fluke2024,
  title={FLUKE: A Task-Agnostic Framework for Linguistic Capability Testing},
  author={Your Name and Co-author},
  journal={Conference/Journal Name},
  year={2024}
}`;
    
    // Create a temporary textarea element
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = citationText;
    document.body.appendChild(tempTextarea);
    
    // Select and copy the text
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        
        // Update button text to show success
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = '#10b981';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy citation: ', err);
        
        // Fallback for browsers that don't support execCommand
        if (navigator.clipboard) {
            navigator.clipboard.writeText(citationText).then(() => {
                const copyBtn = document.querySelector('.copy-btn');
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyBtn.style.background = '#10b981';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.style.background = '';
                }, 2000);
            });
        }
    }
    
    // Remove the temporary element
    document.body.removeChild(tempTextarea);
}

// Mobile menu toggle (if needed for responsive design)
function toggleMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('mobile-active');
} 