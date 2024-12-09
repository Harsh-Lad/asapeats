document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    const footerContent = `
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <img src="./media/logo.png" alt="ASAP EATS logo" class="h-16">

                    <p class="mb-4">Indian flavors, Aussie style</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                            <i data-lucide="facebook"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                            <i data-lucide="instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                            <i data-lucide="twitter"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="text-xl font-semibold mb-4 text-secondary">Contact Us</h4>
                    <p>123 Curry Lane, Sydney, NSW 2000</p>
                    <p>Phone: (02) 9876 5432</p>
                    <p>Email: info@asapeats.com.au</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold mb-4 text-secondary">Opening Hours</h4>
                    <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                </div>
                
            </div>
            <div class="mt-12 pt-8 border-t border-gray-700 text-center">
                <p>&copy; 2023 ASAP EATS. All rights reserved.</p>
            </div>
        </div>
    `;

    footer.innerHTML = footerContent;
    lucide.createIcons();
});

