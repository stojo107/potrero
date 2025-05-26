 document.addEventListener('DOMContentLoaded', function() {
            // Content for each feature
            const featureContent = {
                'Solar Array': {
                    title: 'Solar Array',
                    image: 'https://images.squarespace-cdn.com/content/65d5a9893da8877c8350dba1/d4f92197-4345-48a6-befd-a115c25fc8cb/potrero+hero+solar+array+OPTIMIZED.jpg?content-type=image%2Fjpeg',
                    content: '<p>Our system includes 8,000 Watts of high-efficiency solar panels, carefully selected to maximize energy production while maintaining a clean aesthetic on your roof.</p><p>These all-black panels sit flush against your roof, creating a sleek, integrated appearance that enhances your home\'s look while generating clean energy. When paired with our large battery system, this solar array is designed to achieve near-zero annual electricity costs from your utility provider, even for a fully electrified, mid-sized home.</p><p>The panels are backed by comprehensive warranties and installed by our certified professionals to ensure optimal performance and longevity.</p>'
                },
                'Battery System': {
                    title: 'Battery System',
                    image: 'https://images.squarespace-cdn.com/content/65d5a9893da8877c8350dba1/573b0eac-1483-4909-aa4a-3b4d3edb5775/battery+system+outside+v3+OPTIMIZED.jpg?content-type=image%2Fjpeg',
                    content: '<p>Our battery system provides an impressive 29 kWh of energy storage capacity—exceeding even a Tesla Powerwall plus Tesla DC expansion pack (27 kWh total).</p><p>This substantial capacity ensures you have ample stored energy available when you need it most, whether during peak rate periods or power outages. The system is capable of exporting power at a very high rate (16 kW), enabling you to earn maximum export credits from your utility provider.</p><p>The intelligent management system optimizes charging and discharging cycles to maximize both energy independence and financial returns, creating a truly smart energy ecosystem for your home.</p>'
                },
                'Heat Pump(s)': {
                    title: 'Heat Pump(s)',
                    image: 'https://images.squarespace-cdn.com/content/65d5a9893da8877c8350dba1/d36e6e42-2ef3-4a03-977d-e10a774f6667/heat+pump+v14.jpg?content-type=image%2Fjpeg',
                    content: '<p>The EG4 9K Mini-Split 9000 BTU Air Conditioner / Heat Pump provides superior performance, hassle-free installation, and remote control via the Solar Aircon app. With ductless design, it simplifies cooling and heating, operating efficiently in various temperatures.</p><p>This Mini-Split is ideal for spaces up to 450 square feet, making it perfect for bedrooms, home offices, or smaller living areas. The unit is ENERGY STAR certified for maximum efficiency and backed by a comprehensive 5-Year Limited Warranty.</p><p>The ductless design eliminates the need for expensive and intrusive ductwork, making installation simpler and more cost-effective. Remote control via the Solar Aircon app allows you to adjust settings from anywhere, ensuring your space is always at the perfect temperature.</p>'
                },
                'Main Panel Upgrade': {
                    title: 'Smart Electrical Panel',
                    image: 'https://images.squarespace-cdn.com/content/65d5a9893da8877c8350dba1/0edd3cf6-9c7d-4dea-86b2-4ac42341f33d/gridboss+v2+OPTIMIZED.jpg?content-type=image%2Fjpeg',
                    content: '<p>Our smart electrical panel includes a monitoring app that tracks power draw from key circuits in your home and allows circuits to be turned on or off remotely. This gives you unprecedented control over your home\'s energy usage.</p><p>This advanced panel allows you to electrify your home without upgrading your main electrical panel—saving you $5,000-$10,000 as you electrify your home over the coming years. It\'s forward-compatible with your future energy needs.</p><p>The intuitive app provides real-time data on energy production, consumption, and storage, helping you optimize your usage patterns and maximize the financial benefits of your system.</p>'
                },
                'EV Charger(s)': {
                    title: 'EV Charger(s)',
                    image: 'https://images.squarespace-cdn.com/content/65d5a9893da8877c8350dba1/b5dabbff-f6a3-4a0a-ad68-fa4b280714f7/smappee+on+wall+w+ai.jpeg?content-type=image%2Fjpeg',
                    content: '<p>Our system includes a standard NEMA 14-50 outlet for plugging in a wide array of plug-in EV chargers, giving you flexibility in your charging equipment choices.</p><p>The circuit is wired for 32A (8 kW) continuous charging, more than enough for the vast majority of drivers, allowing you to quickly recharge your vehicle overnight or between trips.</p><p>Powered by your solar system during the day, this charger can provide truly clean energy for your electric vehicle, further reducing your carbon footprint and operating costs compared to grid-powered charging or traditional gasoline vehicles.</p>'
                }
            };
            
            // Create modal elements
            const modalOverlay = document.createElement('div');
            modalOverlay.className = 'potrero-modal-overlay';
            
            const modalContainer = document.createElement('div');
            modalContainer.className = 'potrero-modal-container';
            
            const modalHeader = document.createElement('div');
            modalHeader.className = 'potrero-modal-header';
            
            const modalTitle = document.createElement('h3');
            modalTitle.className = 'potrero-modal-title';
            
            const closeButton = document.createElement('button');
            closeButton.className = 'potrero-modal-close';
            closeButton.innerHTML = '×';
            
            const modalBody = document.createElement('div');
            modalBody.className = 'potrero-modal-body';
            
            const modalImageContainer = document.createElement('div');
            modalImageContainer.className = 'potrero-modal-image-container';
            
            const modalImage = document.createElement('img');
            modalImage.className = 'potrero-modal-image';
            modalImage.alt = 'Feature image';
            
            // Assemble modal
            modalImageContainer.appendChild(modalImage);
            modalHeader.appendChild(modalTitle);
            modalHeader.appendChild(closeButton);
            modalContainer.appendChild(modalHeader);
            modalContainer.appendChild(modalImageContainer);
            modalContainer.appendChild(modalBody);
            modalOverlay.appendChild(modalContainer);
            document.body.appendChild(modalOverlay);
            
            // Make entire feature card clickable
            const featureCards = document.querySelectorAll('.potrero-feature-card');
            
            featureCards.forEach(card => {
                card.addEventListener('click', function(e) {
                    // Find which feature was clicked by looking at the feature title
                    const featureTitle = this.querySelector('.potrero-feature-title').textContent;
                    
                    // Get content for this feature
                    const feature = featureContent[featureTitle];
                    if (feature) {
                        // Set modal content
                        modalTitle.textContent = feature.title;
                        modalImage.src = feature.image;
                        modalBody.innerHTML = feature.content;
                        
                        // Show modal with animation
                        modalOverlay.style.display = 'block';
                        
                        // Force reflow for animation to work
                        void modalOverlay.offsetWidth;
                        
                        modalOverlay.style.opacity = '1';
                        modalContainer.style.opacity = '1';
                        modalContainer.style.transform = 'translate(-50%, -50%) scale(1)';
                    }
                });
            });
            
            // Close modal when clicking the close button or outside the modal
            closeButton.addEventListener('click', closeModal);
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    closeModal();
                }
            });
            
            // Close modal with escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modalOverlay.style.display === 'block') {
                    closeModal();
                }
            });
            
            function closeModal() {
                modalOverlay.style.opacity = '0';
                modalContainer.style.opacity = '0';
                modalContainer.style.transform = 'translate(-50%, -50%) scale(0.95)';
                
                // Wait for animation to finish before hiding
                setTimeout(() => {
                    modalOverlay.style.display = 'none';
                }, 300);
            }
            
            // IMPORTANT: Fix for Squarespace-specific issues
            // This is a critical addition to solve the blank space issue
            function notifySquarespaceOfHeight() {
                // Check if we're in a Squarespace environment
                if (window.parent && window.parent !== window) {
                    // Get the actual height of our content
                    const container = document.querySelector('.potrero-system-container');
                    const actualHeight = container ? container.offsetHeight : 0;
                    
                    // Create a message for Squarespace to resize the container
                    try {
                        // Send a message to the parent frame (Squarespace) with our height
                        window.parent.postMessage({
                            type: 'custom-code-height',
                            height: actualHeight
                        }, '*');
                    } catch (e) {
                        console.log('Error posting message to parent', e);
                    }
                }
            }
            
            // Run our height notification when page loads and after a short delay
            window.addEventListener('load', function() {
                // Immediate notification
                notifySquarespaceOfHeight();
                
                // And again after a short delay to catch any dynamic content
                setTimeout(notifySquarespaceOfHeight, 500);
            });
            
            // Also run when window resizes
            window.addEventListener('resize', notifySquarespaceOfHeight);
            
            // For mobile specifically, add an extra check after images load
            const allImages = document.querySelectorAll('.potrero-feature-image');
            let loadedImages = 0;
            
            function checkAllImagesLoaded() {
                loadedImages++;
                if (loadedImages >= allImages.length) {
                    // All images loaded, notify of height
                    setTimeout(notifySquarespaceOfHeight, 100);
                }
            }
            
            allImages.forEach(img => {
                if (img.complete) {
                    checkAllImagesLoaded();
                } else {
                    img.addEventListener('load', checkAllImagesLoaded);
                    img.addEventListener('error', checkAllImagesLoaded);
                }
            });
        });