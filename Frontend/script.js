// ================= CONTACT FORM SUBMISSION =================

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    // If form is not present, stop (safety check)
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Collect data using name attributes (best practice)
        const data = {
            fullName: form.fullName?.value.trim(),
            email: form.email?.value.trim(),
            mobile: form.mobile?.value.trim(),
            city: form.city?.value.trim()
        };

        // Basic frontend validation
        if (!data.fullName || !data.email || !data.mobile || !data.city) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                alert("Thank you! Your details have been submitted.");
                form.reset();
            } else {
                alert(result.message || "Submission failed");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Server error. Please try again later.");
        }
    });
});
// NEWSLETTER SUBSCRIPTION
document.addEventListener("DOMContentLoaded", () => {
    const subscribeForm = document.getElementById("subscribeForm");

    if (subscribeForm) {
        subscribeForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = subscribeForm.email.value;

            try {
                const res = await fetch("http://localhost:5000/api/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email })
                });

                const result = await res.json();
                alert(result.message);
                subscribeForm.reset();
            } catch (err) {
                alert("Subscription failed");
            }
        });
    }
});

