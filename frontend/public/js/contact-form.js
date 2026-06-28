document.addEventListener("submit", function (event) {
  var form = event.target;
  if (!form || form.id !== "contact-form") return;
  event.preventDefault();

  var status_el = document.getElementById("contact-form-status");
  var submit_btn = form.querySelector('button[type="submit"]');
  var payload = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    business: form.business.value,
    budget: form.budget.value,
    message: form.message.value,
    consent: form.consent.checked,
  };

  if (submit_btn) submit_btn.disabled = true;
  if (status_el) {
    status_el.classList.add("form-status--visible");
    status_el.style.color = "var(--text-secondary)";
    status_el.textContent = "Sending…";
  }

  fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then(function (res) {
      return res.json().then(function (data) {
        return { ok: res.ok, data: data };
      });
    })
    .then(function (result) {
      if (!result.ok) throw new Error((result.data && result.data.error) || "Something went wrong.");
      form.reset();
      if (status_el) {
        status_el.style.color = "var(--success)";
        status_el.textContent = "Thanks — we'll reply within one business day.";
      }
    })
    .catch(function (err) {
      if (status_el) {
        status_el.style.color = "var(--error)";
        status_el.textContent = err.message || "Something went wrong. Please try again or email us directly.";
      }
    })
    .finally(function () {
      if (submit_btn) submit_btn.disabled = false;
    });
});
