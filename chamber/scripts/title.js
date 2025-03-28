document.addEventListener("DOMContentLoaded", () => {
  const orgTitleInput = document.querySelector('input[name="org-title"]');
  const orgTitlePattern = /^[A-Za-z\s\-]{7,}$/;

  if (orgTitleInput) {
    orgTitleInput.addEventListener("input", () => {
      if (!orgTitlePattern.test(orgTitleInput.value)) {
        orgTitleInput.setCustomValidity("Please enter at least 7 characters using only letters, spaces, or hyphens.");
      } else {
        orgTitleInput.setCustomValidity("");
      }
    });
  }
});
