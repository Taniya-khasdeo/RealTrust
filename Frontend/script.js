// ================= CONTACT FORM SUBMISSION =================

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    // Safety check
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            fullName: form.fullName?.value.trim(),
            email: form.email?.value.trim(),
            mobile: form.mobile?.value.trim(),
            city: form.city?.value.trim()
        };

        if (!data.fullName || !data.email || !data.mobile || !data.city) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch(
                "https://realtrust-dnd2.onrender.com/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

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


// ================= NEWSLETTER SUBSCRIPTION =================

document.addEventListener("DOMContentLoaded", () => {
    const subscribeForm = document.getElementById("subscribeForm");

    if (!subscribeForm) return;

    subscribeForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = subscribeForm.email.value.trim();

        if (!email) {
            alert("Please enter your email");
            return;
        }

        try {
            const res = await fetch(
                "https://realtrust-dnd2.onrender.com/api/subscribe",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email })
                }
            );

            const result = await res.json();

            if (res.ok) {
                alert(result.message || "Subscribed successfully");
                subscribeForm.reset();
            } else {
                alert(result.message || "Subscription failed");
            }

        } catch (err) {
            console.error(err);
            alert("Subscription failed");
        }
    });
});
