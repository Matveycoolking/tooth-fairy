const appointmentForm = document.querySelector(".appointment");
const appointmentButton = appointmentForm?.querySelector("button");
const appointmentModal = document.querySelector(".appointment-modal");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

function openAppointmentModal() {
  appointmentModal?.classList.add("is-open");
  appointmentModal?.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeAppointmentModal() {
  appointmentModal?.classList.remove("is-open");
  appointmentModal?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

appointmentButton?.addEventListener("click", () => {
  appointmentButton.classList.add("is-done");
  openAppointmentModal();

  window.setTimeout(() => {
    appointmentButton.classList.remove("is-done");
  }, 900);
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeAppointmentModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAppointmentModal();
  }
});
