        /* --- 1. Initialize Scroll Animations --- */
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        /* --- 2. Typewriter Effect --- */
        const typeText = "বাংলাদেশের সাইবার স্পেস সুরক্ষিত করতে ২ বছরের নিবিড় প্রশিক্ষণের মাধ্যমে ১৬ থেকে ২৬ বছর এর </১০০০ জনকে এলিট ইথিক্যাল হ্যাকার হিসেবে গড়ে তোলার মিশন নিয়েছি আমরা।";
        const typeContainer = document.getElementById("typewriter-text");
        let charIndex = 0;
        
        function typeWriter() {
            if (charIndex < typeText.length) {
                typeContainer.innerHTML += typeText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 40); // টাইপিং স্পিড
            }
        }
        setTimeout(typeWriter, 500);

        /* --- 3. Mobile Menu Auto-Close Fix --- */
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        /* --- 4. Dynamic Team Data Injector --- */
        const teams = [
            { id: "01", name: "Red Team", role: "Offensive Security & Pentesting", color: "border-red-500" },
            { id: "02", name: "Blue Team", role: "Defensive Security & Monitoring", color: "border-blue-500" },
            { id: "03", name: "Purple Team", role: "Integration & Tactics", color: "border-purple-500" },
            { id: "04", name: "Cyber Intel", role: "OSINT & Threat Intelligence", color: "border-cyberGreen" },
            { id: "05", name: "Malware Labs", role: "Reverse Engineering", color: "border-yellow-500" },
            { id: "06", name: "Crypto Core", role: "Cryptography & Blockchain Sec", color: "border-teal-500" },
            { id: "07", name: "Cloud Sec", role: "AWS/Azure/GCP Security", color: "border-sky-500" },
            { id: "08", name: "IoT Hackers", role: "Hardware & Network Devices", color: "border-orange-500" },
            { id: "09", name: "Web App Sec", role: "Bug Bounty & Web Exploits", color: "border-pink-500" },
            { id: "10", name: "Social Eng.", role: "Human Factor & Phishing", color: "border-gray-400" }
        ];

        const teamGrid = document.getElementById('team-grid');
        teams.forEach((team, index) => {
            teamGrid.innerHTML += `
                <div class="team-card p-6 relative group cursor-crosshair border-l-4 ${team.color}" data-aos="fade-up" data-aos-delay="${(index % 5) * 100}">
                    <div class="absolute top-4 right-4 text-xs font-mono text-gray-600 group-hover:text-cyberGreen transition">
                        [100 SEATS]
                    </div>
                    <div class="text-4xl font-bold text-gray-800 mb-2 font-mono group-hover:text-gray-600 transition">${team.id}</div>
                    <h3 class="text-xl font-bold text-white mb-2">${team.name}</h3>
                    <p class="text-sm text-gray-400 h-12">${team.role}</p>
                    
                    <div class="mt-6 flex items-center justify-between border-t border-gray-800 pt-4">
                        <span class="text-xs font-mono text-cyberGreen opacity-0 group-hover:opacity-100 transition">REQUEST_ACCESS</span>
                        <svg class="w-5 h-5 text-gray-600 group-hover:text-cyberGreen transform group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </div>
            `;
        });

        /* --- 5. Optimized Matrix Digital Rain Effect --- */
        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
        const fontSize = 14;
        let columns = canvas.width / fontSize;
        let drops = Array.from({ length: Math.floor(columns) }).fill(1);

        let lastTime = 0;
        const fpsInterval = 1000 / 20;

        function drawMatrix(currentTime) {
            requestAnimationFrame(drawMatrix);
            
            const deltaTime = currentTime - lastTime;
            
            if (deltaTime > fpsInterval) {
                ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#00ff41";
                ctx.font = fontSize + "px monospace";

                for (let i = 0; i < drops.length; i++) {
                    const text = letters.charAt(Math.floor(Math.random() * letters.length));
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
                lastTime = currentTime - (deltaTime % fpsInterval);
            }
        }
        requestAnimationFrame(drawMatrix);

        window.addEventListener('resize', () => {
            resizeCanvas();
            columns = canvas.width / fontSize;
            drops = Array.from({ length: Math.floor(columns) }).fill(1);
        });


//⚠️ সতর্কবার্তা – সিক্রেট মিশন
        
    const agreeCheck = document.getElementById("agreeCheck");
    const acceptBtn = document.getElementById("acceptBtn");
    const successMsg = document.getElementById("successMsg");

    agreeCheck.addEventListener("change", function () {
        acceptBtn.disabled = !this.checked;
    });

    acceptBtn.addEventListener("click", function () {
        successMsg.classList.remove("hidden");
        acceptBtn.innerText = "✔ সম্মতি সম্পন্ন";
        acceptBtn.classList.add("bg-green-700");
    });